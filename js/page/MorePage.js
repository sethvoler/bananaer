import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import Video from '../common/Video';
import {connect} from 'react-redux';
import Api from '../expand/api';

type Props = {};
export default class MorePage extends Component<Props> {
  static navigationOptions = ({navigation,screenProps}) =>{
    return({
      headerRight: (
          <Image source={require('../res/image/search.png')} style={{marginRight:unitWidth*56,width:unitWidth*30,height:unitWidth*30}}></Image>
      ),
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
  constructor (props) {
    super(props);
    this.state = {
      upIndex: -1,
      bottomIndex: -1,
      all: [],
      sortList: [],
    }
  }
  getSortList () {
    let _ = this;
    Api.mediaList({},function (res) {
      let newRes = res.filter((item) => {
        return item.categoryName !== null;
      })
      let toData = _.changeArr(newRes)
      console.log('转化后的：you ',toData)
      _.setState({
        sortList: [].concat(toData),
        all: [].concat(res)
      })
    }, function (err) {})
  }
  changeArr(arr) {
    var map = {},
    dest = [];
    for(var i = 0; i < arr.length; i++){
      var item = arr[i];
      if(!map[item.categoryId]){
        dest.push({
          id: item.categoryId,
          name: item.categoryName,
          data: [item]
        });
        map[item.categoryId] = item;
      }else{
        for(var j = 0; j < dest.length; j++){
          var dItem = dest[j];
          if(dItem.id == item.categoryId){
            dItem.data.push(item);
            break;
          }
        }
      }
    }
    return dest;
  }
  componentDidMount () {
    // this.getNewMediaList()
    // this.getMostLikeList()
    this.getSortList()
    
  }
  render () {
    return (
      <View style={styles.wrap}>
        <View style={styles.top}>
          <View style={styles.in}>
            <Text style={this.state.upIndex < 0 ? styles.active : styles.nomal}
               onPress={() => {
                this.setState({
                  upIndex: -1
                })
                this.getSortList();
            }}>综合</Text>
            {
              // ['最多播放','最近更新','最多喜欢']
              ['最多播放','最近更新'].map((item, index) => {
                return (
                  <Text style={this.state.upIndex === index 
                    ? styles.active 
                    : styles.nomal} key={item} onPress={() => {
                      this.setState({
                        upIndex: index
                      })
                  }}>{item}</Text>
                );
              })
            }
          </View>
          <View style={styles.in}>
            <Text style={this.state.bottomIndex < 0 ? styles.active : styles.nomal}
              onPress={() => {
                this.setState({
                  bottomIndex: -1,
                })
                this.getSortList();
            }}>全部</Text>
            {
              this.state.sortList.map((item, index) => {
                return (
                  <Text style={this.state.bottomIndex === index 
                    ? styles.active 
                    : styles.nomal} key={item} onPress={() => {
                      this.setState({
                        bottomIndex: index
                      })
                      this.setState({
                        all: [].concat(item.data)
                      })
                  }}>{item.name}</Text>
                );
              })
            }
          </View>
        </View>
        <View style={styles.line}></View>
        <Video
          isHeader={false}
          data={this.state.all} 
          cstyle={2} />
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