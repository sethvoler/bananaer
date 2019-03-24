import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class QuickPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      time: 17
    }
  }
  static navigationOptions = {
    header: null,
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
            <TextInput keyboardType={'phone-pad'} maxLength={11} placeholder={'请输入手机号'} style={styles.tel}/>
            <Image source={require('../res/image/ld.png')} style={styles.ld}></Image>
          </View>
        </View>
        <View style={styles.input}>
          <TextInput placeholder={'请输入验证码'} style={styles.psw}/>
          <View style={styles.line}></View>
          <Text style={styles.back}>{this.state.time}秒</Text>
        </View>
        <View style={styles.input}>
          <Text>邀请码</Text>
          <TextInput placeholder={'请输入邀请码（非必填）'} style={styles.iyq}/>
        </View>
        <Text style={styles.sure} onPress={() => {NavigationUtil.goToPage({
              navigation: this.props.navigation
            }, 'NextQuickPage');}}>下一步</Text>
      </View>
    );
  }
};

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
    paddingRight: unitWidth*70,
    color: '#838383',
    fontSize: 14,
  }
});