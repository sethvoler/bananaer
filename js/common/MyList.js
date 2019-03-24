import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';

export default class MyList extends Component<Props> {
  render () {
    const {title, icon, big=true} = this.props;
    return (
      <View style={styles.wrap}>
        <View style={styles.left}>
          <Image source={icon} style={big ? styles.icon : styles.change}></Image>
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    marginLeft: unitWidth*(-20),
    width: unitWidth*750,
    height: unitHeight*90,
    borderBottomColor: 'rgba(244,244,244,1)',
    borderBottomWidth: unitHeight*2, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: unitWidth*36, 
    paddingRight: unitWidth*36, 
  },
  left: {
    flexDirection: 'row',
    //justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: unitWidth*30,
    width: unitWidth*40,
    height: unitWidth*40,
  },
  change: {
    marginRight: unitWidth*10,
    width: unitWidth*60,
    height: unitWidth*60,
    position: 'relative',
    left: unitWidth*-10,
  },
  title: {
    color: '#2a2a2a',
    fontFamily: 'SourceHanSansCN-Medium',
    fontSize: unitWidth*28,
    position: 'relative',
    top: unitWidth*9,
  },
  arrow: {
    width: unitWidth*17,
    height: unitWidth*31,
  },
});