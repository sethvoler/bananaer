import React, {Component} from 'react';
import {Platform, StyleSheet, AsyncStorage, Text, TextInput, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import DataStore from '../expand/dao/DataStore';

type Props = {};
const KEY = 'save_key';
export default class DataStoreDemoPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
    }
    this.dataStore = new DataStore();
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
  loadData() {
    let url = `https://api.github.com/search/repositories?q=${this.value}`;
    this.dataStore.fetchData(url)
      .then(data => {
        alert('ok')
        let showData = `初次数据加载时间： ${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
        //let showData = 'fuck';
        this.setState({
          result: showData
        })
      })
      .catch (e => {
        alert('no')
        e && console.log(e.toString());
      })
  }

  render () {
    return (
      <View style={styles.wrap}>
        <Text>离线缓存</Text>

          <TextInput
            style={styles.input}
            onChangeText={text => {
              this.value = text;
            }}
          />
        <View style={styles.box}> 
        <Text onPress={() => {
          this.loadData();
        }}>
          存储
        </Text>
        </View>
        
        <Text>{this.state.result}ooo</Text>
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