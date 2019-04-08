import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import Title from '../common/Title';
import Pl from '../common/Pl';
import Bpl from '../common/Bpl';
import PlayTop from '../common/PlayTop';
import RVideo from 'react-native-video';

type Props = {};
export default class PlayPage extends Component<Props> {
  static navigationOptions = {
      header: null,
  }
  constructor (props) {
    super(props);
    this.state = {
      ads: false,
      show: true,
    }
  }
  componentDidMount () {
    this.timer = setTimeout(() => {
      this.setState({
        show: false,
      })
    }, 2000)
  }
  render () {
    return (
      <View style={styles.wrap}>
        {/* <Image source={require('../res/image/ksp.jpg')} style={styles.ksp}></Image> */}
        <View style={[styles.ksp, {zIndex: 1}]}>
          <RVideo
            ref={(ref) => this.videoPlayer = ref}
            source={{uri: 'http://flv3.bn.netease.com/videolib1/1811/06/RdHLz616R/SD/RdHLz616R-mobile.mp4'}}
            rate={1.0}
            volume={1.0}
            muted={false}
            resizeMode={'stretch'}
            playWhenInactive={false}
            playInBackground={false}
            ignoreSilentSwitch={'ignore'}
            progressUpdateInterval={250.0}
            style={{width: unitWidth*750,height: unitWidth*608,}}
            />
        </View>
        <TouchableOpacity style={[styles.ksp, {zIndex: 2}]} onPress={() => {
          this.setState({
            show: !this.state.show
          })
        }}>
          <View style={[styles.ksp, {backgroundColor: 'rgba(0,0,0,0)'}]}>
            <View style={this.state.show ? styles.vb : [styles.vb, {display: 'none'}]}>
            
            </View>
          </View>
        </TouchableOpacity>
        <View style={{position:'relative', zIndex: 3}}>
          <PlayTop 
            title={'天空中有漂浮着您的梦想吗？'} 
            logo={require('../res/image/logo.jpg')}
            icon={require('../res/image/search.png')}
            mid={false}/>
        </View>
        <View style={styles.block}></View>
        <View style={this.state.ads ? styles.gg : [styles.gg, {display: 'none'}]}>
          <Image source={require('../res/image/gg.jpg')} style={styles.ggi}></Image>
        </View>
        <Title 
          title={'天空中有漂浮着您的梦想吗？'} 
          icon1={require('../res/image/i1.png')}
          icon2={require('../res/image/i2.png')}
          icon3={require('../res/image/i3.png')} />
        <Text style={styles.title}>最新评论</Text>
        <View style={styles.line}></View>
        <ScrollView style={{width: unitWidth*750,}}>
          <Pl 
            name={'丝丝狐'}
            icon={true}
            time={'6分钟前'}
            content={'打字啊我们在一起'}
            num={1} />
          <Pl 
            name={'这一季雨落'}
            icon={false}
            time={'10分钟前'}
            content={'白头发的不错哦'}
            num={4} />
          <Pl 
            name={'墨明棋妙'}
            icon={true}
            time={'33分钟前'}
            content={'泰国妹子。。。漂亮！'}
            num={1} />
          <Pl 
            name={'蝴蝶飞不过沧海'}
            icon={false}
            time={'1小时前'}
            content={'被感动哭😢😢😢'}
            num={4} />
          <Pl 
            name={'醉生梦死'}
            icon={true}
            time={'1小时前'}
            content={'一起去泰国啊。。。'}
            num={1} />
          <Pl 
            name={'这一季雨落'}
            icon={false}
            time={'1小时前'}
            content={'白头发的不错哦'}
            num={4} />
          <Pl 
            name={'丝丝狐'}
            icon={true}
            time={'6分钟前'}
            content={'打字啊我们在一起'}
            num={1} />
          <Pl 
            name={'这一季雨落'}
            icon={false}
            time={'1小时前'}
            content={'白头发的不错哦'}
            num={4} />
        </ScrollView>
        <Bpl />
      </View>
    );
    
  }
}

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
    height: unitWidth*100, 
    backgroundColor: 'red',
    bottom: 0,
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