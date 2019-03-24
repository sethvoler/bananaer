
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native'; 
import MySwiper from './MySwiper';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class Video extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render () {
    const {title, isHeader, num1, num2} = this.props;
    let list1 = (length) => {
      var res = [];
      for(var i = 0; i < length; i++) {
        res.push(<Image source={require('../1.jpeg')} style={num2 === 3 ? styles.img1 : styles.img2}></Image>)
      }
      return res
    }
    let list2 = (length) => {
      var res = [];
      for(var i = 0; i < length; i++) {
        res.push(<View style={styles.main}>{list1(num2)}</View>)
      }
      return res
    }
    return (
      <View style={styles.container}>
       {
         isHeader
         ?  <View style={styles.header}>
              <View style={styles.titleWrap}>
                <Text style={styles.border}></Text>
                <Text style={styles.title}>{title}</Text>
              </View>
              <TouchableOpacity onPress={() => {NavigationUtil.goToPage({
                  navigation: this.props.navigation
                }, 'MorePage');}}>
                <View style={styles.moreBox}>
                  <Text style={styles.more}>更多</Text>
                  <Image style={styles.moreIcon} source={require('../res/image/ra.png')}></Image>
                </View>
              </TouchableOpacity>
            </View>
          : null
        }
        {list2(num1)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: unitWidth*48, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: unitWidth*40,
    width: unitWidth*750,
    paddingLeft: unitWidth*22,
    paddingRight: unitWidth*22,
    marginBottom: unitWidth*26,
  },
  titleWrap: {
    flexDirection: 'row',
  },
  border: {
    backgroundColor: '#EF756A',
    width: unitWidth*5,
    height: unitWidth*26,
    marginRight: unitWidth*12,
  },
  title: {
    height: unitWidth*26,
    color: '#2A2A2A',
    fontSize: unitWidth*27,
    fontWeight: 'bold',
    fontFamily: 'SourceHanSansCN-Medium',
  },
  moreBox: {
    flexDirection: 'row',
  },
  more: {
    color: '#2A2A2A',
    fontSize: unitWidth*27,
    fontFamily: 'AdobeHeitiStd-Regular',
  },
  moreIcon: {
    height: unitWidth*20,
    width: unitWidth*11,
    marginLeft: unitWidth*10,
    position: 'relative',
    top: unitWidth*4,
  },
  main: {
    width: unitWidth*750,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: unitWidth*36,
  },
  img1: {
    height: unitWidth*361,
    width: unitWidth*242,
    borderRadius: unitWidth*10,
  },
  img2: {
    height: unitWidth*231,
    width: unitWidth*371,
    borderRadius: unitWidth*10,
  },

  box: {
    marginTop: unitWidth*110,
    marginBottom: unitWidth*90,
  },
  line: {
    width: unitWidth*750,
    height: unitWidth*20,
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
