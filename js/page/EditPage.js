
import React, {Component} from 'react';
import {Picker, StyleSheet, Text, View, Button, Alert, Image, TouchableOpacity, Modal} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class EditPage extends Component<Props> {
  static navigationOptions = {
    headerBackTitle: null,
    headerTintColor: '#7E7E7E',
    headerTitleStyle: {
      color: '#000'
    },
    headerBackTitleStyle: {
      color: 'rgba(0,0,0,0)'
    }
  }
  constructor(props) {
    super(props);
    this.state = {
        isModal: false,
        preSex: '男',
        sex: '男',
    };
  }
  _clear() {
    let _ = this;
    this.setState({
      isModal: true
    })
  }
  noClear() {
    this.setState({
      isModal: false
    });
  }
  sure() {
    this.setState({
      sex: this.state.preSex,
      isModal: false,
    });
  }
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.line}></View>
        <View style={styles.list}>
          <View style={styles.item}>
            <Text style={styles.title}>头像</Text>
            <View style={styles.right}>
              <Image source={require('../1.jpeg')} style={styles.lArrow}></Image>
              <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
            </View> 
          </View>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'EditNamePage');
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>昵称</Text>
              <View style={styles.right}>
                <Text style={styles.title}>嘿嘿三郎</Text>
                <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
              </View> 
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
              NavigationUtil.goToPage({navigation: this.props.navigation}, 'EditSinePage');
            }}>
            <View style={styles.item}>
              <Text style={styles.title}>个性签名</Text>
              <View style={styles.right}>
                <Text style={styles.title}>这家伙很懒，什么都没留下。</Text>
                <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
              </View> 
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>
        <View style={styles.list}>
          <TouchableOpacity onPress={() => {this._clear()}}>
            <View style={styles.item}>
              <Text style={styles.title}>性别</Text>
              <View style={styles.right}>
                <Text style={styles.title}>{this.state.sex}</Text>
                <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
              </View> 
            </View> 
          </TouchableOpacity>
          <View style={styles.item}>
            <Text style={styles.title}>生日</Text>
            <View style={styles.right}>
              <Text style={styles.content}>待完善</Text>
              <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
            </View> 
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>地区</Text>
            <View style={styles.right}>
              <Text style={styles.content}>待完善</Text>
              <Image source={require('../res/image/ra.png')} style={styles.arrow}></Image>
            </View> 
          </View>
        </View> 
        <Modal
          transparent={true}             
          visible={this.state.isModal}
          // onRequestClose={() => {this.onRequestClose()}}  // android必须实现
        >
          <View style={styles.all}>
            <View style={styles.box}>
              <View style={styles.pickerTop}>
                <Text style={styles.check}>选择性别</Text>
                <TouchableOpacity onPress={() => {this.sure()}}>
                  <Text style={styles.sure}>确定</Text>
                </TouchableOpacity>
              </View>
              <Picker style={styles.picker}
                      selectedValue={this.state.preSex}
                      onValueChange={(sex)=>this.setState({preSex: sex})}>
                <Picker.Item label='男' value='男' />
                <Picker.Item label='女' value='女' />
              </Picker>
            </View>
          </View>
          <View style={styles.allOut}>
            <Text style={styles.allIn} onPress={() => {this.noClear()}}></Text>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#fff',
  },
  line: {
    height: unitHeight*22,
    backgroundColor: '#eee',
  },
  list: {
    paddingTop: unitHeight*3,
    paddingLeft: unitWidth*30,
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
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lArrow: {
    height: unitWidth*50,
    width: unitWidth*50,
    borderRadius: unitWidth*25,
    borderWidth: unitWidth*1,
    borderColor: 'rgba(0,0,0,.8)'
  },
  arrow: {
    marginLeft: unitWidth*15,
    height: unitWidth*27,
    width: unitWidth*15,
  },
  content: {
    color: '#ED6059',
    fontSize: 14,
  },
  pickerTop: {
    width: unitWidth*750,
    height: unitWidth*71,
    borderColor: '#EAEAEA',
    borderBottomWidth: unitWidth*2,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: unitWidth*32,
    paddingRight: unitWidth*32,
    alignItems: 'center',
  },
  picker: {
    width: unitWidth*750,
    height: unitWidth*357,
    backgroundColor: '#fff',
  },
  check: {
    color: '#2A2A2A',
    fontSize: 14,
  },
  sure: {
    color: '#ED6059',
    fontSize: 14,
  },
  all: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39,39,39,.8)',
  },
  allOut: {
    position: 'absolute',
    height: 10000,
    bottom: unitWidth*428,
    left: 0,
    right: 0
  },
  allIn: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  box: {
    position: 'absolute',
    bottom: 0,
  },
  alertTitle: {
    marginTop: unitWidth*28,
    marginBottom: unitWidth*24,
    color: '#2a2a2a',
    fontSize: 14,
  },
  alertContent: {
    color: '#82828A',
    fontSize: 14,
  },
  lbtn: {
    overflow: 'hidden',
    borderRadius: unitWidth*31.5,
    marginRight: unitWidth*109,
    backgroundColor: '#ED6059',
    textAlign: 'center',
    width: unitWidth*182,
    height: unitWidth*63,
    lineHeight: unitWidth*63,
    color: '#fff',
    fontSize: 14,
  },
  rbtn: {
    color: '#000',
    fontSize: 14,
  },
  version: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39,39,39,.8)',
  },
  vAlert: {
    flexDirection: 'column',
    alignItems: 'center',
    width: unitWidth*584,
    height: unitWidth*719,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: unitWidth*20,
  },
  topImg: {
    marginTop: unitWidth*(-42),
    position: 'absolute',
  },
  topBg: {
    width: unitWidth*584,
    height: unitWidth*260,
  },
  topVersion: {
    width: unitWidth*490,
    marginTop: unitWidth*50,
  },
  flexVersion: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fl: {
    color: '#fff',
    fontSize: 14,
    marginRight: unitWidth*22,
  },
  fr: {
    overflow: 'hidden',
    backgroundColor: '#fff',
    color: '#EC6863',
    fontSize: 14,
    width: unitWidth*105,
    height: unitWidth*34,
    lineHeight: unitWidth*34,
    borderRadius: unitWidth*17,
    textAlign: 'center',
  },
  bVersion: {
    color: '#fff',
    fontSize: 14,
    marginTop: unitWidth*20,
  },
  cVersion: {
    width: unitWidth*472,
    marginTop: unitWidth*142,
    color: '#767676',
    fontSize: 14,
  },
  ccVersion: {
    color: '#767676',
    fontSize: 14,
  },
  cancel: {
    overflow: 'hidden',
    marginTop: unitWidth*43,
    width: unitWidth*56,
    height: unitWidth*56,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: unitWidth*28, 
    color: '#fff',
    fontSize: unitWidth*24,
    lineHeight: unitWidth*52,
    textAlign: 'center',
  }
});
