import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

export default class PlayTop extends Component<Props> {
  render () {
    const {title, icon, logo, mid} = this.props;
    return (
      <View style={styles.wrap}>
        <View style={styles.left}>
          <Image style={styles.ple} source={require('../res/image/ple.png')}></Image>
          <TextInput style={styles.input} placeholder={'说些什么吧！'} />
        </View>
        <View style={styles.right}>
          <Image style={styles.mx} source={require('../res/image/mx.png')}></Image>
          <Image style={styles.xz} source={require('../res/image/xz.png')}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*750,
    height: unitWidth*52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: unitWidth*30, 
    paddingRight: unitWidth*40, 
    marginBottom: unitWidth*40, 
    backgroundColor: '#fff',
  },
  left: {
    flexDirection: 'row',
    width: unitWidth*550, 
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
  },
  ple: {
    width: unitWidth*22, 
    height: unitWidth*22,
  },
  mx: {
    width: unitWidth*30, 
    height: unitWidth*30,
  },
  xz: {
    width: unitWidth*30, 
    height: unitWidth*28,
    marginLeft: unitWidth*30,
  },
});