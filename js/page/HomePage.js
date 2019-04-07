
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, ScrollView, AsyncStorage} from 'react-native';
import {unitWidth}from '../util/AdapterUtil'; 
import MySwiper from '../common/MySwiper';
import Video from '../common/Video';

type Props = {};
export default class HomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      ads: false,
    }
  }
  componentDidMount() {
    AsyncStorage.getItem('tabName', (error,value) => {
      // store
    });
  }
  componentDidUpdate () {
    AsyncStorage.getItem('tabName', (error,value) => {
      // store
    });
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrap}>
          <View style={styles.box}>
            <MySwiper img={-1}/>
            <MySwiper img={0}/>
            <MySwiper img={1}/>
          </View>
          <View style={styles.line}></View>
          <Video
            isHeader={true}
            title={'最新片源'}
            key={'最新片源'}
            num1={3}
            num2={2} 
            style={1}/>
          <Video
            isHeader={true}
            title={'重磅热播'}
            key={'重磅热播'}
            num1={2}
            num2={2} 
            style={1} />
          <View style={styles.change}>
            <Image source={require('../res/image/refresh.png')} style={styles.refresh}></Image>
            <Text style={styles.ct}>换一批</Text>
          </View>
          <View style={styles.line}></View>
          <View style={this.state.ads ? styles.gg : {display: 'none'}}>
            <Image source={require('../res/image/gg.jpg')} style={styles.ggi}></Image>
          </View>
          <Video
            isHeader={true}
            title={'国产大剧'}
            key={'国产大剧'}
            num1={3}
            num2={3} 
            style={2} />
          <Video
            isHeader={true}
            title={'国产大剧'}
            key={'国产大剧2'}
            num1={3}
            num2={3} 
            style={2} />
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
  wrap: {
    width: unitWidth*750,
  },
  box: {
    marginLeft: -560*unitWidth,
    width: unitWidth*1870,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
