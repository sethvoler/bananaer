
import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
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
      obj1: [],
      obj2: [],
    }
  }
  sure () {
    this.setState({
      flag: false,
    })
  }

  changeArr(arr) {
    var map = {},
    dest = [];
    for(var i = 0; i < arr.length; i++){
      var item = arr[i];
      if(!map[item.categoryId]){
        dest.push({
          id: item.categoryId,
          name: item.categoryName,
          data: [item]
        });
        map[item.categoryId] = item;
      }else{
        for(var j = 0; j < dest.length; j++){
          var dItem = dest[j];
          if(dItem.id == item.categoryId){
            dItem.data.push(item);
            break;
          }
        }
      }
    }
    console.log(dest);
    return dest;
  }

  sortId(a,b){  
    return b.data.length-a.data.length  
  }

  getAlbumList () {
    let _ = this;
    Api.albumList({}, function (data) {
       let a = _.changeArr(data)
       let b = _.changeArr(data)
       b.sort(_.sortId)
      _.setState({
        obj2: a,
        obj1: b,
      })

    }, function (msg) {
      _.setState({
        flag: true,
        content: msg,
      })
    })
  }

  componentDidMount() {
    let _ = this;
    this.getAlbumList();
    this.timer = setInterval(() => {
      _.getAlbumList();
    }, 1000*10);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
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
