
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class BindPhonePage extends Component<Props> {
  static navigationOptions = {
    //headerTitle: (<Text style={{ flex: 1, textAlign: 'center' }}>设置</Text>),
    headerBackTitle: null,
    headerTintColor: '#7E7E7E',
    headerTitleStyle: {
      color: '#000'
    },
    headerBackTitleStyle: {
      color: 'rgba(0,0,0,0)'
    }
  }
  constructor(props){
    super(props);
    this.state = {
      show: false,
      sec: 6,
    };
  }
  _done() {
    this.setState({
      show: true
    })
  }
  componentDidMount () {
    let _ = this;
    this.interTimer = setInterval(() => {
      if (_.state.sec === 0) {
        _.setState({
          sec: 0
        });
      } else {
        _.setState({
          sec: _.state.sec-1
        });
      }
    }, 1000);
  }
  componentDidUpdate () {
    if (this.state.show) {
      let _ = this;
      this.timer = setTimeout(() => {
        _.setState({
          show: false
        })
      }, 1000);
    }
  }
  componentWillUnmount () {
    clearTimeout(this.timer);
    clearInterval(this.interTimer);
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.list}>
          <View style={styles.item}>
            <Text style={styles.title}>当前手机号</Text>
            <Text style={styles.title}>18969063350</Text>
          </View> 
        </View>
        <View style={styles.list}>
          <View style={styles.item}>
            <View style={styles.innerItem}>
              <Text style={styles.title}>+86</Text>
              <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
              <Text style={styles.title}>17610268263</Text>
            </View>      
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>1662</Text>
            <Text style={styles.content}>{this.state.sec}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {this._done()}}>
          <View style={styles.btn}>
            <Text style={styles.quit}>确定</Text>
          </View>
        </TouchableOpacity>
        {
          this.state.show 
            ? (
              <View style={styles.done}>
                <Text style={styles.inDone}>绑定成功</Text>
              </View>
            ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#eee',
  },
  list: {
    paddingTop: unitHeight*3,
    paddingLeft: unitWidth*30,
    marginTop: unitHeight*22,
    backgroundColor: '#fff',
  },
  item: {
    borderBottomColor: 'rgba(244,244,244,1)',
    borderBottomWidth: unitHeight*2,
    height: unitHeight*108,
    width: unitWidth*720,
    paddingRight: unitWidth*36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 100,
  },
  innerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    height: unitWidth*27,
    width: unitWidth*15,
    marginLeft: unitWidth*8,
    marginRight: unitWidth*12,
  },
  content: {
    color: '#5cb3fe',
    fontSize: 14,
  },
  btn: {
    width: unitWidth*680,
    height: unitWidth*78,
    marginTop: unitWidth*80,
    marginLeft: unitWidth*35,
    backgroundColor: 'rgba(237,96,89,1)',
    borderRadius: unitWidth*39,
  },
  quit: {
    width: unitWidth*680,
    height: unitWidth*78,
    textAlign: 'center',
    lineHeight: unitWidth*78,
    color: '#fff',
    fontSize: 14,
  },
  done: {
    width: unitWidth*200,
    height: unitWidth*58,
    marginTop: unitWidth*60,
    marginLeft: unitWidth*275,
    backgroundColor: '#dd4f5b',
    borderRadius: unitWidth*29,
  },
  inDone: {
    width: unitWidth*200,
    height: unitWidth*58,
    textAlign: 'center',
    lineHeight: unitWidth*58,
    color: '#fff',
    fontSize: 14,
  },
});
