
import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View, CameraRoll, Button, Image, TouchableOpacity, Modal} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import QRCode from 'react-native-qrcode';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import {connect} from 'react-redux';
import actions from '../action';
import Api from '../expand/api';
const ReactNative = require('react-native');

type Props = {};
class FXPage extends Component<Props> {
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
  constructor(props) {
    super(props);
    this.state = {
      text: 'https://www.baidu.com',
      uri: '',
      show: false,
    };
  }
  componentDidMount () {
    console.log(this.props.user);
  }

  takeToImage() {
    ReactNative.takeSnapshot(this.refs.location, {format: 'png', quality: 1}).then(
        (uri) => this.setState({uri:uri,show:true})
    ).catch(
        (error) => alert(error)
    );
  }

  //保存图片
  saveImg(img) {
    var promise = CameraRoll.saveToCameraRoll(img);
    promise.then(function (result) {
        alert('保存成功！地址如下：\n' + result);
    }).catch(function (error) {
        alert('保存失败！\n' + error);
    });

    CameraRoll.saveToCameraRoll(img).then(result => {
        alert('保存成功！地址如下：\n' + result);
    }).catch(error => {
        alert('保存失败！\n' + error);
    })
  }

  
  render() {
    return (
      <View style={styles.wrap}>
        <TouchableOpacity onPress={()=>this.takeToImage()} style={this.state.show ? styles.hide: {alignItems:'center'}}>
          <View ref='location' style={{alignItems:'center'}}>
            <Text style={{marginBottom: 10*unitWidth, fontSize: 24*unitWidth,}}>香蕉巴巴为您带来极致的视觉盛宴，</Text>
            <Text style={{marginBottom: 20*unitWidth, fontSize: 38*unitWidth,}}>赶快来注册吧！</Text>
            <QRCode
              value={this.state.text}
              size={400*unitWidth}
              bgColor='purple'
              fgColor='white'/>
            <Image 
            style={styles.logo} source={require('../res/image/logo.jpg')} />
            <Text style={{marginTop: 20*unitWidth, fontSize: 30*unitWidth,}}>我的分享码：{this.props.user.inviteCode}</Text>
          </View>
        </TouchableOpacity>
        <Text style={this.state.show ? styles.hide: {marginTop: 40*unitWidth, fontSize: 40*unitWidth,}} onPress={()=>this.takeToImage()}>点击生成图片</Text>
        <Image 
          resizeMode="stretch"
          style={this.state.show ? styles.show : styles.hide} source={{uri: this.state.uri}} />
        <Text style={this.state.show ? {marginTop: 20*unitWidth} : styles.hide}>点击以下按钮保存图片，分享给你的小伙伴吧！</Text>
        <Text style={this.state.show ? {marginTop: 10*unitWidth, color: 'blue', fontSize: 40*unitWidth} : styles.hide} onPress={() => this.saveImg.bind(this, this.state.text)}>保存图片</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});
const mapDispatchToProps = dispatch => ({
  getPhone: user => dispatch(actions.getPhone(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(FXPage);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  show: {
    borderWidth: 1, 
    height: 900*unitWidth, 
    width: 670*unitWidth, 
    // top:100*unitWidth, 
    // position:'absolute', 
    // left: 40*unitWidth,  
  },
  hide: {
    display: 'none',
  },
  logo: {
    position: 'absolute',
    top: 262*unitWidth,
    left: 170*unitWidth,
    width: unitWidth*60,
    height: unitWidth*60,
    borderRadius: unitWidth*30,
    borderWidth: 1,
    borderColor: '#fff',
    opacity: .9,
  },









  line: {
    height: unitHeight*22,
    backgroundColor: '#eee',
  },
  list: {
    paddingTop: unitHeight*3,
    paddingLeft: unitWidth*30,
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
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lArrow: {
    height: unitWidth*50,
    width: unitWidth*50,
    borderRadius: unitWidth*25,
    borderWidth: unitWidth*1,
    borderColor: 'rgba(0,0,0,.8)'
  },
  arrow: {
    marginLeft: unitWidth*15,
    height: unitWidth*27,
    width: unitWidth*15,
  },
  content: {
    color: '#ED6059',
    fontSize: 14,
  },
  pickerTop: {
    width: unitWidth*750,
    height: unitWidth*71,
    borderColor: '#EAEAEA',
    borderBottomWidth: unitWidth*2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: unitWidth*32,
    paddingRight: unitWidth*32,
    alignItems: 'center',
  },
  picker: {
    width: unitWidth*750,
    height: unitWidth*357,
    backgroundColor: '#fff',
  },
  check: {
    color: '#2A2A2A',
    fontSize: 14,
  },
  sure: {
    color: '#ED6059',
    fontSize: 14,
  },
  all: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39,39,39,.8)',
  },
  allOut: {
    position: 'absolute',
    height: 10000,
    bottom: unitWidth*428,
    left: 0,
    right: 0
  },
  allIn: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  box: {
    position: 'absolute',
    bottom: 0,
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
