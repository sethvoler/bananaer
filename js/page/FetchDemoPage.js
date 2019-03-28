import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import Api from '../expand/api';

type Props = {};
export default class FetchDemoPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    }
  }
  static navigationOptions = {
    headerBackTitle: null,
    headerTintColor: '#7E7E7E',
    headerTitleStyle: {
      color: '#000'
    },
    headerBackTitleStyle: {
      color: 'rgba(0,0,0,0)'
    }
  }
  showCode (json) {
    this.setState({
      result: json.code
    })
  }
  loadData() {
    let _ = this;
    // Api.sms({
    //   mobile: '15888025559',
    //   type: 0
    // }, function(json) {
    //   _.setState({
    //     result: json.code
    //   })
    // })
    Api.register({
      "confirmPwd": "string",
      "inviteCode": "string",
      "mobile": "string",
      "pwd": "string",
      "smsCode": "string"
    }, function(json) {
      console.log(json);
    })
  }
  render () {
    return (
      <View style={styles.wrap}>
        <Text>FETCH</Text>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.searchKey = text;
            }}
          />
          <Button
            title={'获取'}
            onPress={() => {
              this.loadData();
            }}
          />
        </View>
        
        <Text>{this.state.result}</Text>
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#eee',
  },
  input: {
    flex: 1,
    height: 30,
    borderColor: 'red',
    borderWidth: 1,
  },
  box: {
    
    flexDirection: 'row',

    alignItems: 'center',

  },

  ctitle: {
    lineHeight: unitWidth*80,
    color: '#979BA7',
    fontSize: 14,
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