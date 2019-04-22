import React, {PureComponent, Component} from 'react';
import {
  Animated,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Easing,
} from 'react-native';

// npm i react-native-root-siblings 安装
import RootSiblings from 'react-native-root-siblings';

const {width, height} = Dimensions.get('window');
let lastToast;

class ToastView extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      opacityValue: new Animated.Value(0),
    };
  };
  componentDidMount () {
    Animated.timing(this.state.opacityValue, {
        toValue: .6, 
        duration: 250,
        easing: Easing.linear,
    }).start();
  };

  render () {
    const {message, fontSize, color, paddingLR, paddingTB, borderRadius} = this.props;
    return (<View style={styles.wrap}>
      <View style={styles.box}>
        <Animated.View style={{backgroundColor:'#000',
          opacity: this.state.opacityValue, 
          paddingLeft: paddingLR, 
          paddingRight: paddingLR, 
          paddingTop: paddingTB, 
          paddingBottom: paddingTB,
          borderRadius: borderRadius}}>
          <Text style={{fontSize: fontSize, color: color}}>{message}</Text>
        </Animated.View>
      </View>
    </View>)
  }
}
 
export default class Toast extends PureComponent {
    constructor(props) {
      super(props);
    }
 
    static show = (options = {
      message: '我是默认内容',
      fontSize: 40,
      color: 'red',
      paddingTB: 10,
      paddingLR: 10,
      borderRadius: 8,
    }) => {  
      if (lastToast != undefined) {
        Toast.hide(lastToast);
      }
      lastToast = new RootSiblings(<ToastView {...options}/>);
      setTimeout(() => {
        Toast.hide(lastToast)
      }, 2000);
      return lastToast;
    }

    static hide = toastView => {
      if (toastView instanceof RootSiblings) {
        toastView.destroy();
      } else {
        console.log(`toastView.hide expected a \`RootSiblings\``);
      }
    }
  }

  const styles = StyleSheet.create({
    wrap: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: width,
      height: height,
      zIndex: 1000,
    },
    box: {
      width: width,
      height: height,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })

  /**
   *    @ author 你帅气的风华哥                                 .==.            .==.
   *    @ date   2019/04/20                                 //'^ \\         // ^'\\
   *    @ 使用方法，注意每个属性都必须写，你如果觉得              // ^ ^ \(\____/)//^ ^^ \\
   *      要写的东西太多了，找我，我可以帮你去掉几个             //^ ^^ ^ / 6  6 \  ^^  ^ \\
   *                                                     //^ ^^ ^ /(  . . )\^ ^ ^ ^ \\
   *      Toast.show({                                  // ^^ ^^/\| v " "v |/\^ ^ ^^ \\  
   *        message: '小姐姐', // 文本信息               // ^^/\|/  / ` ~ ~ ` \ \/\ ^ ^^\\
   *        fontSize: 24,   // 文本字体大小             ___________________________________
   *        color: '#fff',  // 文本颜色                ____________________________________
   *        paddingTB: 10,  // 上下内边距
   *        paddingLR: 10,  // 左右内边距    不用怀疑，这个组件属龙的，今年什么年？🐷年！！可是画得跟🐂一样啊！有没有？！
   *        borderRadius: 8, // 容器圆角大小     PIG OR DRAGONS ? This is a problem! Maybe is an OX~~~
   *      });                                       But, This is a Toast that has many props...
   */