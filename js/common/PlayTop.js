import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class PlayTop extends Component<Props> {
  render () {
    const {title, icon, logo, mid} = this.props;
    return (
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => {
          NavigationUtil.goToPage({navigation: this.props.navigation}, 'IndexPage');
          // NavigationUtil.goBackPage({navigation: this.props.navigation});
        }}>
          {
            logo === 'back'
            ? (<Ionicons name={'md-arrow-round-back'} style={{fontSize: unitWidth*50, color: '#fff'}} />)
            : (<Image source={logo} style={styles.logo}></Image>)
          }
        </TouchableOpacity>
        <Text style={mid?styles.title:styles.left}>{title}</Text>
        {/* <Image source={icon} style={styles.icon}></Image> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*750,
    height: unitWidth*124,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: unitWidth*40, 
    paddingRight: unitWidth*68, 
    paddingTop: unitWidth*70,
  },
  logo: {
    width: unitWidth*52,
    height: unitWidth*52,
    borderRadius: unitWidth*26,
  },
  title: {
    width: unitWidth*550,
    color: '#373737',
    fontSize: 14,
  },
  left: {
    color: '#fff',
    fontSize: 14,
    marginLeft: unitWidth*20,
  },
  icon: {
    width: unitWidth*30,
    height: unitWidth*30,
  },
});