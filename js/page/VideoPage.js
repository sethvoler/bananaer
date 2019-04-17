import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import ImgTop from '../common/ImgTop';
import Api from '../expand/api';
import MB from '../common/ModalBox';
import {connect} from 'react-redux';
import actions from '../action';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

type Props = {};
class MorePage extends Component<Props> {
  static navigationOptions = ({navigation,screenProps}) =>{
    return({
      headerRight: (
          <Image source={require('../res/image/search.png')} style={{marginRight:unitWidth*56,width:unitWidth*30,height:unitWidth*30}}></Image>
      ),
      headerBackTitle: null,
      headerTintColor: '#7E7E7E',
      headerTitleStyle: {
        color: '#000'
      },
      headerBackTitleStyle: {
        color: 'rgba(0,0,0,0)'
      }
    })
  }
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      content: '',
      list: [],
      dayWatchTimes: 0,
    }
  }
  _getMediaList () {
    let _ = this;
    Api.mediaList({}, function (data) {
      AsyncStorage.setItem('mediaList', JSON.stringify(data), error => {});
      _.setState({
        list: [].concat(data)
      })
      console.log(_.state.list);
    }, function (msg) {
      _.setState({
        flag: true,
        content: msg
      })
    })
  }
  sure () {
    this.setState({
      flag: false,
    })
  }
  componentDidMount () {
    AsyncStorage.getItem('dayWatchTimes', (err, value) => {
      this.setState({
        dayWatchTimes: value
      })
    });
    this._getMediaList()
    this.timer = setInterval(() => {
      this._getMediaList()
    }, 1000*6);
  }
  componentWillUnmount () {
    clearInterval(this.timer);
  }
  render () {
    return (
      <View style={styles.wrap}>
        <ImgTop 
          title={'视频中心'} 
          logo={require('../res/image/logo.jpg')}
          icon={require('../res/image/search.png')}
          mid={true}/>
        <ScrollView sytle={{justifyContent: 'center',width: unitWidth*750,}}>
          {
            this.state.list.map((item, index) => {
              const id = item.id;
              return (
                <TouchableOpacity key={index} style={styles.imgBox} onPress={() => {
                  if (this.props.status !== 0) {
                    let times=0;
                    AsyncStorage.getItem('times', (err, value) => {
                      times = value
                    });
                    times=1+Number(times);
                    if (this.props.plays < this.state.dayWatchTimes) {
                      this.props.getPlays(times);
                      AsyncStorage.setItem('times', String(times), error => {});
                      NavigationUtil.goToPage({navigation: this.props.navigation, id: id}, 'PlayPage');
                    } else {
                      this.setState({
                        flag: true,
                        content: '今日免费观看次数已用完'
                      })
                    }
                  } else {
                    NavigationUtil.goToPage({navigation: this.props.navigation}, 'LogPage');
                  }
                }}>
                  <Image roundAsCircle={true} resizeMode={'stretch'} source={{uri: item.posterUrl}} style={styles.img}></Image>
                  <View style={styles.bc}>
                      <Text style={{
                        marginLeft: unitWidth*20,  
                        fontSize: unitWidth*27,  
                        color:'#fff',
                        //fontFamily: 'SourceHanSansCNM'
                        } }>{item.mediaName}</Text>
                      <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        } }>
                        <AntDesign name={'caretright'} size={unitWidth*24} color={'#fff'}/>
                        <Text style={{ 
                          marginRight: unitWidth*20,
                          marginLeft: unitWidth*8, 
                          fontSize: unitWidth*23,  
                          color:'#fff',
                          //fontFamily: 'PingFang-SC-Medium'
                          } }>{item.playTimes || 0}</Text>
                      </View>
                    </View>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
        <MB 
          content={this.state.content} 
          isModal={this.state.flag}
          sure={() => this.sure()}/>
      </View>
    );
    
  }
}

const mapStateToProps = state => ({
  plays: state.plays.plays,
  status: state.status.status,
});
const mapDispatchToProps = dispatch => ({
  getPlays: times => dispatch(actions.getPlays(times)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MorePage);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    width: unitWidth*750,
    height: unitWidth*164,
  },
  in: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: unitWidth*38,
    height: unitWidth*82, 
  },
  nomal: {
    fontSize: 12,
    color: '#2A2A2A',
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
  line: {
    backgroundColor: '#F8FAFA',
    width: unitWidth*750,
    height: unitWidth*8,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: unitWidth*40,
    marginTop: unitWidth*24,
  },
  spg: {
    width: unitWidth*710,
    height: unitWidth*359,
  },
  imgBox: {
    height: unitWidth*348,
    width: unitWidth*750,
    borderRadius: unitWidth*10,
    paddingLeft:  unitWidth*30,
    overflow:'hidden',
  },
  img: {
    height: unitWidth*348,
    width: unitWidth*690,
    marginTop: unitWidth*24,
    borderRadius: unitWidth*10,
    overflow:'hidden',
  },
  bc: {
    position: 'absolute', 
    width: unitWidth*690, 
    height: unitWidth*64, 
    backgroundColor:'rgba(0,0,0,.4)',
    top: unitWidth*284, 
    left: unitWidth*30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: unitWidth*10,
    overflow:'hidden',
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