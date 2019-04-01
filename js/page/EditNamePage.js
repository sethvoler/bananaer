import React, {Component} from 'react';
import {Platform, AsyncStorage, StyleSheet, Text, TextInput, View, Button, Alert, Image, TouchableOpacity, Modal} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
let that;
export default class EditSinePage extends Component<Props> {
  constructor(props) {
    super(props);
    that = this;
    this.state = {
      length: 0,
      name: ''
    }
  }
  static navigationOptions = ({navigation,screenProps}) =>{
    return({
      headerRight: (
        <TouchableOpacity onPress={() => {
          that._saveUser(that.state.name);
        }}>
          <Text style={{color: '#FC604F', fontSize: 14, marginRight: unitWidth*37}}>保存</Text>
        </TouchableOpacity>
      ),
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
  _saveUser (item) {
    AsyncStorage.setItem("USER", item, error => {});
  }
  componentDidMount () {
    AsyncStorage.getItem('USER', (error, value) => {
      this.setState({
        name: value,
        length: value.length
      })
    })
  }
  componentDidUpdate () {
    
  }
  render () {
    return (
      <View style={styles.wrap}>
        <TextInput 
          multiline={true} 
          style={styles.box}
          autoCapitalize={'none'}
          maxLength={7}
          clearButtonMode = {'always'}
          onChangeText={(text) => {
            this.setState({
              name: text,
              length: text.length
            })
          }}>
          {this.state.name}
        </TextInput>
        <View style={styles.count}>
          <Text style={styles.inner}>{this.state.length}</Text>
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