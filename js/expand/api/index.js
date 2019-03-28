import Net from '../../util/NetUtils';

const BASE = 'http://47.92.83.197:8088';

const apis = {
  post: {
    sms: '/common/sms',
    register: '/user/register',
    login: '/user/login',
    changemobile: '/user/changemobile',
  },
  get: {}
};

export default api = {
  sms: function(params,callback) {
    Net.post(BASE+apis.post.sms,params,callback);
  },
  register: function (params,callback) {
    Net.postJson(BASE+apis.post.register,params,callback);
  },
  login: function(params,callback) {
    Net.post(BASE+apis.post.login,params,callback);
  },
  changemobile: function(params,callback) {
    Net.post(BASE+apis.post.changemobile,params,callback);
  },
}