
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from '../navigator/NavigationUtil';
import {unitWidth, unitHeight}from '../util/AdapterUtil';
import Api from '../expand/api';
import MB from '../common/ModalBox';
import Loading from '../common/Loading';


const {height, width} = Dimensions.get('window');


type Props = {};
export default class WelcomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      sec: 5,
      disabled: false,
      flag: false,
      content: '',
      isLoading: true,
    }
  }
  goHome () {
    if (this.state.disabled) {
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation
      });
    }
  }
  settings () {
    let _ = this;
    Api.settings({}, function (data) {
      console.log(data);
      _.img = data.launchImageUrl;
      AsyncStorage.setItem('version', data.appVersion, error => {});
      AsyncStorage.setItem('dayWatchTimes', String(data.dayWatchTimes), error => {});
    }, function (msg) {
      _.setState({
        flag: true,
        content: msg
      })
    })
  }
  sure () {
    this.setState({
      flag: false
    })
  }
  componentDidMount () {
    this.settings();
    AsyncStorage.setItem('times', '0', error => {});
    this.backTime();
  }
  componentWillUnmount () {
    this.interTimer && clearInterval(this.interTimer);
  }
  static navigationOptions = {
      header: null,
  }

  backTime () {
    let _ = this;
      this.interTimer = setInterval(() => {
      if (_.state.sec === 0 || _.state.sec === '跳过') {
        _.setState({
          sec: '跳过',
          disabled: true
        });
      } else {
        _.setState({
          sec: _.state.sec-1,
        });
      }
    }, 1000);
  }

  toRed (isLoading) {
    if (isLoading) {
      return null;
    } else {
      return (
        <Text style={styles.jump} onPress={() => {this.goHome()}}>{this.state.sec}</Text>
      )
    }
  }
  suc () { 
    this.setState({
      isLoading: false,
      sec: 5
    })
  }


  render() {
    return (
      <View style={{flex: 1}}>
        <Image source={
          this.img === 'string' 
          ? 
          require('../res/image/qdy.jpg')
          : 
          {uri: this.img}
          } style={styles.qdy}
          resizeMode={'stretch'}
          onLoad={() => {this.suc()}}
          ></Image>
          {this.toRed(this.state.isLoading)}
        <MB 
          content={this.state.content} 
          isModal={this.state.flag}
          sure={() => this.sure()}/>
        <Loading isLoading={this.state.isLoading}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  qdy: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: width,
    height: height,
  },
  jump: {
    position: 'absolute',
    top: unitHeight*84,
    right: unitWidth*30,
    overflow: 'hidden',
    height: unitWidth*42,
    width: unitWidth*80,
    textAlign: 'center',
    lineHeight: unitWidth*42,
    borderRadius: unitWidth*21,
    color: '#fff',
    fontSize: 11,
    backgroundColor: '#494949',
    opacity: .8,
  },
});
