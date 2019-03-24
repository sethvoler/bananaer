import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class MMPage extends Component<Props> {
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
        <View style={styles.title}>
        <Text style={styles.ctitle}>互动消息</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.left}>
            <Image source={require('../res/image/mh.png')} style={styles.icon}></Image>
            <Text style={styles.content}>我的回复</Text>
          </View>
          <Image source={require('../res/image/ra.png')} style={styles.ra}></Image>
        </View>
        <View style={styles.title}>
          <Text style={styles.ctitle}>通知公告</Text>
        </View>
        <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'NoticePage');
          }}>
          <View style={styles.box}>
            <View style={styles.left}>
              <Image source={require('../res/image/xg.png')} style={styles.icon}></Image>
              <Text style={styles.content}>系统公告</Text>
            </View>
            <Image source={require('../res/image/ra.png')} style={styles.ra}></Image>
          </View>
        </TouchableOpacity>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#eee',
  },
  title: {
    width: unitWidth*750,
    height: unitWidth*80,
    paddingLeft: unitWidth*30,
  },
  ctitle: {
    lineHeight: unitWidth*80,
    color: '#979BA7',
    fontSize: 14,
  },
  box: {
    width: unitWidth*750,
    height: unitWidth*80,
    paddingLeft: unitWidth*30,
    paddingRight: unitWidth*37,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: unitWidth*34,
    height: unitWidth*30,
    marginRight: unitWidth*32,
  },
  content: {
    color: '#2A2A2A',
    fontSize: 14,
  },
  ra: {
    width: unitWidth*12,
    height: unitWidth*19,
  }
})