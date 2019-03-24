import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

export default class Pl extends Component<Props> {
  render () {
    const {name, icon, time, content, num} = this.props;
    return (
      <View style={styles.wrap}>
        <View style={styles.left}>
          <View  style={styles.ll}></View>
          <View  style={styles.lr}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.content}>{content}</Text>
          </View>
        </View>
        <View style={styles.right}>
          <Image source={icon? require('../res/image/i1.png') : require('../res/image/i0.png')} style={styles.icon}></Image>
          <Text style={icon? styles.num1 : styles.num2}>{num}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*750,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: unitWidth*60, 
    paddingRight: unitWidth*60, 
    paddingTop: unitHeight*30,
  },
  left: {
    flexDirection: 'row',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ll: {
    width: unitWidth*54,
    height: unitWidth*54,
    borderRadius: unitWidth*27,
    backgroundColor: '#F19EFA',
  },
  lr: {
    marginLeft: unitWidth*8, 
  },
  name: {
    color: '#2A2A2A',
    fontSize: 10,
    marginBottom: unitWidth*8,  
  },
  time: {
    color: '#747474',
    fontSize: 8,
    marginBottom: unitWidth*20,  
  },
  content: {
    color: '#2A2A2A',
    fontSize: 14, 
  },
  icon: {
    width: unitWidth*30,
    height: unitWidth*30,
    marginRight: unitWidth*8,
  },
  num1: {
    color: '#ED702D',
    fontSize: 14, 
  },
  num2: {
    color: '#70716E',
    fontSize: 14, 
  },
});