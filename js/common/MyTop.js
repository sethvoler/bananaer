import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

class Vip extends Component<Props> {
  render () {
    return (
      <View>
        <Image source={require('../res/image/ph.png')} style={styles.icon}></Image>
        <Text style={styles.vip}>普通VIP ></Text>
      </View>
    )
  }
}

class Set extends Component<Props> {
  static navigationOptions = {
    headerBackTitle: null,
  }
  render () {
    return (
      <View style={styles.logSet}>
        <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'SetUpPage');
          }}>
          <Image source={require('../res/image/set.png')} style={styles.logSetIcon}></Image>
        </TouchableOpacity>
        <Text style={styles.goLog} onPress={() => {
          NavigationUtil.goToPage({navigation: this.props.navigation}, 'LogPage');
        }}>立即登录</Text>
      </View>
    )
  }
}

export default class MyTop extends Component<Props> {
  render () {
    const {status} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <Image source={require('../1.jpeg')} style={styles.avatar}></Image>
            <View>
              <View style={styles.box}>
                <Text style={styles.name}>小包子-8fsjbs5</Text>
                <TouchableOpacity onPress={() => {
                  NavigationUtil.goToPage({navigation: this.props.navigation}, 'EditPage');
                }}>
                  <Image source={require('../res/image/edit.png')} style={styles.edit}></Image>
                </TouchableOpacity>
              </View>
              {
                status === 0
                ? <Text style={styles.noLog}>登录后解锁更多技能</Text>
                : <Vip />   
              }
            </View>
          </View>
          {
            status === 0
            ? <Set />
            : <TouchableOpacity onPress={() => {
                NavigationUtil.goToPage({navigation: this.props.navigation}, 'SetUpPage');
              }}>
                <Image source={require('../res/image/set.png')} style={styles.set}></Image>
              </TouchableOpacity>  
          }
        </View>
        <View style={styles.lists}>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'FollowPage');
            }}>
            <View style={styles.list}> 
              <Text style={styles.item1}>12541</Text>
              <Text style={styles.item2}>关注</Text>
            </View>   
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'FansPage');
            }}>
            <View style={styles.list}> 
              <Text style={styles.item1}>456</Text>
              <Text style={styles.item2}>粉丝</Text>
            </View>  
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'ReleasePage');
            }}>
            <View style={styles.list}> 
              <Text style={styles.item1}>30</Text>
              <Text style={styles.item2}>发布</Text>
            </View> 
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'CollectionPage');
            }}>
            <View style={styles.list}> 
              <Text style={styles.item1}>0</Text>
              <Text style={styles.item2}>收藏</Text>
            </View>  
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logSet: {
    alignItems: 'flex-end',
  },
  goLog: {
    width: unitWidth*174,
    height: unitWidth*58,
    lineHeight: unitWidth*58,
    backgroundColor: '#EF756A',
    overflow: 'hidden',
    borderRadius: unitWidth*29,
    textAlign: 'center',
    color: '#fff',
    fontSize: unitWidth*28,
    fontFamily: 'SourceHanSansCN-Medium',
  },
  logSetIcon: {
    position: 'relative',
    top: -40*unitWidth,
    width: unitWidth*38,
    height: unitWidth*38,
  },
  noLog: {
    marginTop: unitWidth*20,
    color: '#ADADAD',
    fontSize: unitWidth*28,
    fontFamily: 'SourceHanSansCN-Medium',
  },
  vip: {
    color: '#fff',
    fontSize: unitWidth*24,
    position: 'relative',
    top: -34*unitWidth,
    left: 50*unitWidth,
  },
  container: {
    width: unitWidth*710,
    //height: unitWidth*242,
    paddingLeft: unitWidth*20,
    paddingRight: unitWidth*30,
    borderBottomWidth: 2*unitWidth,
    borderBottomColor: 'rgba(245,245,245,1)',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: unitWidth*35,
  },
  topLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: unitWidth*130,
    height: unitWidth*130,
    borderRadius: unitWidth*65,
    marginRight: unitWidth*26,
  },
  box: {
    flexDirection: 'row',
  },
  edit: {
    marginLeft: unitWidth*25,
    marginTop: unitWidth*16,
    width: unitWidth*24,
    height: unitWidth*24,
  },
  name: {
    marginTop: unitWidth*10,
    fontSize: unitWidth*32,
    color: '#161616',
    fontFamily: 'SourceHanSansCN-Medium',
  },
  icon: {
    marginTop: unitWidth*9,
    width: unitWidth*182,
    height: unitWidth*38,
  },
  set: {
    width: unitWidth*38,
    height: unitWidth*38,
  },
  lists: {
    //height: unitWidth*170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: unitWidth*42,
    paddingRight: unitWidth*42,
  },
　list: {
    flexDirection: 'column', 
    alignItems: 'center', 
  },
  item1: {
    fontSize: unitWidth*32,
    color: '#1f1f1f',
    fontFamily: 'ArialMT',
  },
  item2: {
    fontSize: unitWidth*24,
    marginTop: unitWidth*18,
    color: '#1f1f1f',
    fontFamily: 'AdobeHeitiStd-Regular',
  }
});