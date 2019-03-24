
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class MsgSetPage extends Component<Props> {
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
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }
  _change() {
    this.setState({
      open: !this.open
    })
  }
  componentDidMount () {
  }
  componentDidUpdate () {
  }
  componentWillUnmount () {
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.list}>
          <View style={styles.item}>
            <Text style={styles.title}>接受新消息通知</Text>
            <TouchableOpacity onPress={() => {this._change()}}>
              {
                this.state.open 
                  ? <Text style={styles.open}>已打开</Text>
                  : <Text style={styles.close}>已关闭</Text>
              } 
            </TouchableOpacity>     
          </View> 
        </View>
        <View style={styles.box}>
          <Text style={styles.content}>
            如果你要关闭或开启新消息通知，请在iPhone的“设置”-“通知”中，找到“香蕉”进行更改            
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#eee',
  },
  list: {
    paddingTop: unitHeight*3,
    paddingLeft: unitWidth*30,
    marginTop: unitHeight*22,
    backgroundColor: '#fff',
  },
  item: {
    borderBottomColor: 'rgba(244,244,244,1)',
    borderBottomWidth: unitHeight*2,
    height: unitHeight*108,
    width: unitWidth*720,
    paddingRight: unitWidth*36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 100,
  },
  open: {
    color: '#87C134',
    fontSize: 14,
  },
  close: {
    color: '#FE413D',
    fontSize: 14,
  },
  box: {
    width: unitWidth*676,
    marginLeft: unitWidth*44,
    marginTop: unitWidth*28,
  },
  content: {
    color: '#A8A8A8',
    fontSize: 14,
    lineHeight: unitWidth*44,
  },
});
