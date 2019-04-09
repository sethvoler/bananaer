import Net from '../../util/NetUtils';

const BASE = 'http://47.92.83.197:8088';

const apis = {
  post: {
    sms: '/common/sms',
    register: '/user/register',
    login: '/user/login',
    changemobile: '/user/changemobile',
    like: '/media/comment/like',
    createComment: '/media/comment/create',
  },
  get: {
    settings: '/common/settings',
    mediaList: '/media/list',
    albumList: '/album/list',
    imgList: '/album/img/list',
    mediaList: '/media/list',
    media: '/media/single',
    commentList: '/media/comment/list',
  }
};

export default api = {
  sms: function(params,callback,errFn) {
    Net.post(BASE+apis.post.sms,params,callback,errFn);
  },
  register: function (params,callback,errFn) {
    Net.postJson(BASE+apis.post.register,params,callback,errFn);
  },
  like: function (params,callback,errFn) {
    Net.post(BASE+apis.post.like,params,callback,errFn);
  },
  createComment: function (params,callback,errFn) {
    Net.post(BASE+apis.post.createComment,params,callback,errFn);
  },
  login: function(params,callback,errFn) {
    Net.post(BASE+apis.post.login,params,callback,errFn);
  },
  changemobile: function(params,callback,errFn) {
    Net.post(BASE+apis.post.changemobile,params,callback,errFn);
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
  media: function(params,callback,errFn) {
    Net.get(BASE+apis.get.media,params,callback,errFn);
  },
  commentList: function(params,callback,errFn) {
    Net.get(BASE+apis.get.commentList,params,callback,errFn);
  },
}