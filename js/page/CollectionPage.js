import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class BindPhonePage extends Component<Props> {
  static navigationOptions = {
    //headerTitle: (<Text style={{ flex: 1, textAlign: 'center' }}>设置</Text>),
    headerBackTitle: null,
    headerTintColor: '#7E7E7E',
    headerTitleStyle: {
      color: '#000'
    },
    headerBackTitleStyle: {
      color: 'rgba(0,0,0,0)'
    }
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.box}>
          <Text style={styles.top}></Text>
        </View>
        <Image source={require('../res/image/2.png')} style={styles.img}></Image>
        <Text style={styles.content}>还没有收藏的帖子呢～</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  box: {
    width: unitWidth*750,
    height: unitWidth*108,
    paddingLeft: unitWidth*30,
    borderColor: '#ccc',
    marginBottom: unitWidth*160,
  },
  top: {
    color: '#88888F',
    fontSize: 14,
    lineHeight: unitWidth*106,
  },
  content: {
    color: '#88888F',
    fontSize: 14,
    marginTop: unitWidth*24,
  },
  img: {
    width: unitWidth*280,
    height: unitWidth*350,
  },
});