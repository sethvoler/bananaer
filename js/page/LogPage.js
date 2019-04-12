import React, {Component} from 'react';
import {TextInput, AsyncStorage, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import MB from '../common/ModalBox';
import NavigationUtil from '../navigator/NavigationUtil';
import {connect} from 'react-redux';
import actions from '../action';
import Api from '../expand/api';

type Props = {};
const TOKEN = 'token';
class LogPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      psw: '',
      isModal: false,
    }
  }
  static navigationOptions = {
    header: null,
  }
  getUserInfo () {
    let _ = this;
    Api.userInfo({}, (data) => {
      AsyncStorage.setItem('qrimg', data.qrimg, error => {
        error && console.log(error.toString());
      })
      _.props.getPhone(data.user);
      console.log(_.props.user);
    }, (err) => {})
  }
  loginApi (user) {
    let _ = this;
    Api.login(user, function(json) {
      NavigationUtil.goToPage({navigation: _.props.navigation}, 'IndexPage');
      _.props.logIn(1);
      AsyncStorage.setItem(TOKEN, json.data.token, error => {
        error && console.log(error.toString());
      })
      _.getUserInfo();
    },function(msg) {
      _.setState({
        isModal: true,
        msg: msg
      })
    })
  }
  sure () {
    this.setState({
      isModal: false
    })
  }
  _success () {
    this.loginApi({
      mobile: this.state.phone,
      pwd: this.state.psw,
    })
  }
  _phoneChange (data) {
    this.setState({
      phone: data 
    })
  }
  componentDidUpdate () {
  }
  _pswChange (data) {
    this.setState({
      psw: data 
    })
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.top}>
          <Image source={require('../res/image/logo.jpg')} style={styles.logo}></Image>
          <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'IndexPage');
          }}>
            <Image source={require('../res/image/delete.png')} style={styles.delete}></Image>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>欢迎登录</Text>
        <View style={styles.input}>
          <View style={styles.inl}>
            <Text style={styles.dn}>+86</Text>
            <Image source={require('../res/image/ra.png')} style={styles.ra}></Image>
          </View>
          <View style={styles.inl}>
            <TextInput 
              keyboardType={'phone-pad'} 
              maxLength={11} 
              placeholder={'请输入手机号'}
              onChangeText={(text) => {this._phoneChange(text)}}
              autoCapitalize="none"
              style={styles.tel}/>
            <Image source={require('../res/image/ld.png')} style={styles.ld}></Image>
          </View>
        </View>
        <View style={styles.input}>
          <TextInput 
            placeholder={'请输入密码'} 
            password={true}
            onChangeText={(text) => {this._pswChange(text)}}
            autoCapitalize="none"
            style={styles.psw}/>
          <Image source={require('../res/image/look.png')} style={styles.ldl}></Image>
        </View>
        <Text style={
          this.state.phone !== '' && this.state.psw !== ''
          ? styles.sure1
          : styles.sure}
          onPress={
            this.state.phone !== '' && this.state.psw !== ''
            ? () => {this._success()}
            : () => {return false;}
          }
        >确定</Text>
        <Text style={styles.no}>忘记密码？</Text>
        <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({
              navigation: this.props.navigation
            }, 'QuickPage');
          }}>
          <View style={styles.quick}>
            <Text style={styles.red}>快速注册</Text>
            <Image source={require('../res/image/redr.png')} style={styles.redr}></Image>
          </View>
        </TouchableOpacity>
        <MB 
          content={this.state.msg} 
          isModal={this.state.isModal}
          sure={() => this.sure()}/>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user.user,
});
const mapDispatchToProps = dispatch => ({
  logIn: status => dispatch(actions.logIn(status)),
  getPhone: user => dispatch(actions.getPhone(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(LogPage);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: unitWidth*44,
    paddingRight: unitWidth*44,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: unitWidth*20,
    height: unitWidth*80,
    width: unitWidth*662,
    marginTop: unitHeight*140,
  },
  logo: {
    width: unitWidth*80,
    height: unitWidth*80,
    borderRadius: unitWidth*40,
  },
  delete: {
    width: unitWidth*30,
    height: unitWidth*30,
  },
  title: {
    width: unitWidth*662,
    marginTop: unitWidth*22,
    marginBottom: unitWidth*120,
    color: '#2A2A2A',
    fontSize: 20,
  },
  input: {
    width: unitWidth*662,
    height: unitWidth*95,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: unitWidth*2,
  },
  inl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dn: {
    marginRight: unitWidth*20,
    color: '#2A2A2A',
    fontSize: 14,
  },
  ra: {
    width: unitWidth*11,
    height: unitWidth*20,
  },
  ld: {
    width: unitWidth*30,
    height: unitWidth*30,
  },
  ldl: {
    width: unitWidth*38,
    height: unitWidth*22,
  },
  tel: {
    width: unitWidth*500,
    height: unitWidth*80,
  },
  psw: {
    width: unitWidth*600,
    height: unitWidth*80,
  },
  sure: {
    overflow: 'hidden',
    width: unitWidth*662,
    height: unitWidth*85,
    borderRadius: unitWidth*42.5,
    backgroundColor: '#CECECE',
    marginTop: unitWidth*98,
    textAlign: 'center',
    lineHeight: unitWidth*85,
    color: '#fff',
    fontSize: 14,
  },
  sure1: {
    overflow: 'hidden',
    width: unitWidth*662,
    height: unitWidth*85,
    borderRadius: unitWidth*42.5,
    backgroundColor: '#FD5251',
    marginTop: unitWidth*98,
    textAlign: 'center',
    lineHeight: unitWidth*85,
    color: '#fff',
    fontSize: 14,
  },
  no: {
    width: unitWidth*662,
    color: '#A09EA4ff',
    fontSize: 14,
    textAlign: 'right',
    marginTop: unitWidth*24,
  },
  quick: {
    marginTop: unitWidth*327,
    flexDirection: 'row',
    alignItems: 'center',
  },
  red: { 
    color: '#F74B5F',
    fontSize: 14,
  },
  redr: { 
    width: unitWidth*11,
    height: unitWidth*20,
  }
});