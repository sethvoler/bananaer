import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import Title from '../common/Title';
import Pl from '../common/Pl';
import Bpl from '../common/Bpl';
import PlayTop from '../common/PlayTop';

type Props = {};
export default class PlayPage extends Component<Props> {
  static navigationOptions = {
      header: null,
  }
  render () {
    return (
      <View style={styles.wrap}>
        <Image source={require('../res/image/ksp.jpg')} style={styles.ksp}></Image>
        <PlayTop 
          title={'天空中有漂浮着您的梦想吗？'} 
          logo={require('../res/image/logo.jpg')}
          icon={require('../res/image/search.png')}
          mid={false}/>
        <View style={styles.gg}>
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
    height: unitWidth*507,
    position: 'absolute',
    top: 0,
  },
  gg: {
    marginTop: unitWidth*380,
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