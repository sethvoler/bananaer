import Net from '../../util/NetUtils';

const BASE = 'http://47.92.83.197:8088';

const apis = {
  post: {
    sms: '/common/sms',
    register: '/user/register',
    login: '/user/login',
    changemobile: '/user/changemobile',
    like: '/media/comment/like',
    likes: '/album/comment/like',
    imgsLike: '/album/like',
    createComment: '/media/comment/create',
    createComments: '/album/comment/create',
    changeMsg: '/user/completeuserinfo',
  },
  get: {
    settings: '/common/settings',
    userInfo: '/user/userinfo',
    mediaList: '/media/list',
    albumList: '/album/list',
    imgsMsg: '/album/single',
    imgList: '/album/img/list',
    mediaList: '/media/list',
    commentList: '/media/comment/list',
    imgsCommentList: '/album/comment/list',
    albumList: '/album/list',
    singleMedia: '/media/single',
    banner: '/banner/list',
    mediaSortList: '/media/homepage/video/list',
  }
};

export default api = {
  sms: function(params,callback,errFn) {
    Net.post(BASE+apis.post.sms,params,callback,errFn);
  },
  imgsLike: function(params,callback,errFn) {
    Net.post(BASE+apis.post.imgsLike,params,callback,errFn);
  },
  changeMsg: function(token,formData,callback,errFn) {
    Net.postFormData(BASE+apis.post.changeMsg,token,formData,callback,errFn);
  },
  register: function (params,callback,errFn) {
    Net.postJson(BASE+apis.post.register,params,callback,errFn);
  },
  like: function (params,callback,errFn) {
    Net.post(BASE+apis.post.like,params,callback,errFn);
  },
  likes: function (params,callback,errFn) {
    Net.post(BASE+apis.post.likes,params,callback,errFn);
  },
  createComment: function (params,callback,errFn) {
    Net.post(BASE+apis.post.createComment,params,callback,errFn);
  },
  createComments: function (params,callback,errFn) {
    Net.post(BASE+apis.post.createComments,params,callback,errFn);
  },
  login: function(params,callback,errFn) {
    Net.post(BASE+apis.post.login,params,callback,errFn);
  },
  changemobile: function(params,callback,errFn) {
    Net.post(BASE+apis.post.changemobile,params,callback,errFn);
  },
  imgsMsg: function(params,callback,errFn) {
    Net.get(BASE+apis.get.imgsMsg,params,callback,errFn);
  },
  imgsCommentList: function(params,callback,errFn) {
    Net.get(BASE+apis.get.imgsCommentList,params,callback,errFn);
  },
  mediaSortList: function(params,callback,errFn) {
    Net.get(BASE+apis.get.mediaSortList,params,callback,errFn);
  },
  userInfo: function(params,callback,errFn) {
    Net.get(BASE+apis.get.userInfo,params,callback,errFn);
  },
  singleMedia: function(params,callback,errFn) {
    Net.get(BASE+apis.get.singleMedia,params,callback,errFn);
  },
  banner: function(params,callback,errFn) {
    Net.get(BASE+apis.get.banner,params,callback,errFn);
  },
  settings: function(params,callback,errFn) {
    Net.get(BASE+apis.get.settings,params,callback,errFn);
  },
  mediaList: function(params,callback,errFn) {
    Net.get(BASE+apis.get.mediaList,params,callback,errFn);
  },
  albumList: function(params,callback,errFn) {
    Net.get(BASE+apis.get.albumList,params,callback,errFn);
  },
  imgList: function(params,callback,errFn) {
    Net.get(BASE+apis.get.imgList,params,callback,errFn);
  },
  mediaList: function(params,callback,errFn) {
    Net.get(BASE+apis.get.mediaList,params,callback,errFn);
  },
  commentList: function(params,callback,errFn) {
    Net.get(BASE+apis.get.commentList,params,callback,errFn);
  },
}