import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

export default class PlayTop extends Component<Props> {
  render () {
    const {title, icon1, icon2, icon3,} = this.props;
    return (
      <View style={styles.wrap}>
        <View style={styles.top}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.dz}>
            <Image source={icon1} style={styles.icon1}></Image>
            <View style={styles.jd}>
              <Image source={icon3} style={styles.icon3}></Image>
              <Text style={styles.jdc}>74%觉得很赞</Text>
            </View>
            <Image source={icon2} style={styles.icon2}></Image>
          </View>
        </View>
        <View style={styles.c}>
          <Text style={styles.in}>2019-03-22</Text> 
          <Text style={styles.in1}>0.2</Text>
          <Text style={styles.in}>万次点赞</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*750,
    paddingLeft: unitWidth*30, 
    paddingRight: unitWidth*30,
    marginTop: unitWidth*32,
    marginBottom: unitWidth*40,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 18,
  },
  dz: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon1: {
    marginRight: unitHeight*22,
    width: unitWidth*32,
    height: unitWidth*35,
  },
  icon2: {
    marginLeft: unitHeight*22,
    width: unitWidth*31,
    height: unitWidth*32,
  },
  icon3: {
    width: unitWidth*90,
    height: unitWidth*10,
  },
  jdc: {
    color: '#DEC29A',
    fontSize: 8,
  },
  c: {
    marginTop: unitWidth*16,
    flexDirection: 'row',
  },
  in: {
    color: '#2A2A2A',
    fontSize: 10,
  },
  in1: {
    color: '#DEC29A',
    fontSize: 10,
  },
  



  logo: {
    width: unitWidth*52,
    height: unitWidth*52,
    borderRadius: unitWidth*26,
  },
  left: {
    
    marginRight: unitWidth*200,
  },
  icon: {
    width: unitWidth*30,
    height: unitWidth*30,
  },
});