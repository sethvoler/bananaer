
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, TextInput, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import Feather from 'react-native-vector-icons/Feather';
import ImgTop from '../common/ImgTop';
import MyImg from '../common/MyImg';
import Api from '../expand/api';
import MB from '../common/ModalBox';
import {connect} from 'react-redux';
import actions from '../action';
import Pl from '../common/Pl';

type Props = {};
class ImgListPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      content: '',
      imgs: [],
      curImg: 1,
      count: 0,
      commentsData: [],
      imgsMsg: {},
      comment: '',
    }
  }
  
  static navigationOptions = {
    header: null,
  }
  sure () {
    this.setState({
      flag: false,
    })
  }
  
  getImgList (id) {
    let _ = this;
    Api.imgList({albumId: id, toekn: this.props.token}, function (data) {
      _.setState({
        imgs: [].concat(data)
      })
      
    }, function (msg) {
      _.setState({
        flag: true,
        content: msg,
      })
    })
  }
  toBack () {
    let scrollView = this.refs.scrollView;
    if (this.state.curImg>1) {
      let t = this.state.curImg;
      this.setState({curImg: this.state.curImg-1});
      let offsetX = (t-2) * unitWidth * 750;
      scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
    } else {
      this.setState({
        flag: true,
        content: '已无更多图片',
      })
    }
  }
  toNext () {
      let scrollView = this.refs.scrollView;
      if (this.state.curImg < this.state.imgs.length) {
        let t = this.state.curImg;
        this.setState({curImg: this.state.curImg+1});
        let offsetX = t * unitWidth * 750;
        scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
      } else {
        this.setState({
          flag: true,
          content: '已无更多图片',
        })
      }   
  }
  dz (id) {
    let _ = this;
    Api.imgsLike({albumId: id}, function (data) {
      _.getImgsMsg(id);
    }, function (msg) {
      _.setState({
        flag: true,
        content: msg,
      })
    })
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
  getImgsMsg (id) {
    let _ = this;
    Api.imgsMsg({albumId: id}, function (data) {
      _.setState({
        imgsMsg: Object.assign({}, data)
      })
      console.log('草，要疯了，这接口真几把多：',_.state.imgsMsg);
    }, function (msg) {
      _.setState({
        flag: true,
        content: msg,
      })
    })
  }
  getImgCommentList (id) {
    let _ = this;
    Api.imgsCommentList({albumId: id}, function (data) {
      _.setState({
        commentsData: [].concat(data).reverse(),
      })
      console.log('I want know:',_.state.commentsData);
    }, function (msg) {
      _.setState({
        flag: true,
        content: msg,
      })
    })
  }
  isLike (id) {
    let _ = this;
    Api.likes({token: this.props.token,commentId: id}, function (data) {
      _.getImgCommentList(_.props.navigation.state.params.id)
    }, function (msg) {}); 
  }
  send (id, comment) {
    let _ = this;
    Api.createComments({token: this.props.token, albumId: id, comment: comment}, function (data) {
      _.getImgCommentList(id)
    }, function (msg) {
      console.log(msg);
    });
  }
  

  componentDidMount() {
    let id = this.props.navigation.state.params.id;
    this.getImgList(id);
    this.dz(id);
    this.getImgCommentList(id);
  }
  render() {
    return (
      <View style={styles.wrap}>
        {/* top */}
        <View style={styles.top}>
          <TouchableOpacity 
            style={{
              width: unitWidth*200, 
              position: 'relative', 
              height: unitWidth*200, 
              top: unitWidth*(-100), 
              left: unitWidth*(-100),}}
            onPress={() => {
              NavigationUtil.goBackPage({navigation: this.props.navigation});
            }}>
            <Image style={styles.back} source={require('../res/image/backen.png')}></Image>
          </TouchableOpacity>
          <Text style={{color: '#fff', fontSize: unitWidth*28}}>
            <Text style={{color: '#FF3A27', fontSize: unitWidth*28}}>{this.state.curImg}</Text>/{this.state.imgs.length}
          </Text>
        </View>
        <View style={{width: unitWidth*750,height: unitWidth*280,}}></View>
        <ScrollView refreshControl={true} style={{width: unitWidth*750,}}>
          <View style={{flexDirection:'row', width: unitWidth*750*this.state.imgs.length,height: unitWidth*1149,}}>
            <ScrollView horizontal={true} 
              ref='scrollView'
              >   
              {
                this.state.imgs.map((item, index) => {
                  let url = item.imgUrl
                  return (<Image resizeMode={'stretch'} source={{uri: url}} style={{height: unitWidth*1149,width: unitWidth*750}}></Image>);
                })
              }   
              </ScrollView>
            <View style={{position:'absolute',top:0,left:0,height:unitWidth*1149,width:unitWidth*750,flexDirection:'row',}}>
              <TouchableOpacity 
                style={{height:unitWidth*1149,width:unitWidth*750,}}
                onPressIn={(e) => {
                  this.in = e.nativeEvent.pageX;
                }}
                onPressOut={(e) => {
                  this.out = e.nativeEvent.pageX;
                  if (this.out - this.in > unitWidth * 300) {
                    this.toBack()
                  } else if (this.in - this.out > unitWidth * 300) {
                    this.toNext()
                  }
                }}
                ></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.headers}>{this.state.imgsMsg.name}</Text>
          <Text style={styles.title}>最新评论</Text>
          <View style={styles.line}></View>
          {
            this.state.commentsData.map((item, index) => {
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
          <View style={{height: unitWidth*80, width: unitWidth*750}}></View>
        </ScrollView>
        {/* bottom */}
        <View style={styles.bottom}>
          <View style={styles1.wrap}>
            <View style={styles1.left}>
              <Image style={styles1.ple} source={require('../res/image/ple.png')}></Image>
              <TextInput style={styles1.input} placeholder={'说些什么吧！'} 
                onChangeText={(text) => {
                  this.setState({
                    comment: text
                  })
                }}/>
              <TouchableOpacity 
                onPress={() => {this.send(this.props.navigation.state.params.id, this.state.comment)}}
                style={{position: 'absolute', right: unitWidth*28}}>
                <Feather name="send" size={unitWidth*28} color="#fff"/>
              </TouchableOpacity>
            </View>
            <View style={styles1.right}>
              <View style={styles1.dzBox}>
                <View style={styles1.dzIn}><Text style={styles1.dzNum}>{this.state.imgsMsg.likeCount}</Text></View>
                <Image style={styles1.dz} source={require('../res/image/i0.png')}></Image>
              </View>
              <View style={styles1.plBox}>
                <View style={styles1.plIn}><Text style={styles1.plNum}>{this.state.commentsData.length}</Text></View>
                <Image style={styles1.pl} source={require('../res/image/pl.png')}></Image>
              </View>
              <Image style={styles1.mx} source={require('../res/image/kxen.png')}></Image>
              <Image style={styles1.xz} source={require('../res/image/xzen.png')}></Image>
            </View>
          </View>
        </View>
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
export default connect(mapStateToProps)(ImgListPage);

const styles = StyleSheet.create({
  wrap: {
    // flexDirection: 'column',
    // alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  top: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: unitWidth*28,
    paddingRight: unitWidth*28,
    width: unitWidth*750,
    height: unitWidth*220,
    paddingTop: unitWidth*50,
    backgroundColor: '#000',
    marginTop: unitWidth*60,
  },
  back: {
    width: unitWidth*15,
    height: unitWidth*27,
    position: 'relative', 
    top: unitWidth*100, 
    left: unitWidth*100,
  },
  headers: {
    fontSize: 14,
    color: '#2A2A2A',
    paddingLeft: unitWidth*66,
    marginBottom:unitWidth*40,
    marginTop: unitWidth*30,
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
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: unitWidth*750,
    height: unitWidth*120,
  }
});

const styles1 = StyleSheet.create({
  wrap: {
    width: unitWidth*750,
    height: unitWidth*52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: unitWidth*30, 
    paddingRight: unitWidth*40, 
    marginBottom: unitWidth*40, 
  },
  left: {
    flexDirection: 'row',
    width: unitWidth*327, 
    height: unitWidth*50, 
    borderRadius: unitWidth*25, 
    alignItems: 'center',
    backgroundColor: '#999',
    paddingLeft: unitWidth*32,
  },
  right: {
    flexDirection: 'row',
  },
  input: {
    color: '#2A2A2A',
    fontSize: 12,
    marginLeft: unitWidth*14, 
    width: unitWidth*232, 
  },
  dzBox: {
    width: unitWidth*29, 
    height: unitWidth*30,
    position: 'relative',
    top: unitWidth*2, 
  },
  dzIn: {
    position: 'absolute', 
    height: unitWidth*18,
    borderRadius: unitWidth*9,
    backgroundColor: 'red',
    top: -18*unitWidth,
    right: -8*unitWidth,
    paddingLeft:8*unitWidth,
    paddingRight:8*unitWidth,
  },
  dzNum: {
    color: '#fff',
    fontSize: unitWidth*12, 
  },
  plNum: {
    color: '#fff',
    fontSize: unitWidth*12,
  },
  dz: {
    width: unitWidth*29, 
    height: unitWidth*30,
  },
  plBox: {
    width: unitWidth*29, 
    height: unitWidth*29,
    marginLeft: unitWidth*30,
    position: 'relative',
    top: unitWidth*2, 
  },
  plIn: {
    position: 'absolute', 
    height: unitWidth*18,
    borderRadius: unitWidth*9,
    backgroundColor: 'red',
    top: -18*unitWidth,
    right: -8*unitWidth,
    paddingLeft:8*unitWidth,
    paddingRight:8*unitWidth,
  },
  pl: {
    width: unitWidth*29, 
    height: unitWidth*29,
  },
  imageStyle: {
    height: unitWidth*1149,
    width: unitWidth*750,
  },
  box: {
    flexDirection: 'row',
  },





  ple: {
    width: unitWidth*22, 
    height: unitWidth*22,
  },
  mx: {
    width: unitWidth*30, 
    height: unitWidth*30,
    marginLeft: unitWidth*30,
  },
  xz: {
    width: unitWidth*30, 
    height: unitWidth*28,
    marginLeft: unitWidth*30,
  },
});
