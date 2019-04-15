import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import {unitWidth, unitHeight,}from '../util/AdapterUtil';
import {BoxShadow} from 'react-native-shadow';
import {connect} from 'react-redux';

export default class MyMiddle extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      dayWatchTimes: 0
    }
  }
  componentDidMount () {
    AsyncStorage.getItem('dayWatchTimes', (err, value) => {
      this.setState({
        dayWatchTimes: value
      })
    });
  }

  render () {
    const {banners, status, plays} = this.props;
    
    return (
      <BoxShadow setting={shadowOpt}>
        <View style={styles.wrap}>
          <View style={styles.header}>
            <Text style={styles.title}>观影权益</Text>
            {
              status !== 0 ? (
                <Text style={styles.content}>
                  今日免费观影次数<Text style={styles.inner}>{this.state.dayWatchTimes}</Text>/{plays}
                </Text>
              ) : null
            }
            
          </View>
          {/* 接口返回banner渲染 */}
          {/* {
            banners.map((item, index) => {
              <Image key={index} source={{uri: item}} style={styles.banner}></Image>
            })
          } */}
          <Image source={require('../res/image/banner.jpg')} style={styles.banner}></Image>
        </View>
      </BoxShadow>
    );
  }
}

const shadowOpt = {
  width: unitWidth*710,
  height: unitWidth*280,
  color: '#000',
  border:  unitWidth*8,
  radius: 5,
  opacity: 0.05,
  x:0,
  y:0,
  style: {
    marginTop: unitHeight*24,
  },
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*710,
    height: unitWidth*280,
    padding: unitWidth*25,
    backgroundColor: 'rgba(254,254,254,1)',
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: unitWidth*26,
    color: '#161616',
    fontFamily: 'SourceHanSansCN-Medium',
  },
  content: {
    fontSize: unitWidth*26,
    fontFamily: 'SourceHanSansCN-Medium',
    color: '#9c9c9c',
  },
  inner: {
    fontSize: unitWidth*26,
    fontFamily: 'SourceHanSansCN-Medium',
    color: '#f11',
  },
  banner: {
    marginTop: unitWidth*20,
    width: unitWidth*653,
    height: unitWidth*164,
    borderRadius: 9,
  },
});