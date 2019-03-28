import React, {Component} from 'react';
import {Platform, StyleSheet, AsyncStorage, Text, TextInput, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
const KEY = 'save_key';
export default class AsyncStoragePage extends Component<Props> {
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
  doSave () {
    AsyncStorage.setItem(KEY, this.value, error => {
      error && console.log(error.toString());
    })
  }
  doRemove () {
    AsyncStorage.removeItem(KEY, error => {
      error && console.log(error.toString());
    })
  }
  getData () {
    AsyncStorage.getItem(KEY, (error, value) => {
      this.setState({
        result: value
      })
      console.log(value)
      error && console.log(error.toString());
    })
  }
  render () {
    return (
      <View style={styles.wrap}>
        <Text>FETCH</Text>

          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.value = text;
            }}
          />
        <View style={styles.box}> 
        <Text onPress={() => {
          this.doSave();
        }}>
          存储
        </Text>
        <Text onPress={() => {
          this.doRemove();
        }}>
          删除
        </Text>
        <Text onPress={() => {
          this.getData();
        }}>
          获取
        </Text>
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