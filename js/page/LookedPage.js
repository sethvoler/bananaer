import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import LookList from '../common/LookList';

type Props = {};
export default class LookedPage extends Component<Props> {
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
        <LookList title={'[视频]'} time={'2019-03-12  00:55:52'}/>
        <LookList title={'[图片]'} time={'2019-03-12  00:50:52'}/>
        <LookList title={'[图片]'} time={'2019-03-12  00:45:52'}/>
        <LookList title={'[视频]'} time={'2019-03-12  00:35:52'}/>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#eee',
  },
})