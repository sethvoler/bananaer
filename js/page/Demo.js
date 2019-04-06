import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    Platform,
    TouchableWithoutFeedback,
    Animated, 
    TouchableOpacity
} from 'react-native';
const { height, width } = Dimensions.get('window')

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.laout_list = [];
    this.content_list = [];
    this.scrollW = 0;
    this.state = {
        data: [
            { tabName: "热点新闻", id: 1 },
            { tabName: "合作播报", id: 2 },
            { tabName: "行业咨询", id: 3 },
            { tabName: "运营攻略", id: 4 },
            { tabName: "旅行攻略", id: 5 },
            { tabName: "酒店攻略", id: 6 }
        ],
        datas:[
            { tabName: "热点新闻11111", id: 1 },
            { tabName: "合作播报22222", id: 2 },
            { tabName: "行业咨询33333", id: 3 },
            { tabName: "运营攻略44444", id: 4 },
            { tabName: "旅行攻略55555", id: 5 },
            { tabName: "酒店攻略66666", id: 6 }
        ],
      index:0,
        indexContent:0,
      
        aniLeft: new Animated.Value(0),  // left初始值设为0     
    } 
  }
  scrollTab=(event)=>{
    if(!this.scroll) return;
  }
  _onScrollBeginDragTab = (event) =>{
    let offsetX = event.nativeEvent.contentOffset.x;
    //记录ScrollView开始滚动的Y轴偏移量
    this.scrollViewStartTabOffsetX = offsetX;
    console.log("拖动----tab",offsetX);
  }
  setIndex(index, bl = true) {
    // console.log("setIndex点击index",index);
    //兼容错误
    
    if (!this.scroll) return;
    let sx = 100*index;
    console.log(index, '---', sx);
    this.scroll.scrollTo({ y: 0,x: 10, animated: true});
    // let x= 375*index;
    // this.scrollContent1.scrollTo({ y: 0,x: x, animated: true});
  }
  scrollTabEnd=(event)=>{     
    if(!this.scroll) return;
    let {x, y} = event.nativeEvent.contentOffset;
    console.log("tab_end----------x",x,this.state.index,"this.scrollViewStartTabOffsetX",this.scrollViewStartTabOffsetX);
    if(this.state.index>=5 ||this.state.index<0){
        return;
    }
    let diff = x-this.scrollViewStartTabOffsetX
    if(diff>0 ){
      this.setIndex(this.state.index+1)
    }else {
      this.setIndex(this.state.index-1)
    }
  }
  setLaout(e, index) {
    console.log("e==============",e,"index",index);
    // let layout = e.layout
    // // //存单个项的位置
    // this.laout_list[index] = layout;
    // // //计算所有项的总长度
    // this.scrollW += layout.width;
}
  render () {
    return (
      <View>      
          <ScrollView 
            contentContainerStyle={Tab.contentContainer} 
            horizontal={true} 
            directionalLockEnabled 
            showsHorizontalScrollIndicator={false}
            snapToAlignment='center' 
            ref={e => this.scroll = e}
            onScroll={(event)=>this.scrollTab(event)}
            onScrollBeginDrag={this._onScrollBeginDragTab}
            onScrollEndDrag={(event)=>this.scrollTabEnd(event)}
            pagingEnabled ={true}
          >
             <Animated.View style={[Tab.tabshuttle, {
                      transform: [
                          { translateX: this.state.aniLeft },
                      ]
                  }]} ref={e => this.shuttle = e}>
                  </Animated.View>
                  
              
             
              {this.state.data.map((item, index) => {
                  return (
                         
                          <TouchableOpacity onPress={() => this.setIndex(index)}
                              onLayout={e => this.setLaout(e.nativeEvent, index)}
                              key={item.id}
                              style={[Tab.itemCon,index === 0 ? Tab.first : null,index === this.state.data.length-1 ? Tab.last : null]}>
                              <Text style={[Tab.item, this.state.index === index ? Tab.active : null]} > {item.tabName}</Text>
                              {/* <View style={[Tab.line, this.state.index === index ? Tab.active2 : null]}>
                              </View> */}
                          </TouchableOpacity>
                  )
              }
              )}
          </ScrollView>
          
      </View>

  )
  }
}

const Tab = StyleSheet.create({
  contentContainer: {
      backgroundColor: "#00BCD4", 
      position: 'relative',
  },
  tabshuttle: {
    width:100,
    height:4,
    backgroundColor:"#fff",
    position: 'absolute',
    bottom:0,
    left:137.5,
    zIndex:99,
    borderRadius:4,

  },
  contentItem:{
      backgroundColor:'purple',
      width:375,
      height:200,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center',
      borderWidth: 2,
      borderColor: '#ddd',
      
  },
  
  item:{
      width: 100,
      height: 45,
      lineHeight: 45,
      color:'rgba(255,255,255,0.6)',
      textAlign:'center',
      fontSize:16,
      
      // opacity:0.6,

  },
  line:{
      width: 100,
      height: 5,
  },
  active:{
      width: 100,
      color:'#fff',
      opacity:1
  },
  
  contentText:{
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center'
  },
  first:{
      paddingLeft:137.5,
      backgroundColor:'#00BCD4'
  },
  last:{
      paddingRight:137.5,
      backgroundColor:'#00BCD4'
  }
})