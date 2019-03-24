import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import {BoxShadow} from 'react-native-shadow';

type Props = {};
export default class NoticePage extends Component<Props> {
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
  render () {
    return (
      <View style={styles.wrap}>
        <BoxShadow setting={shadowOpt}>
          <View style={styles.box}>
            <View style={styles.top}>
              <Image source={require('../res/image/gd.png')} style={styles.img}></Image>
              <View style={styles.content}>
                <Text style={styles.title}>官网地址</Text>
                <Text style={styles.little}>2019-03-14 17:36:14</Text>
              </View>
            </View>
            <View style={styles.middle}></View>
            <Text style={styles.bottom}>http://</Text>
          </View>
        </BoxShadow>
      </View>
    );
    
  }
}

const shadowOpt = {
  width: unitWidth*691,
  height: unitWidth*221,
  color: '#3a3a3a',
  border:  unitWidth*8,
  radius: 7,
  opacity: 0.03,
  x:0,
  y:0,
  style: {
    marginTop: unitHeight*86,
  },
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  box: {
    width: unitWidth*691,
    height: unitWidth*221,
    borderRadius:7,
    backgroundColor: '#fff',
    paddingTop: unitWidth*30,
    paddingBottom: unitWidth*42,
    paddingLeft: unitWidth*36,
    paddingRight: unitWidth*36,
  },
  top: {
    flexDirection: 'row',
  },
  img: {
    width: unitWidth*70,
    height: unitWidth*70,
    marginRight: unitWidth*18, 
  },
  content: {
    textAlign: 'left',
  },
  title: {
    color: '#000',
    fontSize: 14,
  },
  little: {
    marginTop: unitWidth*16,
    color: '#aaa',
    fontSize: 10,
  },
  middle: {
    marginTop: unitWidth*16,
    height: unitWidth*1,
    backgroundColor: 'rgba(244,244,244,1)',
  },
  bottom: {
    marginTop: unitWidth*36,
    color: '#aaa',
    fontSize: 14,
  }
})