import React, {Component} from 'react';
import {TextInput, AsyncStorage, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import MB from '../common/ModalBox';
import NavigationUtil from '../navigator/NavigationUtil';
import Api from '../expand/api';
import {connect} from 'react-redux';
import actions from '../action';

type Props = {};
const TOKEN = 'token';
class QuickPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      time: '获取验证码',
      status: false,
      isModal: false,
      msg: '',
      user: {
        confirmPwd: '',
        inviteCode: '',
        mobile: '',
        pwd: '',
        smsCode: '',
      }
    };
  }
  static navigationOptions = {
    header: null,
  }
  componentDidUpdate () {
  }
  componentWillUnmount () {
    clearInterval(this.interTimer);
  }
  backTime () {
    let _ = this;
    _.setState({
      time: 5
    });
    this.interTimer = setInterval(() => {
      if (_.state.time === 0 || _.state.time === '重新获取') {
        _.setState({
          time: '重新获取',
          status: false
        });
        clearInterval(_.interTimer);
      } else {
        _.setState({
          time: _.state.time-1
        });
      }
    }, 1000);
  }
  getSmsApi (mobile) {
    let _ = this;
    Api.sms({
      mobile: mobile,
      type: 0
    }, function(json) {
      return;
    })
  }
  registerApi (user) {
    let _ = this;
    Api.register(user, function(json) {
      console.log('我是token:',json.data.token);
      AsyncStorage.setItem(TOKEN, json.data.token, error => {
        error && console.log(error.toString());
      })
      AsyncStorage.getItem(TOKEN, (error, value) => {
        error && console.log(error.toString());
        console.log('我是token:',value);
      })
      console.log('我的注册信息：',json);
      _.goToNext();
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
  getSms () {
    if (this.state.user.mobile.length === 11) {
      this.setState({
        status: true
      })
      this.backTime();
      this.getSmsApi(this.state.user.mobile);
    } else {
      this.setState({
        isModal: true,
        msg: '请输入手机号'
      })
    }
  }
  _next (user) {
    if (user.mobile !== '' 
        && user.smsCode !== ''
        && user.pwd !== ''
        && user.confirmPwd !== '') {
      this.props.getPhone(user);
      this.registerApi(user);
    }
  }
  goToNext () {
    NavigationUtil.goToPage({
      navigation: this.props.navigation
    }, 'EditMsgPage');
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.top}>
          <Image source={require('../res/image/logo.jpg')} style={styles.logo}></Image>
          <Image source={require('../res/image/delete.png')} style={styles.delete}></Image>
        </View>
        <Text style={styles.title}>快速注册</Text>
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
              style={styles.tel}
              onChangeText={text => {
                let data = Object.assign({}, this.state.user, { mobile: text })
                this.setState({
                  user: data,
                })
              }}/>
            <Image source={require('../res/image/ld.png')} style={styles.ld}></Image>
          </View>
        </View>
        <View style={styles.input}>
          <TextInput placeholder={'请输入验证码'} style={styles.psw} 
          onChangeText={
            text => {
              let data = Object.assign({}, this.state.user, { smsCode: text })
              this.setState({
                user: data,
              })
              }}/>
          <View style={{width: unitWidth*250,flexDirection:'row',alignItems:'center',}}>
            <View style={styles.line}></View>
            <TouchableOpacity disabled={this.state.status} onPress={() => this.getSms()}>
              <Text style={styles.back}>{this.state.status ? `${this.state.time}秒` : `${this.state.time}`} </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.input}>
          <Text>请输入密码</Text>
          <TextInput placeholder={'至少输入6位数字'} style={styles.iyq}
          onChangeText={text => {
            let data = Object.assign({}, this.state.user, { pwd: text })
                this.setState({
                  user: data,
                })
          }}/>
        </View>
        <View style={styles.input}>
          <Text>确认密码</Text>
          <TextInput placeholder={'请再次输入密码'} style={styles.iyq}
          onChangeText={text => {
            let data = Object.assign({}, this.state.user, { confirmPwd: text })
            this.setState({
              user: data,
            })
          }}/>
        </View>

        <View style={styles.input}>
          <Text>邀请码</Text>
          <TextInput placeholder={'请输入邀请码（非必填）'} style={styles.iyq}
          onChangeText={text => {
            let data = Object.assign({}, this.state.user, { inviteCode: text })
                this.setState({
                  user: data
                })
          }}/>
        </View>
        <Text style={(this.state.user.mobile !== '' 
          && this.state.user.smsCode !== ''
          && this.state.user.pwd !== ''
          && this.state.user.confirmPwd !== '') ? styles.sure1 : styles.sure} onPress={() => {this._next(this.state.user)}}>确定</Text>
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
  getPhone: user => dispatch(actions.getPhone(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(QuickPage);

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
    width: unitWidth*300,
    height: unitWidth*30,
    marginRight: unitWidth*200,
  },
  psw: {
    width: unitWidth*300,
    height: unitWidth*30,
  },
  sure: {
    overflow: 'hidden',
    width: unitWidth*662,
    height: unitWidth*85,
    borderRadius: unitWidth*42.5,
    // backgroundColor: '#FD5251',
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
  line: {
    width: unitWidth*2,
    height: unitWidth*49,
    backgroundColor: 'rgba(0,0,0,.2)',
  },
  back: {
    width: unitWidth*248,
    textAlign: 'center',
    color: '#838383',
    fontSize: 14,
  }
});