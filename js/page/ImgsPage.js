
import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import ImgTop from '../common/ImgTop';
import MyImg from '../common/MyImg';
import Api from '../expand/api';
import MB from '../common/ModalBox';

type Props = {};
export default class ImagePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
      content: '',
      imgs: [],
    }
  }
  static navigationOptions = {
    header: null,
  }
  sure () {
    this.setState({
      flag: false,
    })
  }
  
  getAlbumList () {
    let _ = this;
    Api.albumList({}, function (data) {
      console.log(data);
      _.setState({
        imgs: [].concat(data)
      })
    }, function (msg) {
      _.setState({
        flag: true,
        content: msg,
      })
    })
  }

  componentDidMount() {
    let data = this.props.navigation.state.params.data;
    this.setState({
      imgs: [].concat(data)
    })
  }
  render() {
    return (
      <View style={styles.wrap}>
        <ImgTop 
          title={'最新图集'} 
          logo={require('../res/image/logo.jpg')}
          icon={require('../res/image/search.png')}
          mid={false}/>
        <View style={styles.line}></View>
        <ScrollView refreshControl={true} style={{width: unitWidth*692, marginBottom: unitWidth*280}}>
          {
            this.state.imgs.map((item, index) => {
              return (<MyImg 
                id={item.id}
                img={item.lastPic} 
                name={item.name}
                likeCount={item.likeCount}
                key={index}/>)
            })
          }
        </ScrollView>
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
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: unitWidth*44,
    paddingRight: unitWidth*44,
  },
  line: {
    width: unitWidth*750,
    height: unitWidth*28,
  }
});
