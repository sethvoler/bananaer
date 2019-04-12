
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, ScrollView, AsyncStorage} from 'react-native';
import {unitWidth}from '../util/AdapterUtil'; 
import MySwiper from '../common/MySwiper';
import Video from '../common/Video';

import Api from '../expand/api';

type Props = {};

export default class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      ads: false,
      newMediaList: [],
      mostLikeList: [],
    }
  }
  getNewMediaList () {
    let _ = this;
    Api.mediaList({sort: 1}, function (res) {
      AsyncStorage.setItem('newMediaList', JSON.stringify(res), error => {});
      _.setState({
        newMediaList: _.state.newMediaList.concat(res)
      })

      console.log(_.state.newMediaList);
    }, function (err) {})
  }
  getMostLikeList () {
    let _ = this;
    Api.mediaList({sort: 2}, function (res) {
      AsyncStorage.setItem('mostLikeList', JSON.stringify(res), error => {});
      _.setState({
        mostLikeList: _.state.mostLikeList.concat(res)
      })
      console.log(_.state.mostLikeList);
    }, function (err) {})
  }
  componentDidMount () {
    this.getNewMediaList()
    this.getMostLikeList()
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrap}>
          <View style={styles.box}>
            <MySwiper img={0}/>
          </View>
          <View style={styles.line}></View>
          <Video
            isHeader={true}
            title={'最新片源'}
            data={this.state.newMediaList.slice(0,6)} 
            cstyle={1}/>
          <Video
            isHeader={true}
            data={this.state.mostLikeList.slice(0,6)} 
            title={'重磅热播'}
            cstyle={1} />
          <View style={styles.change}>
            <Image source={require('../res/image/refresh.png')} style={styles.refresh}></Image>
            <Text style={styles.ct}>换一批</Text>
          </View>
          <View style={styles.line}></View>
          <View style={this.state.ads ? styles.gg : {display: 'none'}}>
            <Image source={require('../res/image/gg.jpg')} style={styles.ggi}></Image>
          </View>
          {/* <Video
            isHeader={true}
            title={'国产大剧'}
            key={3}
            num1={3}
            num2={3} 
            style={2} /> */}
          {/* <Video
            isHeader={true}
            title={'国产大剧'}
            key={4}
            num1={3}
            num2={3} 
            style={2} /> */}
          <View style={styles.line}></View>
          <View style={this.state.ads ? styles.gg : {display: 'none'}}>
            <Image source={require('../res/image/gg.jpg')} style={styles.ggi}></Image>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: unitWidth*750,
    paddingTop: unitWidth*110,
  },
  box: {
    width: unitWidth*1830,
    position: 'relative',
    left: -540*unitWidth
  },
  wrap: {
    width: unitWidth*750,
  },
  line: {
    height: unitWidth*20,
    width: unitWidth*750,
    backgroundColor: '#F5F5F5',
  },
  change: {
    width: unitWidth*750,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  refresh: {
    height: unitWidth*40,
    width: unitWidth*40,
  },
  ct: {
    color: '#2A2A2A',
    fontSize: 12,
    marginLeft: unitWidth*8,
  },
  gg: {
    marginTop: unitWidth*36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ggi: {
    height: unitWidth*340,
    width: unitWidth*713,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
