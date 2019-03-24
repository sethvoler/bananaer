
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil'; 
import MySwiper from '../common/MySwiper';
import Video from '../common/Video';

type Props = {};
export default class HomePage extends Component<Props> {
  
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrap}>
          <View style={styles.box}>
            <MySwiper />
          </View>
          <View style={styles.line}></View>
          <Video
            isHeader={true}
            title={'最新片源'}
            num1={3}
            num2={2} />
          <Video
            isHeader={true}
            title={'重磅热播'}
            num1={2}
            num2={2} />
          <View style={styles.change}>
            <Image source={require('../res/image/refresh.png')} style={styles.refresh}></Image>
            <Text style={styles.ct}>换一批</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.gg}>
            <Image source={require('../res/image/gg.jpg')} style={styles.ggi}></Image>
          </View>
          <Video
            isHeader={true}
            title={'国产大剧'}
            num1={3}
            num2={2} />
          <Video
            isHeader={true}
            title={'国产大剧'}
            num1={3}
            num2={2} />
          <View style={styles.line}></View>
          <View style={styles.gg}>
            <Image source={require('../res/image/gg.jpg')} style={styles.ggi}></Image>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: unitWidth*750,
    paddingTop: unitWidth*110,
  },
  wrap: {
    width: unitWidth*750,
  },
  box: {
    paddingLeft: unitWidth*70,
    paddingRight: unitWidth*70,
  },
  line: {
    height: unitWidth*20,
    width: unitWidth*750,
    backgroundColor: '#F5F5F5',
  },
  change: {
    width: unitWidth*750,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refresh: {
    height: unitWidth*40,
    width: unitWidth*40,
  },
  ct: {
    color: '#2A2A2A',
    fontSize: 12,
    marginLeft: unitWidth*8,
  },
  gg: {
    marginTop: unitWidth*36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ggi: {
    height: unitWidth*340,
    width: unitWidth*713,
  },


  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
