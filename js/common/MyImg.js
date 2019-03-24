import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

export default class MyImg extends Component<Props> {
  render () {
    return (
      <View style={styles.wrap}>
        <View style={styles.box}>
          <Image style={styles.img} source={require('../1.jpeg')}></Image>
          <Text style={styles.inl}>
            [Lolita]漫展上的清纯少女Lolita!
          </Text>
          <Text style={styles.inr}>16张</Text>
        </View>
        <View style={styles.b}>
          <Image style={styles.ii} source={require('../res/image/dz.png')}></Image>
          <Text style={styles.tt}>111</Text>
          <Image style={styles.ii} source={require('../res/image/pl.png')}></Image>
          <Text style={styles.tt}>28</Text>
          <Image style={styles.o} source={require('../res/image/fx.png')}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*692, 
  },
  box: {
    width: unitWidth*692, 
    height: unitWidth*919,
    position: 'relative', 
  },
  img: {
    width: unitWidth*692, 
    height: unitWidth*919,
    borderRadius: unitWidth*15,
  },
  inl: {
    position: 'absolute',
    bottom: unitWidth*26,
    left: unitWidth*26,
    color: '#fff',
    fontSize: 14,
  },
  inr: {
    overflow: 'hidden',
    position: 'absolute',
    bottom: unitWidth*21,
    right: unitWidth*35,
    height: unitWidth*48,
    borderRadius: unitWidth*24,
    lineHeight: unitWidth*18,
    padding: unitWidth*20,
    color: '#fff',
    fontSize: 14,
    backgroundColor: '#494949',
  },
  b: {
    flexDirection: 'row',
    paddingLeft: unitWidth*20,
    alignItems: 'center',
    marginBottom: unitWidth*18,
    marginTop: unitWidth*18,
  },
  ii: {
    width: unitWidth*30, 
    height: unitWidth*30,
    marginRight: unitWidth*8,
  },
  tt: {
    color: '#70716E',
    fontSize: 14,
    marginRight: unitWidth*50,
  },
  o: {
    width: unitWidth*28, 
    height: unitWidth*32,
  },
});