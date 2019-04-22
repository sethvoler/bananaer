function upload (file, token, obj) {
  let body = new FormData();
  body.append('file',file);
  Object.keys(obj).map((item) => {
    body.append(item, obj[item]);
  })
  let xhr = new XMLHttpRequest();
  let url = 'http://47.92.83.197:8088/user/completeuserinfo';
  xhr.open('POST',url);
  xhr.setRequestHeader('Content-Type','multipart/form-data;'); 
  xhr.setRequestHeader('authorization',token);
  // 发送请求
  xhr.send(body);   

// 上传过成功的返回
  xhr.onload = ()=>{
    // 状态码如果不等于200就代表错误
    if (xhr.status !== 200){
        console.log(xhr.responseText);
    }
    if (!xhr.responseText){
        console.log(xhr.responseText);
    }
  }
}
export default upload;