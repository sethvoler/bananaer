import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import {BoxShadow} from 'react-native-shadow';

export default class Hy extends Component<Props> {
  render () {
    const {type} = this.props;
    const imgArr = [
      require('../res/image/vb1.png'),
      require('../res/image/vb2.png'),
      require('../res/image/vb3.png'),
    ];
    const titleArr = [
      '黄金VIP会员',
      '钻石VIP会员',
      'FUN会员',
    ];
    const numArr = [1,6,12];
    return (
      <BoxShadow setting={type === 0 
        ? shadowOpt0
        : type === 1
          ? shadowOpt1
          : shadowOpt2}>
        <View style={styles.wrap}>
          <Image source={imgArr[type]} style={styles.bg}></Image>
          <View style={styles.box}>
            <View style={styles.lleft}>
              <Image source={require('../res/image/vipxj.png')} style={styles.xj}></Image>
              <View style={styles.left}>
                <Text style={styles.title}>{titleArr[type]}</Text>
                <Text style={styles.content}>海量VIP大片图片随心看</Text>
              </View>
            </View>
            <View style={styles.right}>
              <Text style={styles.content}>{numArr[type]}个月</Text>
            </View>
          </View> 
        </View>
      </BoxShadow>
    );
  }
}

const shadowOpt0 = {
  width: unitWidth*636,
  height: unitWidth*160,
  color: '#ff5f79',
  border:  unitWidth*8,
  radius: unitWidth*11,
  opacity: 0.1,
  x:0,
  y:unitWidth*8,
  style: {
    marginLeft: unitHeight*16,
    marginRight: unitHeight*16,
    marginBottom: unitHeight*24,
  },
}

const shadowOpt1 = {
  width: unitWidth*636,
  height: unitWidth*160,
  color: '#5cafff',
  border:  unitWidth*8,
  radius: unitWidth*11,
  opacity: 0.1,
  x:0,
  y:unitWidth*8,
  style: {
    marginLeft: unitHeight*16,
    marginRight: unitHeight*16,
    marginBottom: unitHeight*24,
  },
}

const shadowOpt2 = {
  width: unitWidth*636,
  height: unitWidth*160,
  color: '#ffa31a',
  border:  unitWidth*8,
  radius: unitWidth*11,
  opacity: 0.1,
  x:0,
  y:unitWidth*8,
  style: {
    marginLeft: unitHeight*16,
    marginRight: unitHeight*16,
    marginBottom: unitHeight*24,
  },
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*636,
    height: unitWidth*160,
    borderRadius: unitWidth*11,
  },
  box: {
    width: unitWidth*636,
    height: unitWidth*160,
    borderRadius: unitWidth*11,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: unitWidth*36,
    paddingRight: unitWidth*36,
    paddingLeft: unitWidth*54,
  },
  bg: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: unitWidth*636,
    height: unitWidth*160,
  },
  xj: {
    width: unitWidth*70,
    height: unitWidth*78,
    marginRight: unitWidth*40,
  },
  lleft: {
    flexDirection: 'row',
  },
  left: {
    height: unitWidth*90,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  right: {
    height: unitWidth*90,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: 'SourceHanSansCN-Medium',
    color: '#EEEEF1',
    fontSize: unitWidth*28, 
  },
  content: {
    fontFamily: 'SourceHanSansCN-Medium',
    color: '#fff',
    fontSize: unitWidth*22, 
  },
});