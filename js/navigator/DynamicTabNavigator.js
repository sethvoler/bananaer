import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, AsyncStorage} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import HomePage from '../page/HomePage';
import VideoPage from '../page/VideoPage';
import ImagePage from '../page/ImagePage';
import MyPage from '../page/MyPage';
import {BottomTabBar} from 'react-navigation-tabs';
import {connect} from 'react-redux';
import actions from '../action';

const route = (navigation) => {
  if (!navigation.isFocused()) {
      // 路由方法, 动态跳转到对应界面
      navigation.navigate(navigation.state.routeName, {
          title: navigation.state.routeName
      })
  }
};

const TABS = {
  HomePage: {
    screen: HomePage,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '首页',
      tabBarOnPress: () => { 
        AsyncStorage.setItem('tabName', 'HomePage', error => {
          route(navigation)
        });
      },
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
    }),
  },
  VideoPage: {
    screen: VideoPage,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '视频',
      tabBarOnPress: () => { 
        AsyncStorage.setItem('tabName', 'VideoPage', error => {
          route(navigation)
        });
      },
      lableStyle: {
        color: '#182147',
        fontSize: 10,
      },
      tabBarIcon: ({tintColor, focused}) => 
      {
        if (focused) {
          return (<Image source={require('../res/image/spc.png')} style={styles.sy2}></Image>)
        } else {
          return (<Image source={require('../res/image/sp.png')} style={styles.sy2}></Image>)
        }
      }
    }),
  },
  ImagePage: {
    screen: ImagePage,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '图窝',
      tabBarOnPress: () => { 
        AsyncStorage.setItem('tabName', 'ImagePage', error => {
          route(navigation)
        });
      },
      lableStyle: {
        color: '#182147',
        fontSize: 10,
      },
      tabBarIcon: ({tintColor, focused}) => {
        if (focused) {
          return (<Image source={require('../res/image/twc.png')} style={styles.sy3}></Image>)
        } else {
          return (<Image source={require('../res/image/tw.png')} style={styles.sy3}></Image>)
        }
      }
    })
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: ({navigation}) => ({
      tabBarLabel: '我的',
      tabBarOnPress: () => { 
        AsyncStorage.setItem('tabName', 'MyPage', error => {
          route(navigation)
        });
      },
      lableStyle: {
        color: '#182147',
        fontSize: 10,
      },
      tabBarIcon: ({tintColor, focused}) => {
        if (focused) {
          return (<Image source={require('../res/image/wdc.png')} style={styles.sy4}></Image>)
        } else {
          return (<Image source={require('../res/image/wd.png')} style={styles.sy4}></Image>)
        }
      }
    }),
  }
};
type Props = {};
class DynamicTabNavigator extends Component<Props> {
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
      tabBarComponent: tabBarComponent,
      //initialRouteName: tabName,
    }));
  }
  render() {
    // const tabName = this.props.tab;
    // alert(tabName)
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

const mapStateToProps = state => ({
  tab: state.tab.tab,
});
export default connect(mapStateToProps)(DynamicTabNavigator);

const styles = StyleSheet.create({
  sy: {
    width: unitWidth*48,
    height: unitWidth*48
  },
  sy2: {
    width: unitWidth*50,
    height: unitWidth*40
  },
  sy3: {
    width: unitWidth*58,
    height: unitWidth*40
  },
  sy4: {
    width: unitWidth*52,
    height: unitWidth*52
  },
})
