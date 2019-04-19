/**
 * @ author 风华
 * @ date 2019/04/19
 * @ version 1.0.0
 *                         419——for one neight——one neight stand      画个美女做注释，写完软件就滚蛋！
 *                              单身公寓帅小伙，帅小伙里单身汉。                            ,----------.
 *                              单身汪啊泪汪汪，吐着舌头闯人间。             _..___        ( 哈哈哈哈哈哈 ）
 *                              一手代码瞎逼写，叼根香烟数零钱。           .        `\      `-,--------'
 *                              但愿终得一人爱，不羡鸳鸯不羡仙。          ,  __)  __  .      ,
 *                              奔驰宝马都浪费，只道俗世为哪般？         /  (`—` (-`)  \   .-
 *                              兄弟喊我一声哥，最后发现情太浅！        (    \  =  /    ) -
 *                              看那满街漂亮妹，可笑单身又一年...      /)    | --'.    (
 *                                                               /' ,-- |  `-.)__  \
 *                                                              (  ( `-. ,--'    `-.`._
 *                                                               )/,`            (小姐姐",
 *                                                              ' (_        ,     `/,—‘  ）
 *                                                               `.__,    : `-'/   /`- -'
 *                                                                 |       `__'   |                                                         
 *                                                                 `    `- ._    /
 *                             注释的艺术你们懂吗？！！！               \           (
 *                                                                  /\   .       \.    哟西
 *                                                                 / |`   \      ,—\
 *                                                                /  \|   .)    /   \
 *                                                               ( ,'|\       ,'     :
 *                                                               | \,` . `-- "/       }  hello world!
 *                                                               `,`      \  |,'      /
 *                                                              / "-._     `-/        |
 *                                                              "-.__      , |,'      ;
 *                                                             /         _/  ["- --'"]
 *                                                            :          /   |"-     '
 *                                                            .              |      /   
 *                                                                           `      |                                                                         
 */
 
  import React, { Component } from 'react'
  import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions
} from 'react-native'

const {width} = Dimensions.get('window');

// 以下元素为需要引入的页面组件，替换
const allView = [<View style={{width: width}}><Text>1</Text></View>, <View style={{width: width}}><Text>2</Text></View>, <View style={{width: width}}><Text>3</Text></View>, <View style={{width: width}}><Text>4</Text></View>];

export default class MySwiperPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
      next: true,
      text: '下一步'
    }
  }

  toNext () {
    if (this.state.next) {
      let scrollView = this.refs.scrollView;
      let num = allView.length;
      let activePage = 0;
      activePage = this.state.currentPage + 1;
      if (this.state.currentPage >= num -2) {
        this.setState({
          next: false,
          text: '完成'
        })
      }
      this.setState({currentPage: activePage});
      let offsetX = activePage * width;
      scrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});
    }
  }
  _onAnimationEnd(e) {
    //求出偏移量
    let offsetX = e.nativeEvent.contentOffset.x;
    //求出当前页数
    let pageIndex = Math.floor(offsetX / (width));
    //更改当前页数
    this.setState({currentPage: pageIndex});
  }
  _renderAllIndicator() {
    let indicatorArr = [];
    let style;
    for (let i = 0; i < allView.length; i++) {
      // active 判断
      style = (i == this.state.currentPage) ? {backgroundColor: '#555'} : {backgroundColor: '#aaa'};
      indicatorArr.push(
        <View key={i} style={[{height: 80*width/750, width: 80*width/750, borderRadius: 40*width/750}, style]}></View>
      );
    }
    return indicatorArr;
  }

  render() {
    return (
      <View style={styles.continer}>
        <View style={styles.tabStyle}>
          {this._renderAllIndicator()}
        </View>
        <ScrollView
          ref='scrollView'
          //水平方向
          horizontal={true}
          //当值为true时显示滚动条
          showsHorizontalScrollIndicator={false}
          //滑动完一帧
          onMomentumScrollEnd={(e) => {
            this._onAnimationEnd(e)
          }}
        >
          {allView}
        </ScrollView>
        <Text onPress={() => {
          this.toNext();
        }}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
    height: 80*width/750,
    paddingLeft: 40*width/750,
    paddingRight: 40*width/750,
  },
});