import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class EditMsgPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      sex: 1,
      murl: require('../res/image/m.jpg'),
      wurl: require('../res/image/w.jpg'),
      get: require('../res/image/hg.jpg'),
      no: require('../res/image/sg.jpg'),
    }
  }
  static navigationOptions = {
    header: null,
  }
  _select(sex) {
    this.setState({
      sex: sex
    })
  } 
  render() {
    return (
      <View style={styles.wrap}>
        <Text style={styles.title}>个人信息</Text>
        <Image source={this.state.sex === 1 ? this.state.murl : this.state.wurl} style={styles.img}></Image>
        <Text style={styles.change}>点击修改头像</Text>
        <View style={styles.line}></View>
        <View style={styles.list}>
          <Text style={styles.l}>昵称</Text>
          <TextInput placeholder={'请输入昵称'} style={styles.input}/>
        </View>
        <View style={styles.list}>
          <Text style={styles.l}>性别</Text>
          <View style={styles.r}>
          <TouchableOpacity onPress={() => {this._select(1)}}>
            <View style={styles.inn}>
              <Image source={this.state.sex === 1 ? this.state.get : this.state.no} style={styles.g}></Image>
              <Text style={styles.sex}>男</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this._select(0)}}>
            <View style={styles.inn}>
              <Image source={this.state.sex === 0 ? this.state.get : this.state.no} style={styles.g}></Image>
              <Text style={styles.sex}>女</Text>
            </View>
          </TouchableOpacity> 
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.l}>个性签名</Text>
          <TextInput placeholder={'这家伙很懒，什么都美留下～'} style={styles.input}/>
        </View>
        <Text style={styles.sure} onPress={() => {
          NavigationUtil.goToPage({
            navigation: this.props.navigation
          }, 'IndexPage');
        }}>完成</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: unitWidth*44,
    paddingRight: unitWidth*44,
  },
  title: {
    fontSize: 14,
    color: '#2A2A2A',
    marginTop: unitHeight*88,
  },
  img: {
    marginTop: unitHeight*88,
    width: unitWidth*190,
    height: unitWidth*190,
  },
  change: {
    fontSize: 14,
    color: '#A09EA4',
    marginTop: unitWidth*80,
  },
  line: {
    marginTop: unitWidth*110,
    width: unitWidth*750,
    height: unitWidth*9,
    backgroundColor: '#eee',
  },
  list: {
    marginTop: unitWidth*52,
    width: unitWidth*662,
    flexDirection: 'row',
    alignItems: 'center',
  },
  l: {
    width: unitWidth*204,
    fontSize: 14,
    color: '#2A2A2A',
  },
  r: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  g: {
    width: unitWidth*33,
    height: unitWidth*33,
  },
  sex: {
    marginLeft: unitWidth*30,
    marginRight: unitWidth*62,
    fontSize: 14,
    color: '#A09EA4',
  },
  input: {
    width: unitWidth*458,
    fontSize: 14,
    color: '#A09EA4',
  },
  sure: {
    overflow: 'hidden',
    width: unitWidth*662,
    height: unitWidth*85,
    borderRadius: unitWidth*42.5,
    backgroundColor: '#CECECE',
    marginTop: unitWidth*127,
    textAlign: 'center',
    lineHeight: unitWidth*85,
    color: '#fff',
    fontSize: 14,
  },
});