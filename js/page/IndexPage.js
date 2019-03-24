
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import {
  createStackNavigator, 
  createMaterialTopTabNavigator, 
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
// import HomePage from './HomePage';
// import VideoPage from './VideoPage';
// import ImagePage from './ImagePage';
// import MyPage from './MyPage';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';


type Props = {};
export default class IndexPage extends Component<Props> {
  static navigationOptions = {
    header: null,
  }
  // _tabNavigator() {
  //   return createAppContainer(createBottomTabNavigator({
  //     HomePage: {
  //       screen: HomePage,
  //       navigationOptions: {
  //         tabBarLabel: '首页',
  //         lableStyle: {
  //           color: '#182147',
  //           fontSize: 10,
  //         },
  //         tabBarIcon: ({tintColor, focused}) => (
  //           <Image source={require('../res/image/sy.png')} style={styles.sy}></Image>
  //         )
  //       }
  //     },
  //     VideoPage: {
  //       screen: VideoPage,
  //       navigationOptions: {
  //         tabBarLabel: '视频',
  //         tabBarIcon: ({tintColor, focused}) => (
  //           <Image source={require('../res/image/sp.png')} style={styles.sy}></Image>
  //         )
  //       }
  //     },
  //     ImagePage: {
  //       screen: ImagePage,
  //       navigationOptions: {
  //         tabBarLabel: '图窝',
  //         tabBarIcon: ({tintColor, focused}) => (
  //           <Image source={require('../res/image/tw.png')} style={styles.sy}></Image>
  //         )
  //       }
  //     },
  //     MyPage: {
  //       screen: MyPage,
  //       navigationOptions: {
  //         tabBarLabel: '我的',
  //         tabBarIcon: ({tintColor, focused}) => (
  //           <Image source={require('../res/image/wd.png')} style={styles.sy}></Image>
  //         )
  //       }
  //     }
  //   }));
  // }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    //const Tab = this._tabNavigator();
    //return <Tab/>;
    return <DynamicTabNavigator />
  }
};

const styles = StyleSheet.create({
  sy: {
    width: unitWidth*48,
    height: unitWidth*48
  },
})
