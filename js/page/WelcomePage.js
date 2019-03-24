
import React, {Component} from 'react';
import {StyleSheet, Text, View, BVLinearGradient, Image} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';
import LinearGradient from 'react-native-linear-gradient';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';


type Props = {};
export default class WelcomePage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      sec: '跳过'
    }
  }
  componentDidMount () {
    let _ = this;
    this.timer = setTimeout(() => {
      NavigationUtil.resetToHomePage({
        navigation: this.props.navigation
      });
    }, 7000);
    this.timer1 = setTimeout(() => {
      _.setState({
        sec: 5
      });
      _.interTimer = setInterval(() => {
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
    }, 1000);
  }
  componentWillUnmount () {
    this.timer && clearTimeout(this.timer);
    this.interTimer && clearInterval(this.interTimer);
  }
  static navigationOptions = {
      header: null,
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Image source={require('../res/image/qdy.jpg')} style={styles.qdy}></Image>
        <Text style={styles.jump} onPress={() => {
          NavigationUtil.resetToHomePage({
            navigation: this.props.navigation
          });}}>{this.state.sec}</Text>

      </View>
      // <LinearGradient colors={['#FE77AB', '#FE7791']} style={styles.container}>
      //   <View style={styles.out}>
      //     <View style={styles.in}>
      //       <Image source={require('../res/image/wt.png')} style={styles.wt}></Image>
      //     </View>
      //   </View>
      //   <Text style={styles.welcome}>全球购</Text>
      //   <Text style={styles.content}>汇聚了销售海外优质商品的卖家</Text>
      //   <Text style={styles.content}>“淘遍全球”的心愿</Text>
      //   <Image source={require('../res/image/wb.jpg')} style={styles.wb}></Image>
      // </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  qdy: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: unitWidth*750,
    height: unitHeight*1334,
  },
  wb: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: unitWidth*750,
    height: unitWidth*306,
  },
  jump: {
    position: 'absolute',
    top: unitHeight*84,
    right: unitWidth*30,
    overflow: 'hidden',
    height: unitWidth*42,
    width: unitWidth*80,
    textAlign: 'center',
    lineHeight: unitWidth*42,
    borderRadius: unitWidth*21,
    color: '#fff',
    fontSize: 11,
    backgroundColor: '#494949',
  },
  out: {
    width: unitWidth*598,
    height: unitWidth*598,
    backgroundColor: 'rgba(255,255,255,.1)',
    borderRadius: unitWidth*299,
    marginTop: unitHeight*114,
    marginBottom: unitWidth*70,
    position: 'relative',
  },
  in: {
    width: unitWidth*450,
    height: unitWidth*450,
    backgroundColor: 'rgba(255,255,255,.3)',
    borderRadius: unitWidth*225,
    top: unitWidth*74,
    left: unitWidth*74,
    position: 'absolute',
  },
  wt: {
    width: unitWidth*400,
    height: unitWidth*400,
    position: 'absolute',
    top: unitWidth*10,
    left: unitWidth*36,
  },
  welcome: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: unitWidth*36,
  },
  content: {
    fontSize: 12,
    color: '#fff',
    marginBottom: unitWidth*10,
  },
});
