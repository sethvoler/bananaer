import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';

type Props = {};
export default class ReleasePage extends Component<Props> {
  static navigationOptions = {
    //headerTitle: (<Text style={{ flex: 1, textAlign: 'center' }}>设置</Text>),
    headerBackTitle: null,
    headerTintColor: '#7E7E7E',
    headerTitleStyle: {
      color: '#000'
    },
    headerBackTitleStyle: {
      color: 'rgba(0,0,0,0)'
    }
  }
  constructor(props) {
    super(props);
    this.tabNames = ['已发布', '待审核'];
  }
  _genTabs() {
    const tabs = {};
    this.tabNames.forEach((item, index) => {
      tabs[`tab${index}`] = {
        screen: props => <ReleaseTab {...props} tabLabel={item}/>,
        navigationOptions: {
          title: item
        }
      }
    });
    return tabs;
  }
  render() {
    const TabNavgator = createAppContainer(createMaterialTopTabNavigator(
      this._genTabs(), 
      {
        tabBarOptions: {
          activeTintColor: '#FE413D',
          inactiveTintColor: '#000',
          labelStyle: {
            fontSize: 14,
            borderWidth: 0,
          },
          style: {
            backgroundColor: '#fff',
            borderBottomWidth: .5,
            borderBottomColor: '#ccc',
          },
          indicatorStyle: {
            backgroundColor: '#FE413D',
            width: unitWidth*38,
            height: unitWidth*4,
            marginLeft: unitWidth*168.5,
            marginRight: unitWidth*168.5,
          }
        }
      }
    ));
    return (
      <View style={{flex: 1, marginTop: 0}}>
        <TabNavgator />
      </View>
    );
  }
};

class ReleaseTab extends Component<Props> {
  render() {
    const {tabLabel} = this.props;
    return (
      <View style={styles.wrap}>
        {tabLabel === '已发布'?<ReleaseTab1 />:<ReleaseTab2 />}
      </View>
    );
  }
}

class ReleaseTab1 extends Component<Props> {
  render() {
    return (
      <View>
        <Image source={require('../res/image/2.png')} style={styles.img}></Image>
        <Text style={styles.content}>还没有收藏的帖子呢～</Text>
      </View>
    );
  }
}

class ReleaseTab2 extends Component<Props> {
  render() {
    return (
      <View style={styles.wrap}>
        <Image source={require('../res/image/2.png')} style={styles.img}></Image>
        <Text style={styles.content}>暂时没有审核的帖子，首先发布呢～</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  content: {
    color: '#88888F',
    fontSize: 14,
    marginTop: unitWidth*24,
  },
  img: {
    marginTop: unitWidth*160,
    width: unitWidth*280,
    height: unitWidth*350,
  },
});