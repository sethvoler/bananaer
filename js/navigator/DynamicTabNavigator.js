
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import {
  createStackNavigator, 
  createMaterialTopTabNavigator, 
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import HomePage from '../page/HomePage';
import VideoPage from '../page/VideoPage';
import ImagePage from '../page/ImagePage';
import MyPage from '../page/MyPage';
import {BottomTabBar} from 'react-navigation-tabs';

const TABS = {
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      lableStyle: {
        color: '#182147',
        fontSize: 10,
      },
      tabBarIcon: ({tintColor, focused}) => {
        if (focused) {
          return (<Image source={require('../res/image/syc.png')} style={styles.sy}></Image>)
        } else {
          return (<Image source={require('../res/image/sy.png')} style={styles.sy}></Image>)
        }
      }
    }
  },
  VideoPage: {
    screen: VideoPage,
    navigationOptions: {
      tabBarLabel: '视频',
      showIcon: true,
      tabBarIcon: ({tintColor, focused}) => 
      {
        if (focused) {
          return (<Image source={require('../res/image/spc.png')} style={styles.sy}></Image>)
        } else {
          return (<Image source={require('../res/image/sp.png')} style={styles.sy}></Image>)
        }
      }
    }
  },
  ImagePage: {
    screen: ImagePage,
    navigationOptions: {
      tabBarLabel: '图窝',
      tabBarIcon: ({tintColor, focused}) => {
        if (focused) {
          return (<Image source={require('../res/image/twc.png')} style={styles.sy}></Image>)
        } else {
          return (<Image source={require('../res/image/tw.png')} style={styles.sy}></Image>)
        }
      }
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor, focused}) => {
        if (focused) {
          return (<Image source={require('../res/image/wdc.png')} style={styles.sy}></Image>)
        } else {
          return (<Image source={require('../res/image/wd.png')} style={styles.sy}></Image>)
        }
      }
    }
  }
};
type Props = {};
export default class DynamicTabNavigator extends Component<Props> {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  static navigationOptions = {
    header: null,
  }
  _tabNavigator() {
    const {HomePage, VideoPage, ImagePage, MyPage} = TABS;
    const tabs = {HomePage, VideoPage, ImagePage, MyPage};
    return createAppContainer(createBottomTabNavigator(tabs,{
      tabBarComponent: tabBarComponent
    }));
  }
  render() {
    const Tab = this._tabNavigator();
    return <Tab/>;
  }
};

class tabBarComponent extends React.Component{
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    }
  }
  render () {
    return <BottomTabBar 
      {...this.props}
      //activeTintColor={this.theme.tintColor||this.props.activeTintColor}
      activeTintColor={'#182147'}
    />
  }
}

const styles = StyleSheet.create({
  sy: {
    width: unitWidth*48,
    height: unitWidth*48
  },
})
