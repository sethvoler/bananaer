import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, View, Keyboard, Image, TouchableOpacity} from 'react-native';
import {unitWidth, unitHeight, fontscale}from '../util/AdapterUtil';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationUtil from '../navigator/NavigationUtil';
import {connect} from 'react-redux';
import Api from '../expand/api';
import  ImagePicker from 'react-native-image-picker'; //第三方相机
import actions from '../action';
import Upload from '../util/upLoadUtil';


var options = {
  //底部弹出框选项
  title:'请选择',
  cancelButtonTitle:'取消',
  takePhotoButtonTitle:'拍照',
  chooseFromLibraryButtonTitle:'选择相册',
  quality:0.75,
  allowsEditing:true,
  noData:false,
  storageOptions: {
      skipBackup: true,
      path:'images'
  }
}

type Props = {};
class EditMsgPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      murl: require('../res/image/m.jpg'),
      wurl: require('../res/image/w.jpg'),
      get: require('../res/image/hg.jpg'),
      no: require('../res/image/sg.jpg'),
      nickName: '',
      sex: 0,
      shortDes: '',
      headPic: '',
    }
  }
  static navigationOptions = {
    header: null,
  }
  componentDidMount() {
    this.setState({
      nickName: this.props.user.nickName,
      sex: this.props.user.sex,
      shortDes: this.props.user.shortDes,
      headPic: this.props.user.headPic,
    })
  }

  _select(sex) {
    this.setState({
      sex: sex,
    })
  } 

  changeMsg () {
    let _ = this;
    let formData = new FormData()
    formData.append("nickName",this.state.nickName);
    formData.append("sex",this.state.sex);
    formData.append("shortDes",this.state.shortDes); 
    Api.changeMsg( _.props.token,formData, data => {
      _.getUserInfo();
    }, err => {})
  }
  getUserInfo () {
    let _ = this;
    Api.userInfo({
      token: _.props.token,
    }, (data) => {
      AsyncStorage.setItem('qrimg', data.qrimg, error => {
        error && console.log(error.toString());
      })
      _.props.getPhone(data.user);
      console.log(data.user.headPic)
      this.setState({
        nickName: data.user.nickName,
        sex: data.user.sex,
        shortDes: data.user.shortDes,
        headPic: data.user.headPic,
      })
    }, (err) => {alert(err)})
  }
  cameraAction() {
    ImagePicker.showImagePicker(options, (response) => {
    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let t = Date.now()
        let file = {uri: response.uri, type: 'multipart/form-data', name: t+'.jpg'}
        let obj = {
          "nickName": this.state.nickName,
          "sex": this.state.sex,
          "shortDes": this.state.shortDes,
        }
        Upload(file,this.props.token,obj)
        this.setState({
          nickName: this.state.nickName,
          sex: this.state.sex,
          shortDes: this.state.shortDes,
          headPic: response.uri
        })
        
      }
    });
  }
  changeNickName (text) {
    this.setState({
      nickName: text
    })
  }
  changeShortDes (text) {
    this.setState({
      shortDes: text
    })
  }
  
  render() {
    console.log('头像修改页面：', this.props.user.headPic)
    return (
      <View style={styles.wrap}>
        <Text style={styles.title}>个人信息</Text>
        <Image source={{uri: this.state.headPic}} style={styles.img} />
        <Text style={styles.change}
          onPress={() => {
           this.cameraAction();
          }}>点击修改头像</Text>
        <View style={styles.line}></View>
        <View style={styles.list}>
          <Text style={styles.l}>昵称</Text>
            <TextInput 
              placeholder={'请输入昵称'} 
              defaultValue={this.state.nickName}
              onChangeText={(text) => {
                this.changeNickName(text)
              }}
              onSubmitEditing={Keyboard.dismiss}
              style={styles.input}/>
        </View>
        <View style={styles.list}>
          <Text style={styles.l}>性别</Text>
          <View style={styles.r}>
          <TouchableOpacity onPress={() => {this._select(0)}}>
            <View style={styles.inn}>
              <Image source={this.state.sex === 0 ? this.state.get : this.state.no} style={styles.g}></Image>
              <Text style={styles.sex}>男</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this._select(1)}}>
            <View style={styles.inn}>
              <Image source={this.state.sex === 1 ? this.state.get : this.state.no} style={styles.g}></Image>
              <Text style={styles.sex}>女</Text>
            </View>
          </TouchableOpacity> 
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.l}>个性签名</Text>
          <TextInput placeholder={'这家伙很懒，什么都美留下～'} 
          defaultValue={this.state.shortDes}
          onChangeText={(text)=>{
            this.changeShortDes(text);
          }}
          style={styles.input}/>
        </View>
        <Text style={this.state.nickName != '' && this.state.shortDes != '' ? styles.sure1: styles.sure} onPress={() => {


                this.changeMsg()
                NavigationUtil.goToPage({
                  navigation: this.props.navigation
                }, 'IndexPage');


          }}>完成</Text>
      </View>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user.user,
  token: state.token.token,
});
const mapDispatchToProps = dispatch => ({
  logIn: status => dispatch(actions.logIn(status)),
  getPhone: user => dispatch(actions.getPhone(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(EditMsgPage);

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingLeft: unitWidth*44,
    paddingRight: unitWidth*44,
  },
  title: {
    fontSize: 14,
    color: '#2A2A2A',
    marginTop: unitHeight*88,
  },
  img: {
    marginTop: unitHeight*88,
    width: unitWidth*190,
    height: unitWidth*190,
  },
  change: {
    fontSize: 14,
    color: '#A09EA4',
  },
  line: {
    marginTop: unitWidth*110,
    width: unitWidth*750,
    height: unitWidth*9,
    backgroundColor: '#eee',
  },
  list: {
    marginTop: unitWidth*52,
    width: unitWidth*662,
    flexDirection: 'row',
    alignItems: 'center',
  },
  l: {
    width: unitWidth*204,
    fontSize: 14,
    color: '#2A2A2A',
  },
  r: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  g: {
    width: unitWidth*33,
    height: unitWidth*33,
  },
  sex: {
    marginLeft: unitWidth*30,
    marginRight: unitWidth*62,
    fontSize: 14,
    color: '#A09EA4',
  },
  input: {
    width: unitWidth*458,
    fontSize: 14,
    color: '#A09EA4',
  },
  sure: {
    overflow: 'hidden',
    width: unitWidth*662,
    height: unitWidth*85,
    borderRadius: unitWidth*42.5,
    backgroundColor: '#CECECE',
    marginTop: unitWidth*127,
    textAlign: 'center',
    lineHeight: unitWidth*85,
    color: '#fff',
    fontSize: 14,
  },
  sure1: {
    overflow: 'hidden',
    width: unitWidth*662,
    height: unitWidth*85,
    borderRadius: unitWidth*42.5,
    backgroundColor: '#FD5251',
    marginTop: unitWidth*127,
    textAlign: 'center',
    lineHeight: unitWidth*85,
    color: '#fff',
    fontSize: 14,
  },
});