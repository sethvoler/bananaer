import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import Video from '../common/Video';
import ImgTop from '../common/ImgTop';

type Props = {};
export default class MorePage extends Component<Props> {
  static navigationOptions = ({navigation,screenProps}) =>{
    return({
      headerRight: (
          <Image source={require('../res/image/search.png')} style={{marginRight:unitWidth*56,width:unitWidth*30,height:unitWidth*30}}></Image>
      ),
      //headerTitle: (<Text style={{ flex: 1, textAlign: 'center' }}>设置</Text>),
      headerBackTitle: null,
      headerTintColor: '#7E7E7E',
      headerTitleStyle: {
        color: '#000'
      },
      headerBackTitleStyle: {
        color: 'rgba(0,0,0,0)'
      }
    })
  }
  render () {
    return (
      <View style={styles.wrap}>
        <ImgTop 
          title={'视频中心'} 
          logo={require('../res/image/logo.jpg')}
          icon={require('../res/image/search.png')}
          mid={true}/>
        <ScrollView>
          <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'PlayPage');
          }}>
            <View style={styles.item}>
              <Image style={styles.spg} source={require('../res/image/spg.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'PlayPage');
          }}>
            <View style={styles.item}>
              <Image style={styles.spg} source={require('../res/image/spg.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'PlayPage');
          }}>
            <View style={styles.item}>
              <Image style={styles.spg} source={require('../res/image/spg.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.spg} source={require('../res/image/spg.png')}></Image>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            NavigationUtil.goToPage({navigation: this.props.navigation}, 'PlayPage');
          }}>
            <View style={styles.item}>
              <Image style={styles.spg} source={require('../res/image/spg.png')}></Image>
            </View>
          </TouchableOpacity>
        </ScrollView>

        
      </View>
    );
    
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    width: unitWidth*750,
    height: unitWidth*164,
  },
  in: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: unitWidth*38,
    height: unitWidth*82, 
  },
  nomal: {
    fontSize: 12,
    color: '#2A2A2A',
    marginRight: unitWidth*32, 
  },
  active: {
    fontSize: 12,
    color: '#fff',
    backgroundColor: '#FD568C',
    borderRadius: unitWidth*19, 
    lineHeight: unitWidth*38, 
    height: unitWidth*38, 
    marginRight: unitWidth*32, 
    overflow: 'hidden',
    paddingLeft: unitWidth*20, 
    paddingRight: unitWidth*20, 
  },
  line: {
    backgroundColor: '#F8FAFA',
    width: unitWidth*750,
    height: unitWidth*8,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: unitWidth*40,
    marginBottom: unitWidth*40,
  },
  spg: {
    width: unitWidth*710,
    height: unitWidth*359,
  },
  
  
  
  
  e: {
    width: unitWidth*750,
    height: unitWidth*80,
    paddingLeft: unitWidth*30,
  },
  ctitle: {
    lineHeight: unitWidth*80,
    color: '#979BA7',
    fontSize: 14,
  },
  box: {
    width: unitWidth*750,
    height: unitWidth*80,
    paddingLeft: unitWidth*30,
    paddingRight: unitWidth*37,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: unitWidth*34,
    height: unitWidth*30,
    marginRight: unitWidth*32,
  },
  content: {
    color: '#2A2A2A',
    fontSize: 14,
  },
  ra: {
    width: unitWidth*12,
    height: unitWidth*19,
  }
})