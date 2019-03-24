import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';

export default class LookList extends Component<Props> {
  render () {
    const {title, time} = this.props;
    return (
      <View style={styles.all}>
        <View style={styles.line}></View>
        <View style={styles.wrap}>
          <View style={styles.left}>
            <Text style={styles.content}>{title}</Text>
            <Text style={styles.time}>{time}</Text>
          </View>
          <Image source={require('../1.jpeg')} style={styles.img}></Image>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  all: {
    flexDirection: 'row',
  },
  line: {
    width: unitWidth*22,
    height: unitWidth*177,
    backgroundColor: '#fff',
  },
  wrap: {
    width: unitWidth*728,
    height: unitWidth*175,
    borderBottomColor: 'rgba(244,244,244,1)',
    borderBottomWidth: unitWidth*2,    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    paddingRight: unitWidth*40, 
    paddingTop: unitWidth*24, 
    paddingBottom: unitWidth*20, 
    backgroundColor: '#fff',
  },
  left: {
    textAlign: 'left',
  },
  content: {
    color: '#2A2A2A',
    fontSize: 14,
  },
  time: {
    marginTop: unitWidth*46,
    color: '#909092',
    fontSize: 16,
  },
  img: {
    width: unitWidth*180,
    height: unitWidth*134,
  },
});