
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class SetUpPage extends Component<Props> {
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
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.list}>
          
            <View style={styles.item}>
              <Text style={styles.title}>账号</Text>
              <Text style={styles.content}>17610268263</Text>
            </View>  
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'ChangePhonePage');
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>手机号绑定</Text>
              <View style={styles.right}>
                <Text style={styles.redContent}>17610268263</Text>
                <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.item}>
            <Text style={styles.title}>修改密码</Text>
          </View>
        </View>
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
    color: '#696A74',
    fontSize: 14,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  redContent: {
    marginRight: unitWidth*30,
    color: '#ED6059',
    fontSize: 14,
  }
});
