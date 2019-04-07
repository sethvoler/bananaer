
import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Button, AsyncStorage, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import ImgTop from '../common/ImgTop';
import Imgs from '../common/Imgs';
import Api from '../expand/api';
import MB from '../common/ModalBox';

type Props = {};
export default class ImagePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      content: '',
      albumList: [],
      obj1: [{name: '', num: 30},{name: '', num: 20},{name: '', num: 10}],
      obj2: [{name: '漫画', num: 10},{name: '每日推荐', num: 20},{name: '专辑', num: 30}, {name: '漫画', num: 10},{name: '每日推荐', num: 20},],
    }
  }
  sure () {
    this.setState({
      flag: false,
    })
  }
  getAlbumList () {
    let _ = this;
    Api.albumList({}, function (data) {
      _.setState({
        albumList: data
      })
    }, function (msg) {
      _.setState({
        flag: true,
        content: msg,
      })
    })
  }
  componentDidMount() {
    this.getAlbumList();
    AsyncStorage.getItem('tabName', (error,value) => {
      // store
    });
  }
  componentDidUpdate () {
    AsyncStorage.getItem('tabName', (error,value) => {
      // store
    });
  }
  render() {
    return (
      <View style={styles.wrap}>
        <ImgTop 
          title={'图库中心'} 
          logo={require('../res/image/logo.jpg')}
          icon={require('../res/image/search.png')}
          mid={true}/>
        <Imgs title={'排行榜'} icon={require('../res/image/php.png')} obj={this.state.obj1} height={274}/>
        <Imgs title={'图集分类'} icon={require('../res/image/fl.png')} obj={this.state.obj2} height={201}/>
        <MB 
          content={this.state.content} 
          isModal={this.state.flag}
          sure={() => this.sure()}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: unitWidth*44,
    paddingRight: unitWidth*44,
  },
});
