import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View
} from 'react-native'
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';

let imgArr=[
	require('../res/image/b1.jpg'),
  require('../res/image/b2.jpg'),
  require('../res/image/b3.jpg'),
  require('../res/image/b4.jpg'),
  require('../res/image/b5.jpeg'),
  require('../res/image/b6.gif'),
];

export default class MySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    }
  }
  static defaultProps = {
    duration: 2000,
  }
  _startTimer() {
    let scrollView = this.refs.scrollView;
    this.timer = setInterval(
      () => {
        let imageCount = imgArr.length;
        let activePage = 0;
        if (this.state.currentPage >= imageCount) {
          activePage = 0;
        } else {
          activePage = this.state.currentPage + 1;
        }
        this.setState({currentPage: activePage});
        let offsetX = activePage * unitWidth*610;
        scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
      },
      this.props.duration
    );
  }

  _onAnimationEnd(e) {
    //求出偏移量
    let offsetX = e.nativeEvent.contentOffset.x;
    //求出当前页数
    let pageIndex = Math.floor(offsetX / (unitWidth*610));
    //更改状态机
    this.setState({currentPage: pageIndex});
  }

  _onScrollBeginDrag() {;
    this.timer && clearTimeout(this.timer);
  }

  _onScrollEndDrag() {
    this.timer && this._startTimer();
  }

  _renderAllImage() {
    let allImage = [];
    let j = imgArr.length;
    for (let i = 0; i < j; i++) {
      let imgsItem = imgArr[i];
      allImage.push(
        <Image key={i} source={imgsItem} style={styles.imageStyle}/>
      );
      if (i === j-1) {
        allImage.push(
          <Image key={j} source={imgArr[0]} style={styles.imageStyle}/>
        );
      }
    }
    return allImage;
  }

  _renderAllIndicator() {
    let indicatorArr = [];
    let style;
    for (let i = 0; i < imgArr.length; i++) {
      //判断
      style = (i == this.state.currentPage%imgArr.length) ? {color: '#000'} : {color: '#aaa'};
      indicatorArr.push(
        <Text key={i} style={[{fontSize: 30, bottom: 0*unitWidth,}, style]}>
            •
        </Text>
      );
    }
    return indicatorArr;
  }
  componentDidMount() {
    this._startTimer();
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <View style={styles.continer}>
        <ScrollView
          ref='scrollView'
          //水平方向
          horizontal={true}
          //当值为true时显示滚动条
          showsHorizontalScrollIndicator={false}
          //当值为true时，滚动条会停在滚动视图的尺寸的整数倍位置。这个可以用在水平分页上
          //pagingEnabled={true}
          //滑动完一贞
          onMomentumScrollEnd={(e) => {
            this._onAnimationEnd(e)
          }}
          //开始拖拽
          onScrollBeginDrag={() => {
            this._onScrollBeginDrag()
          }}
          //结束拖拽
          onScrollEndDrag={() => {
            this._onScrollEndDrag()
          }}
        >
          {this._renderAllImage()}
        </ScrollView>
        <View style={styles.pageViewStyle}>
          {this._renderAllIndicator()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  continer: {
      width: unitWidth*610,
      height: unitWidth*432,
  },
  imageStyle: {
      height: unitWidth*342,
      width: unitWidth*610,
  },
  pageViewStyle: {
      width: unitWidth*610,
      //backgroundColor: 'rgba(0,0,0,0.4)',
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
  }
});