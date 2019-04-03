import React,{Component} from 'react';   

/**
 * 网络请求的工具类
 */
export default class NetUtils extends Component{
  constructor(props){
    super(props); 
    this.state = {
      isModal: false,
      msg: 'network error'
    }
  }
  /**
   * 普通的get请求 
   * @param {*} url 地址
   * @param {*} params  参数
   * @param {*} callback  成功后的回调
   */
  static get(url,params,callback,errFn){
    let _=this;
    fetch(url,{
      method:'GET',
      body:params
      })
      .then((response) => {
        //if(response.ok){
          return response.json();
        // } else {
        //   errFn('输入错误')
        // }
      })
      .then((json) => {
        //根据接口规范在此判断是否成功，成功后则回调
        if(json.code === 200){
            callback(json);
        }else{
          errFn(json.msg)
        }
      })
      .catch(error => {
        errFn('网络故障')
      });
  };
  /**
   * post key-value 形式 hader为'Content-Type': 'application/x-www-form-urlencoded'
   * @param {*} url 
   * @param {*} params 
   * @param {*} callback 
   */
    static post(url,params,callback,errFn){
      //更改json为&连接字符串
      var newParams = this.toParams(params);
      let _=this;
      fetch(url,{
        method:'POST',
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'//key-value形式
        },
        body:newParams
      })
      .then((response) => {
        //if(response.ok){
          return response.json();
        // } else {
        //   errFn('输入错误')
        // }
      })
      .then((json) => {
        if(json.code === 200){
          callback(json);
        }else{
          errFn(json.msg)
        }
    }).catch(error => {
      errFn('网络故障')
    });
  };
  /**
   * post json形式  header为'Content-Type': 'application/json'
   * @param {*} url 
   * @param {*} jsonObj 
   * @param {*} callback 
   */
  static postJson(url,jsonObj,callback,errFn){
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body:JSON.stringify(jsonObj),
    })
    .then((response) => {
      //if(response.ok){
        return response.json();
      // } else {
      //   errFn('输入错误')
      // }
    })
    .then((json) => {
        if(json.code === 200){
          callback(json);
        }else{
          errFn(json.msg)
        }
    }).catch(error => {
      errFn('网络故障')
    });
  };
  /**
   * 获取当前系统时间 yyyyMMddHHmmss
   */
  static getCurrentDate(){
    var space = "";
    var dates = new Date();
    var years = dates.getFullYear();
    var months = dates.getMonth()+1;
    if(months<10){
        months = "0"+months;
    }

    var days = dates.getDate();
    if(days<10){
        days = "0"+days;
    }

    var hours = dates.getHours();
    if(hours<10){
        hours = "0"+hours;
    }

    var mins =dates.getMinutes(); 
    if(mins<10){
        mins = "0"+mins;
    }
    var secs = dates.getSeconds();
      if(secs<10){
          secs = "0"+secs;
      }
      var time = years+space+months+space+days+space+hours+space+mins+space+secs;
      return time;
    };
  static toParams(param) {
    var result = ''
    for (let name in param) {
      if (typeof param[name] != 'function') {
        result += "&" + name + "=" + encodeURI(param[name]);
      }
    }
    return result.substring(1)
  }
}