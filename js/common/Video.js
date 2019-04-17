
import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'; 
import AsyncStorage from '@react-native-community/async-storage';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {connect} from 'react-redux';
import actions from '../action';
import MB from '../common/ModalBox';


type Props = {};

class Wrap extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      dayWatchTimes: 0,
      flag: false,
      content: '',
    }
  }
  componentDidMount () {
    AsyncStorage.getItem('dayWatchTimes', (err, value) => {
      this.setState({
        dayWatchTimes: value
      })
    });
  }
  sure () {
    this.setState({
      flag: false
    })
  }
  render () {
    const {data, cstyle, getPlays, plays, status} = this.props;
    let list = (data, cstyle) => {
      var res = [];
      for(var i = 0; i < data.length; i++) {
        let id = data[i].id;
        res.push(<TouchableOpacity key={i} onPress={() => {
          if (status !== 0) {
            let times = 0;
            AsyncStorage.getItem('times', (err, value) => {
              times = value
            });
            times=1+Number(times);
            if (plays < this.state.dayWatchTimes) {
              getPlays(times);
              AsyncStorage.setItem('times', String(times), error => {});
              NavigationUtil.goToPage({navigation: this.props.navigation, id: id}, 'PlayPage');
            } else {
              this.setState({
                flag: true,
                content: '今日免费观看次数已用完'
              })
            }
          } else {
            NavigationUtil.goToPage({
              navigation: this.props.navigation
            }, 'LogPage');}
          }
        }>
          <Image resizeMode={'stretch'} source={{uri: data[i].posterUrl}} style={cstyle == 1 ? styles.img1 : styles.img2}></Image>
          <View style={cstyle == 1 
            ? {position: 'absolute', 
              width: unitWidth*371, 
              height: unitWidth*40, 
              backgroundColor:'rgba(0,0,0,.4)',
              top: unitWidth*191, 
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              } 
            : {}}>
              <Text style={{
                marginLeft: unitWidth*20,  
                fontSize: unitWidth*20,  
                color:'#fff',
                //fontFamily: 'SourceHanSansCNM'
                } }>{data[i].mediaName}</Text>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                } }>
                <AntDesign name={'caretright'} size={unitWidth*20} color={'#fff'}/>
                <Text style={{ 
                  marginRight: unitWidth*20,
                  marginLeft: unitWidth*8, 
                  fontSize: unitWidth*19,  
                  color:'#fff',
                  //fontFamily: 'PingFang-SC-Medium'
                  } }>{data[i].playTimes || 0}</Text>
              </View>
            </View>
            <MB 
              content={this.state.content} 
              isModal={this.state.flag}
              sure={() => this.sure()}/>
        </TouchableOpacity>)
      }
      return res
    }
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', width: unitWidth*778,}}>
        {list(data, cstyle)}
      </View>
    )
  }
}

class Video extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render () {
    const {title, isHeader, cstyle, data} = this.props;
    return (
      <View style={data.length === 0 ? [styles.container, {display: 'none'}] : styles.container}>
       {
         isHeader
         ?  <View style={styles.header}>
              <View style={styles.titleWrap}>
                <Text style={styles.border}></Text>
                <Text style={styles.title}>{title}</Text>
              </View>
              <TouchableOpacity onPress={() => {
                if (this.props.status !== 0) {
                  NavigationUtil.goToPage({
                    navigation: this.props.navigation
                  }, 'MorePage');
                } else {
                  NavigationUtil.goToPage({
                    navigation: this.props.navigation
                  }, 'LogPage');}
                }
                }>
                <View style={styles.moreBox}>
                  <Text style={styles.more}>更多</Text>
                  <Image style={styles.moreIcon} source={require('../res/image/ra.png')}></Image>
                </View>
              </TouchableOpacity>
            </View>
          : null
        }
        <Wrap 
          data={data} 
          getPlays={() => this.props.getPlays()} 
          cstyle={cstyle}
          status={this.props.status}
          plays={this.props.plays}/>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  plays: state.plays.plays,
  status: state.status.status,
});
const mapDispatchToProps = dispatch => ({
  getPlays: times => dispatch(actions.getPlays(times)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Video);

const styles = StyleSheet.create({
  container: {
    paddingTop: unitWidth*48, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: unitWidth*40,
    width: unitWidth*750,
    paddingLeft: unitWidth*22,
    paddingRight: unitWidth*22,
    marginBottom: unitWidth*26,
  },
  titleWrap: {
    height: unitWidth*40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  border: {
    backgroundColor: '#EF756A',
    width: unitWidth*5,
    height: unitWidth*26,
    marginRight: unitWidth*12,
  },
  title: {
    lineHeight: unitWidth*40,
    color: '#2A2A2A',
    fontSize: unitWidth*27,
    fontWeight: 'bold',
    fontFamily: 'SourceHanSansCN-Medium',
  },
  moreBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  more: {
    lineHeight: unitWidth*40,
    color: '#2A2A2A',
    fontSize: unitWidth*27,
    fontFamily: 'AdobeHeitiStd-Regular',
  },
  moreIcon: {
    height: unitWidth*20,
    width: unitWidth*11,
    marginLeft: unitWidth*10,
  },
  main: {
    width: unitWidth*750,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: unitWidth*36,
  },
  img1: {
    height: unitWidth*231,
    width: unitWidth*371,
    borderRadius: unitWidth*10,
    marginRight: unitWidth*8,
    marginBottom: unitWidth*10,
  },
  img2: {
    height: unitWidth*361,
    width: unitWidth*242,
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
