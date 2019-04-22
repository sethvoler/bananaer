
import React, {Component} from 'react';
import {Platform, AsyncStorage, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import MyTop from '../common/MyTop';
import MyMiddle from '../common/MyMiddle';
import MyList from '../common/MyList';
import {connect} from 'react-redux';
import Api from '../expand/api';

type Props = {};
class MyPage extends Component<Props> {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
  }
  constructor(props) {
    super(props);
    this.state = {
      topMsg: [0,0,0,0]
    }
  }
  componentDidMount() {
    this._getBanner();
  }
  componentDidUpdate () {
    if (this.props.status !== 0) {
    }
  }
  componentDidUpdate () {
    console.log(this.props.plays);
  }
  _getBanner () {
    let _ = this;
    Api.banner({}, (data) => {
      _.banners = data;
    }, (err) => {})
  }
  render () {
    return (
      <View style={styles.container}>
        <MyTop 
          status={this.props.status}
          topMsg={this.state.topMsg}/>
        <ScrollView style={styles.thisScroll} androidoverScrollMode={'always'}>
          <MyMiddle 
            banners={this.bannsrs}
            plays={this.props.plays}
            status={this.props.status}/>
          <TouchableOpacity onPress={() => {
              this.props.status === 0 ? NavigationUtil.goToPage({navigation: this.props.navigation}, 'LogPage') :
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'VipPage');
            }}>
            <MyList title={'购买会员'} icon={require('../res/image/gm.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              this.props.status === 0 ? NavigationUtil.goToPage({navigation: this.props.navigation}, 'LogPage') :
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'MMPage');
            }}>
            <MyList title={'消息通知'} icon={require('../res/image/xx.png')}/>
          </TouchableOpacity>
          <MyList title={'我的评论'} icon={require('../res/image/mpl.png')}/>
          <TouchableOpacity onPress={() => {
              this.props.status === 0 ? NavigationUtil.goToPage({navigation: this.props.navigation}, 'LogPage') :
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'LookedPage');
            }}>
            <MyList title={'浏览记录'} icon={require('../res/image/ll.png')}/>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <MyList title={'关于香蕉巴巴'} icon={require('../res/image/gy.png')} big={false}/>
          <TouchableOpacity onPress={() => {
              this.props.status === 0 ? NavigationUtil.goToPage({navigation: this.props.navigation}, 'LogPage') :
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'FXPage');
            }}>
            <MyList title={'分享给Ta'} icon={require('../res/image/fxx.png')} big={false}/>
          </TouchableOpacity> 
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  status: state.status.status,
  plays: state.plays.plays,
});

export default connect(mapStateToProps)(MyPage);

const styles = StyleSheet.create({
  container: {
    paddingTop: unitHeight*98,
    paddingLeft: unitWidth*20,
    paddingRight: unitWidth*20,
  },
  line: {
    position: 'relative',
    left: unitWidth*-20,
    height: unitWidth*10,
    width: unitWidth*770,
    backgroundColor: '#F4F4F4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  thisScroll: {
    width: unitWidth*750, 
    height: unitHeight*1254-unitWidth*442
  }
});
