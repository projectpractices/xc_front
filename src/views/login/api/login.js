import http from './../../../base/api/public'
import querystring from 'querystring'

let sysConfig = require('../../../../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

//登录接口
export const login = (params) => {
  let loginRequest = querystring.stringify(params);
  //请求服务端的页面查询接口
  return http.requestPostForm(apiUrl + '/auth/userlogin', loginRequest);
};


