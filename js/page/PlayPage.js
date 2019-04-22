import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import Title from '../common/Title';
import Pl from '../common/Pl';
import Bpl from '../common/Bpl';
import PlayTop from '../common/PlayTop';
import RVideo from 'react-native-video';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Api from '../expand/api';
import MB from '../common/ModalBox';
import {connect} from 'react-redux';
import actions from '../action';

type Props = {};
class PlayPage extends Component<Props> {
  static navigationOptions = {
      header: null,
  }
  constructor (props) {
    super(props);
    this.state = {
      ads: false,
      show: true,
      muted: false,
      duration: '',
      play: true,
      time: '',
      likeCount: 0,
      commentList: [],
      content: '',
      flag: false,
      videoMsg: {}
    }
  }
  
  _getCommentList (id) {
    let _ = this;
    Api.commentList({token: this.props.token,mediaId: id}, function (data) {
      _.setState({
        commentList: [].concat(data).reverse()
      });
      console.log(_.state.commentList);
    }, function (msg) {}); 
  }

  timeFliter (str) {
    let time1 = (new Date(str)).getTime();
    let now = Date.now();
    let time = (now-time1)/1000;
    let out = ''
    time < 1
      ? out = '1秒前'
      : time < 60
        ? out = Math.floor(time) + '秒前'
        : time < 60*60
          ? out = Math.floor(time/60) + '分钟前'
          : time < 60*60*24
            ? out = Math.floor(time/(60*60)) + '小时前'
            : out = Math.floor(time/(60*60*24)) + '天前'
    return out;
  }

  like(id) {
    let _ = this;
    Api.like({token: this.props.token,commentId: id}, function (data) {
      _._getCommentList(_.props.navigation.state.params.id)
    }, function (msg) {}); 
  }

  isLike (id) {
    if (!this.props.status) {
      this.setState({
        content: '请先登录',
        flag: true,
      })
    } else {
      this.like(id);
    }
  }

  send (id, comment) {
    let _ = this;
    if (!this.props.status) {
      _.setState({
        content: '请先登录',
        flag: true,
      })
    } else {
      Api.createComment({token: this.props.token, mediaId: id, comment: comment}, function (data) {
        _._getCommentList(id)
      }, function (msg) {
        console.log(msg);
      });
    }
  }
  sure () {
    this.setState({
      flag: false,
    })
  }
  singleMedia (id) {
    let _ = this;
    Api.singleMedia({token: this.props.token,mediaId: id}, function (res) {
      console.log(res)
      _.setState({
        videoMsg: Object.assign({}, res),
        time: res.createTime.slice(0,10),
        likeCount: res.likeCount,
      })
    }, function (err) {
    })
  }

  componentDidMount () {
    let id = this.props.navigation.state.params.id;
    this.singleMedia(id)
    this._getCommentList(id);
  }
  
  render () {
    return (
      <View style={styles.wrap}>
        <View style={[styles.ksp, {zIndex: 1}]}>
          <RVideo
            ref={(ref) => this.videoPlayer = ref}
            source={{uri: this.state.videoMsg.mediaUrl}}
            //controls={true}
            onLoadStart={(e) => {
              console.log("onLoadStart: ", e);
            }}
            onError={() => {
              console.log("加载视频出错", 2);
            }}
            rate={this.state.play ? 1.0 : 0.0}
            volume={1.0}
            muted={this.state.muted}
            resizeMode={'stretch'}
            playWhenInactive={false}
            playInBackground={false}
            ignoreSilentSwitch={'ignore'}
            progressUpdateInterval={250.0}
            onBuffer={(e) => {
              console.log('缓冲中: ', e);
            }}
            onLoad={({duration}) => {
              let t = '';
              if (duration > 60) {
                let min = Math.floor(duration/60);
                if (min < 10) {
                  min = '0' + min;
                }
                let sec = Math.floor(duration%60);
                if (sec < 10) {
                  sec = '0' + sec;
                }
                t = min + ':' + sec
              } else {
                if (duration >= 10) {
                  t = '00:'+Math.floor(duration)
                } else {
                  t = '00:0'+Math.floor(duration)
                }
              }
              
              this.setState({
                duration: t
              })
            }}
            style={{width: unitWidth*750,height: unitWidth*608,borderColor: 'rgba(0,0,0,.3)',borderWidth: unitWidth*1}}
            />
        </View>
        <TouchableOpacity style={[styles.ksp, {zIndex: 2}]} onPress={() => {
          this.setState({
            show: !this.state.show
          })
        }}>
          <View style={[styles.ksp, {backgroundColor: 'rgba(0,0,0,0)'}]}>
            <TouchableOpacity
              style={styles.vm1}
              onPress={() => {
                this.setState({
                  muted: !this.state.muted
                })
            }}>
              <View style={this.state.show ? styles.vm : [styles.vm, {display: 'none'}]}>
                {
                  this.state.muted
                  ? (<MaterialIcons name={'volume-off'} style={styles.vmIn}/>)
                  : (<MaterialIcons name={'volume-up'} style={styles.vmIn}/>)
                }
              </View>
            </TouchableOpacity>
            <View style={this.state.show ? styles.vb : [styles.vb, {display: 'none'}]}>
              <View style={styles.vbt}>
                <Text style={styles.vbtf}>0:00</Text>
                <Text style={styles.vbtf}>{this.state.duration}</Text>
              </View>
              <View style={styles.vbb}>
                <TouchableOpacity onPress={() => {
                  this.setState({
                    play: !this.state.play
                  })
                }}>
                  {
                    this.state.play
                    ? (<Feather name={'play'} style={{color: 'white', fontSize: unitWidth*30}}/>)
                    : (<AntDesign name={'pause'} style={{color: 'white', fontSize: unitWidth*30}}/>)
                  }
                </TouchableOpacity>
                <View style={styles.progress}></View>
                  <Text style={styles.vbtf}></Text>
                </View>
              </View>
            </View>
        </TouchableOpacity>
        <View style={{position:'relative', zIndex: 3}}>
          <PlayTop 
            title={this.state.videoMsg.mediaName} 
            logo={'back'}
            icon={require('../res/image/search.png')}
            mid={false}/>
        </View>
        <View style={styles.block}></View>
        <View style={this.state.ads ? styles.gg : [styles.gg, {display: 'none'}]}>
          <Image source={require('../res/image/gg.jpg')} style={styles.ggi}></Image>
        </View>
        <Title 
          title={this.state.videoMsg.mediaName} 
          time={this.state.time} 
          likeCount={this.state.likeCount} 
          icon1={require('../res/image/i1.png')}
          icon2={require('../res/image/i2.png')}
          icon3={require('../res/image/i3.png')} />
        <Text style={styles.title}>最新评论</Text>
        <View style={styles.line}></View>
        <ScrollView style={{width: unitWidth*750,}}>
          {
            this.state.commentList.map((item, index) => {
              return (<Pl 
                key={index}
                name={item.userId}
                icon={item.likeCount>0}
                time={this.timeFliter(item.createTime)}
                content={item.comment}
                num={item.likeCount} 
                id={item.id}
                like={() => this.isLike(item.id)}/>)
            })
          }
        </ScrollView>
        <Bpl 
          id={this.props.navigation.state.params.id}
          send={(id, comment) => this.send(id, comment)}/>
        <MB 
          content={this.state.content} 
          isModal={this.state.flag}
          sure={() => this.sure()}/>
      </View>
    );
    
  }
}

