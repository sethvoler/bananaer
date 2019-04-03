
import React, {Component} from 'react';
import {Platform, AsyncStorage, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import MyTop from '../common/MyTop';
import MyMiddle from '../common/MyMiddle';
import MyList from '../common/MyList';
import {connect} from 'react-redux';

type Props = {};
class MyPage extends Component<Props> {
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
  }
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <View style={styles.container}>
        <MyTop status={this.props.status}/>
        <ScrollView style={styles.thisScroll} androidoverScrollMode={'always'}>
          <MyMiddle />
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
          <MyList title={'分享给Ta'} icon={require('../res/image/fxx.png')} big={false}/>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  status: state.status.status,
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
