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

  _renderAllImage(img) {
    let allImage = [];
    let j = imgArr.length;
    for (let i = 0; i < j; i++) {
      let imgsItem = imgArr[(i+img+j)%j];
      allImage.push(
        <Image key={i} source={imgsItem} style={styles.imageStyle}/>
      );
      if (i === j-1) {
        allImage.push(
          <Image key={j} source={imgArr[(img+j)%j]} style={styles.imageStyle}/>
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
      style = (i == this.state.currentPage%imgArr.length) ? {backgroundColor: '#555', width: 40*unitWidth} : {backgroundColor: '#aaa', width: 20*unitWidth};
      indicatorArr.push(
        <View key={i} style={[{bottom: 20*unitWidth,height: 20*unitWidth, borderRadius: 10*unitWidth, marginLeft: 10*unitWidth, marginRight: 10*unitWidth,}, style]}></View>
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
    const {img} = this.props;
    return (
      <View style={img === -1 
              ? styles.continer1
              : img === 1 
                ? styles.continer2 
                : styles.continer}>
        <ScrollView
          style={{borderRadius: unitWidth*10,}}
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
          {this._renderAllImage(img)}
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
      borderRadius: unitWidth*10,
  },
  continer1: {
    width: unitWidth*610,
    height: unitWidth*432,
    borderRadius: unitWidth*10,
    transform: [{scaleY: .8}, 
      {rotateY: '-70deg'}, 
      {translateX: 600*unitWidth},
      {perspective: 10000000},
      {skewY: '-2deg'}, ]
  },
  continer2: {
    width: unitWidth*610,
    height: unitWidth*432,
    borderRadius: unitWidth*10,
    transform: [{scaleY: .8}, 
      {rotateY: '-70deg'}, 
      {translateX: -600*unitWidth},
      {perspective: 10000000},
      {skewY: '2deg'}, ]
  },
  imageStyle: {
      height: unitWidth*342,
      width: unitWidth*610,
      borderRadius: unitWidth*10,
      // borderColor: 'rgba(0,0,0,1)',
      // borderBottomWidth: unitWidth*10,
  },
  pageViewStyle: {
      width: unitWidth*610,
      //backgroundColor: 'rgba(0,0,0,0.4)',
      position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: unitWidth*10,
  }
});