const mapStateToProps = state => ({
  status: state.status.status,
  token: state.token.token,
});
export default connect(mapStateToProps)(PlayPage);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ksp: {
    width: unitWidth*750,
    height: unitWidth*608,
    position: 'absolute',
    top: 0,
  },
  gg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ggi: {
    height: unitWidth*148,
    width: unitWidth*690,
    borderRadius: unitWidth*10,
  },
  title: {
    width: unitWidth*750,
    fontSize: 14,
    color: '#2A2A2A',
    paddingLeft: unitWidth*66,
    paddingBottom: unitWidth*8, 
  },
  line: {
    backgroundColor: '#F4F4F4',
    width: unitWidth*750,
    height: unitWidth*2,
  },
  block: {
    width: unitWidth*750,
    height: unitWidth*504,
  },
  vb: {
    position: 'absolute', 
    width: unitWidth*750, 
    height: unitWidth*80, 
    bottom: 0,
    paddingLeft: unitWidth*28, 
    paddingRight: unitWidth*28, 
  },
  vm: { 
    width: unitWidth*80, 
    height: unitWidth*80, 
    backgroundColor: 'rgba(0,0,0,6)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: unitWidth*40, 
  },
  vm1: {
    position: 'absolute', 
    width: unitWidth*80, 
    height: unitWidth*80, 
    left: unitWidth*28,
    top: unitWidth*263,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: unitWidth*40, 
  },
  vmIn: {
    fontSize: unitWidth*60,
    color: 'white',
  },
  vbt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vbtf: {
    fontSize: unitWidth*32,
    color: '#EFF5F8',
  },
  vbb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: unitWidth*40,
  },
  progress: {
    width:unitWidth*578,
    height:unitWidth*10,
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius: unitWidth*5,
  },







  
  nomal: {
    
    marginRight: unitWidth*32, 
  },
  active: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#FD568C',
    borderRadius: unitWidth*19, 
    lineHeight: unitWidth*38, 
    height: unitWidth*38, 
    marginRight: unitWidth*32, 
    overflow: 'hidden',
    paddingLeft: unitWidth*20, 
    paddingRight: unitWidth*20, 
  },
  
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: unitWidth*40,
    marginBottom: unitWidth*40,
  },
  spg: {
    width: unitWidth*710,
    height: unitWidth*359,
  },
  
  
  
  
  e: {
    width: unitWidth*750,
    height: unitWidth*80,
    paddingLeft: unitWidth*30,
  },
  ctitle: {
    lineHeight: unitWidth*80,
    color: '#979BA7',
    fontSize: 14,
  },
  box: {
    width: unitWidth*750,
    height: unitWidth*80,
    paddingLeft: unitWidth*30,
    paddingRight: unitWidth*37,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: unitWidth*34,
    height: unitWidth*30,
    marginRight: unitWidth*32,
  },
  content: {
    color: '#2A2A2A',
    fontSize: 14,
  },
  ra: {
    width: unitWidth*12,
    height: unitWidth*19,
  }
})