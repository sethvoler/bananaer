import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import {BoxShadow} from 'react-native-shadow';

export default class MyTop extends Component<Props> {
  render () {
    return (
      <BoxShadow setting={shadowOpt}>
        <View style={styles.wrap}>
          <View style={styles.header}>
            <Text style={styles.title}>观影权益</Text>
            <Text style={styles.content}>
              今日免费观影次数<Text style={styles.inner}>30</Text>/30
            </Text>
          </View>
          <Image source={require('../res/image/banner.jpg')} style={styles.banner}></Image>
        </View>
      </BoxShadow>
    );
  }
}

const shadowOpt = {
  width: unitWidth*710,
  height: unitWidth*280,
  color: '#000',
  border:  unitWidth*8,
  radius: 5,
  opacity: 0.05,
  x:0,
  y:0,
  style: {
    marginTop: unitHeight*24,
  },
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*710,
    height: unitWidth*280,
    padding: unitWidth*25,
    backgroundColor: 'rgba(254,254,254,1)',
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: unitWidth*26,
    color: '#161616',
    fontFamily: 'SourceHanSansCN-Medium',
  },
  content: {
    fontSize: unitWidth*26,
    fontFamily: 'SourceHanSansCN-Medium',
    color: '#9c9c9c',
  },
  inner: {
    fontSize: unitWidth*26,
    fontFamily: 'SourceHanSansCN-Medium',
    color: '#f11',
  },
  banner: {
    marginTop: unitWidth*20,
    width: unitWidth*653,
    height: unitWidth*164,
    borderRadius: 9,
  },
});