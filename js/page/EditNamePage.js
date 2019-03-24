import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button, Alert, Image, TouchableOpacity, Modal} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class EditSinePage extends Component<Props> {
  static navigationOptions = ({navigation,screenProps}) =>{
    return({
      headerRight: (
        <TouchableOpacity onPress={() => {Alert.alert('ok')}}>
          <Text style={{color: '#FC604F', fontSize: 14, marginRight: unitWidth*37}}>保存</Text>
        </TouchableOpacity>
      ),
      //headerTitle: (<Text style={{ flex: 1, textAlign: 'center' }}>设置</Text>),
      headerBackTitle: null,
      headerTintColor: '#7E7E7E',
      headerTitleStyle: {
        color: '#000'
      },
      headerBackTitleStyle: {
        color: 'rgba(0,0,0,0)'
      }
    })
  }
  render () {
    return (
      <View style={styles.wrap}>
        <TextInput  multiline={true} style={styles.box}>
          xxx
        </TextInput>
        <View style={styles.count}>
          <Text style={styles.inner}>4</Text>
          <Text style={styles.inner}>/7</Text>
        </View> 
      </View>
    );
  };
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    height: unitWidth*242,
    width: unitWidth*689,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginTop: unitWidth*50,
    borderRadius: unitWidth*11,
    textAlignVertical: 'top',
    padding: unitWidth*26,
    color: '#2A2A2A',
    fontSize: 14,
  },
  count: {
    marginTop: unitWidth*16,
    width: unitWidth*689,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  inner: {
    color: '#9C9C9C',
    fontSize: 14,
  }
});