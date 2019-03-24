
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import ImgTop from '../common/ImgTop';
import MyImg from '../common/MyImg';

import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class ImagePage extends Component<Props> {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null,
  }
  render() {
    return (
      <View style={styles.wrap}>
        <ImgTop 
          title={'最新图集'} 
          logo={require('../res/image/logo.jpg')}
          icon={require('../res/image/search.png')}
          mid={false}/>
        <View style={styles.line}></View>
        <ScrollView refreshControl={true} style={{width: unitWidth*692}}>
          <MyImg />
          <MyImg />
          <MyImg />
          <MyImg />
          <MyImg />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: unitWidth*44,
    paddingRight: unitWidth*44,
  },
  line: {
    width: unitWidth*750,
    height: unitWidth*28,
  }
});
