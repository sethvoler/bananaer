import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

export default class ImgTop extends Component<Props> {
  render () {
    const {title, icon, logo, mid} = this.props;
    return (
      <View style={styles.wrap}>
        <TouchableOpacity onPress={() => {
          NavigationUtil.goToPage({navigation: this.props.navigation}, 'IndexPage');
        }}>
          <Image source={logo} style={styles.logo}></Image>
        </TouchableOpacity>
        <Text style={mid?styles.title:styles.left}>{title}</Text>
        <Image source={icon} style={styles.icon}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*750,
    height: unitHeight*124,
    borderBottomColor: 'rgba(244,244,244,1)',
    borderBottomWidth: unitHeight*2, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: unitWidth*40, 
    paddingRight: unitWidth*68, 
    paddingTop: unitHeight*70,
  },
  logo: {
    width: unitWidth*52,
    height: unitWidth*52,
    borderRadius: unitWidth*26,
  },
  title: {
    color: '#373737',
    fontSize: 14,
  },
  left: {
    color: '#373737',
    fontSize: 14,
    marginRight: unitWidth*350,
  },
  icon: {
    width: unitWidth*30,
    height: unitWidth*30,
  },
});