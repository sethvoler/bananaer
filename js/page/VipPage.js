import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import {BoxShadow} from 'react-native-shadow';
import Hy from '../common/Hy';

type Props = {};
export default class VipPage extends Component<Props> {
  static navigationOptions = {
      header: null,
  }
  render () {
    //NavigationUtil.navigation = this.props.navigation;
    return (
      <View style={styles.wrap}>
        <Image style={styles.top} source={require('../res/image/vipt.jpg')}></Image>    
        <View style={styles.back}>
          <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'IndexPage');
          }}>
            <Image style={styles.backIcon} source={require('../res/image/back.png')}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>VIP 专属特权</Text>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.twoBtn}>
            <View style={styles.btn}>
              <Image style={styles.icon1} source={require('../res/image/hy.png')}></Image>
              <View style={styles.content}>
                <Text style={styles.btnName}>普通会员</Text>
                <Text style={styles.time}>有效期：永久</Text>
              </View>
            </View>
            <View style={styles.btn}>
              <Image style={styles.icon2} source={require('../res/image/q.png')}></Image>
              <View style={styles.content}>
                <Text style={styles.btnName}>问题反馈</Text>
                <Text style={styles.time}>遇到问题来点我</Text>
              </View>
            </View>
          </View>
        </BoxShadow>
        <ScrollView style={styles.box}>
          <Text style={styles.bTitle}>官方充值</Text>
          <View style={styles.bTitleBottom}></View>
          <Hy type={0}/>
          <Hy type={1}/>
          <Hy type={2}/>
          <View style={styles.bottom}>
            <Text style={styles.bt}>极速到账，交易无忧</Text>
            <Text style={styles.bc}>1.<Text style={styles.bci}>聊天存在时效限制，请及时联系官方代理获取有效</Text></Text>
            <Text style={styles.bci}>的充值方式，切勿直接转账，以免资金受到损失；</Text>
            <Text style={styles.bc}>2.<Text style={styles.bci}>充值高峰期，匹配存在延时，请耐心等待；</Text></Text>
          </View>
        </ScrollView>
      </View>
    );
    
  }
}

const shadowOpt = {
  width: unitWidth*668,
  height: unitWidth*122,
  color: '#B2B2B2',
  border:  unitWidth*12,
  radius: unitWidth*7,
  opacity: 0.16,
  x:0,
  y:unitWidth*6,
  style: {
    marginTop: unitWidth*53,
  },
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  top: {
    width: unitWidth*750,
    height: unitWidth*327,
    position: 'absolute',
    top: 0,
  },
  back: {
    position: 'absolute',
    top: unitWidth*88,
    left: unitWidth*30,
  },
  backIcon: {
    width: unitWidth*16,
    height: unitWidth*29,
  },
  title: {
    marginTop: unitWidth*152,
    fontSize: unitWidth*54,
    fontFamily: 'SourceHanSansCN-Medium',
    color: '#fff', 
  },
  twoBtn: {
    width: unitWidth*668,
    height: unitWidth*122,
    borderRadius: unitWidth*7,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: unitWidth*334,
    paddingLeft: unitWidth*30,  
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon1: {
    width: unitWidth*62,
    height: unitWidth*65, 
    marginRight: unitWidth*8, 
  },
  icon2: {
    width: unitWidth*59,
    height: unitWidth*63, 
    marginRight: unitWidth*8, 
  },
  btnName: {
    fontFamily: 'SourceHanSansCN-Medium',
    fontSize: unitWidth*28,
    color: '#373737',
    marginTop: unitWidth*18, 
  },
  time: {
    fontFamily: 'SourceHanSansCN-Medium',
    fontSize: unitWidth*22,
    color: '#aaa',
  },
  box: {
    width: unitWidth*750,
    paddingLeft: unitWidth*41,
    paddingRight: unitWidth*41,
    marginTop: unitWidth*29, 
  },
  bTitle: {
    fontFamily: 'SourceHanSansCN-Medium',
    fontSize: unitWidth*28,
    color: '#EE786E',
  },
  bTitleBottom: {
    width: unitWidth*112,
    height: unitWidth*4,
    backgroundColor: '#EE786E',
    marginBottom: unitWidth*40,
  },

  bottom: {
    width: unitWidth*636,
    paddingLeft: unitWidth*16,
    marginTop: unitWidth*22,
  },
  bt: {
    color: '#7E7E7E',
    fontSize: unitWidth*28,
    fontFamily: 'AdobeHeitiStd-Regular',
    marginBottom: -12*unitWidth,
  },
  bc: {
    color: '#ADB2BB',
    fontSize: unitWidth*28,
    fontFamily: 'SourceHanSansCN-Medium',
    marginBottom: -20*unitWidth,
  },
  bci: {
    color: '#ADB2BB',
    fontSize: unitWidth*28,
    fontFamily: 'AdobeHeitiStd-Regular',
    letterSpacing: -0.9235*unitWidth,
    marginBottom: -20*unitWidth,
  },
})