import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

export default class ImgTop extends Component<Props> {
  render () {
    const {title, icon, obj, height} = this.props;
    return (
      <View style={styles.wrap}>
        <View style={styles.header}>
          <Image source={icon} style={styles.icon}></Image>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.body}>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'ImgsPage');
            }}>
            <View style={styles.item}>
              <View style={{width: unitWidth*199, height: unitWidth*height, borderRadius: unitWidth*15, position: 'relative', backgroundColor: '#FAE04B'}}>
                <Text style={styles.num}>{obj[0].num}个图集</Text>
              </View>
              <Text style={styles.name}>{obj[0].name}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'ImgsPage');
            }}>
            <View style={styles.item}>
              <View style={{width: unitWidth*199, height: unitWidth*height, borderRadius: unitWidth*15, position: 'relative', backgroundColor: '#FAE04B'}}>
                <Text style={styles.num}>{obj[1].num}个图集</Text>
              </View>
              <Text style={styles.name}>{obj[1].name}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'ImgsPage');
            }}>
            <View style={styles.item}>
              <View style={{width: unitWidth*199, height: unitWidth*height, borderRadius: unitWidth*15, position: 'relative', backgroundColor: '#FAE04B'}}>
                <Text style={styles.num}>{obj[2].num}个图集</Text>
              </View>
              <Text style={styles.name}>{obj[2].name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: unitWidth*673, 
    paddingTop: unitHeight*24,
  },
  header: {
    width: unitWidth*673,
    height: unitWidth*48,  
    borderRadius: unitWidth*24, 
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: unitWidth*24,
    height: unitWidth*24,
    marginRight: unitWidth*6,
  },
  title: {
    color: '#373737',
    fontSize: 13,
  },
  body: {
    width: unitWidth*673,
    paddingLeft: unitWidth*12,
    paddingRight: unitWidth*12, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: unitWidth*16,
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  num: {
    position: 'absolute',
    bottom: unitWidth*11,
    right: unitWidth*9,
    overflow: 'hidden',
    padding: unitWidth*10,
    height: unitWidth*28,
    lineHeight: unitWidth*13,
    borderRadius: unitWidth*14,
    backgroundColor: '#494949',
    color: '#fff',
    fontSize: 7,
  },
  name: {
    marginTop: unitWidth*10,
    color: '#373737',
    fontSize: 13,
  }
});