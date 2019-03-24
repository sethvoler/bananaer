import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';

export default class SetUpList extends Component<Props> {
  render () {
    const {title} = this.props;
    return (
      <View style={styles.wrap}>
        <Text style={styles.title}>{title}</Text>
        <Image source={require('../1.jpeg')} style={styles.arrow}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*750,
    height: unitHeight*108,
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginRight: unitWidth*30,
    width: unitWidth*40,
    height: unitWidth*40,
  },
  title: {
    color: '#2a2a2a',
    fontSize: 14,
  },
  arrow: {
    width: unitWidth*17,
    height: unitWidth*31,
  },
});