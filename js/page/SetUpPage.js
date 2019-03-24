
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, Modal} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class SetUpPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
        isModal: false,
        isVersion: false
    };
  }
  static navigationOptions = {
    headerBackTitle: null,
    headerTintColor: '#7E7E7E',
    headerTitleStyle: {
      color: '#000'
    },
    headerBackTitleStyle: {
      color: 'rgba(0,0,0,0)'
    }
  }
  _clear() {
    this.setState({
      isModal: true
    })
  }
  _version() {
    this.setState({
      isVersion: true
    })
  }
  cancel() {
    this.setState({
      isVersion: false
    })
  }
  noClear() {
    this.setState({
      isModal: false
    })
  }
  sure() {
    this.setState({
      isModal: false,
      isVersion: false
    })
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.list}>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'SafePage');
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>账号与安全</Text>
              <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'MsgSetPage');
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>消息设置</Text>
              <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this._clear();}}>
            <View style={styles.item}>
              <Text style={styles.title}>清理缓存</Text>
              <Text style={styles.content}>30.34M</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.item}>
            <Text style={styles.title}>版本: v.1.0.0</Text>
            <TouchableOpacity onPress={() => {this._version();}}>
              <View style={styles.checkBtn}>
                <Text style={styles.check}>检查更新</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={() => {Alert.alert("quit");}}>
          <View style={styles.btn}>
            <Text style={styles.quit}>退出登录</Text>
          </View>
        </TouchableOpacity>
        <Modal
          transparent={true}             
          visible={this.state.isVersion}
          // onRequestClose={() => {this.onRequestClose()}}  // android必须实现
        >
          <View style={styles.version}>
            <View style={styles.vAlert}>
              <View style={styles.topImg}>
                <Image style={styles.topBg} source={require('../res/image/1.png')}></Image>
              </View>
              <View style={styles.topVersion}>
                <View style={styles.flexVersion}>
                  <Text style={styles.fl}>发现新版本</Text>
                  <Text style={styles.fr}>V2.1.5</Text>
                </View>
                <Text style={styles.bVersion}>大小63M</Text>
              </View>
              <View style={styles.cVersion}>
                <Text style={styles.ccVersion}>更新内容：</Text>
                <Text style={styles.ccVersion}>1、优化代理充值，充值更稳定；</Text>
                <Text style={styles.ccVersion}>2、修复部分Bug，功能优化；</Text>
              </View>
            </View>
            <View>
              <Text style={styles.cancel} onPress={() => {this.cancel()}}>X</Text>
            </View>
          </View>
        </Modal>
        <Modal
          transparent={true}             
          visible={this.state.isModal}
          // onRequestClose={() => {this.onRequestClose()}}  // android必须实现
        >
          <View style={styles.all}>
            <View style={styles.alert}>
              <Text style={styles.alertTitle} >提醒</Text>
              <Text style={styles.alertContent}>确定清理？</Text>
              <View style={styles.box}>
                <TouchableOpacity onPress={() => this.noClear()}>
                  <Text style={styles.lbtn}>手滑了</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.sure()}>
                  <Text style={styles.rbtn}>确认</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#eee',
  },
  list: {
    paddingTop: unitHeight*3,
    paddingLeft: unitWidth*30,
    marginTop: unitHeight*22,
    marginBottom: unitHeight*335,
    backgroundColor: '#fff',
  },
  item: {
    borderBottomColor: 'rgba(244,244,244,1)',
    borderBottomWidth: unitHeight*2,
    height: unitHeight*108,
    width: unitWidth*720,
    paddingRight: unitWidth*36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 100,
  },
  arrow: {
    height: unitWidth*27,
    width: unitWidth*15,
  },
  content: {
    color: '#82828a',
    fontSize: 14,
  },
  checkBtn: {
    width: unitWidth*198,
    height: unitWidth*60,
    borderColor: 'rgba(237,96,89,1)',
    borderWidth: 1,
    borderRadius: unitWidth*30,
  },
  check: {
    width: unitWidth*198,
    height: unitWidth*60,
    textAlign: 'center',
    lineHeight: unitWidth*58,
    color: '#ED6059',
    fontSize: 14,
  },
  btn: {
    width: unitWidth*680,
    height: unitWidth*78,
    marginLeft: unitWidth*35,
    backgroundColor: 'rgba(237,96,89,1)',
    borderRadius: unitWidth*39,
  },
  quit: {
    width: unitWidth*680,
    height: unitWidth*78,
    textAlign: 'center',
    lineHeight: unitWidth*78,
    color: '#fff',
    fontSize: 14,
  },
  all: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39,39,39,.8)',
  },
  alert: {
    flexDirection: 'column',
    alignItems: 'center',
    width: unitWidth*464,
    height: unitWidth*266,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: unitWidth*30,
  },
  alertTitle: {
    marginTop: unitWidth*28,
    marginBottom: unitWidth*24,
    color: '#2a2a2a',
    fontSize: 14,
  },
  alertContent: {
    color: '#82828A',
    fontSize: 14,
  },
  box: {
    marginTop: unitWidth*58,
    flexDirection: 'row',
    alignItems: 'center',
  },
  lbtn: {
    overflow: 'hidden',
    borderRadius: unitWidth*31.5,
    marginRight: unitWidth*109,
    backgroundColor: '#ED6059',
    textAlign: 'center',
    width: unitWidth*182,
    height: unitWidth*63,
    lineHeight: unitWidth*63,
    color: '#fff',
    fontSize: 14,
  },
  rbtn: {
    color: '#000',
    fontSize: 14,
  },
  version: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39,39,39,.8)',
  },
  vAlert: {
    flexDirection: 'column',
    alignItems: 'center',
    width: unitWidth*584,
    height: unitWidth*719,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: unitWidth*20,
  },
  topImg: {
    marginTop: unitWidth*(-42),
    position: 'absolute',
  },
  topBg: {
    width: unitWidth*584,
    height: unitWidth*260,
  },
  topVersion: {
    width: unitWidth*490,
    marginTop: unitWidth*50,
  },
  flexVersion: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fl: {
    color: '#fff',
    fontSize: 14,
    marginRight: unitWidth*22,
  },
  fr: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    color: '#EC6863',
    fontSize: 14,
    width: unitWidth*105,
    height: unitWidth*34,
    lineHeight: unitWidth*34,
    borderRadius: unitWidth*17,
    textAlign: 'center',
  },
  bVersion: {
    color: '#fff',
    fontSize: 14,
    marginTop: unitWidth*20,
  },
  cVersion: {
    width: unitWidth*472,
    marginTop: unitWidth*142,
    color: '#767676',
    fontSize: 14,
  },
  ccVersion: {
    color: '#767676',
    fontSize: 14,
  },
  cancel: {
    overflow: 'hidden',
    marginTop: unitWidth*43,
    width: unitWidth*56,
    height: unitWidth*56,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: unitWidth*28, 
    color: '#fff',
    fontSize: unitWidth*24,
    lineHeight: unitWidth*52,
    textAlign: 'center',
  }
});
