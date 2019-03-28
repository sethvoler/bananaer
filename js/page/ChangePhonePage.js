
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import {connect} from 'react-redux';
import actions from '../action';

type Props = {};
class ChangePhonePage extends Component<Props> {
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
  _hide (phone) {
    return phone.slice(0,3) + '****' + phone.slice(8,11);
  }
  componentDidMount () {
    //this.phone = this.props.user.mobile;
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../1.jpeg')} style={styles.top}></Image>
          <Text style={styles.title1}>您已绑定手机号</Text>
          <Text style={styles.title2}>{this._hide (this.props.user.mobile)}</Text>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'BindPhonePage');
            }}>
            <View style={styles.btn}>
              <Text style={styles.quit}>更换绑定的手机号</Text>
            </View>
          </TouchableOpacity>   
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
});
// const mapDispatchToProps = dispatch => ({
//   getPhone: user => dispatch(actions.getPhone(user))
// });
export default connect(mapStateToProps)(ChangePhonePage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top: {
    height: unitWidth*225,
    width: unitWidth*191,
    marginTop: unitWidth*110,
    marginBottom: unitWidth*64,
  },
  title1: {
    color: '#8D8D8D',
    fontSize: 14,
  },
  title2: {
    color: '#000',
    fontSize: 14,
    marginTop: unitWidth*30,
    marginBottom: unitWidth*52,
  },
  btn: {
    width: unitWidth*394,
    height: unitWidth*65,
    backgroundColor: 'rgba(237,96,89,1)',
    borderRadius: unitWidth*39,
  },
  quit: {
    width: unitWidth*394,
    height: unitWidth*65,
    textAlign: 'center',
    lineHeight: unitWidth*65,
    color: '#fff',
    fontSize: 14,
  },
});
