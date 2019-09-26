import http from './../../../base/api/public'
import querystring from 'querystring'
import jwt from 'jsonwebtoken'

let sysConfig = require('../../../../config/sysConfig');
let apiUrl = sysConfig.xcApiUrlPre;

//登录接口
export const login = (params) => {
  let loginRequest = querystring.stringify(params);
  //请求服务端的页面查询接口
  return http.requestPostForm(apiUrl + '/auth/userlogin', loginRequest);
};

//获取token
export const gettoken = () => {
  //请求服务端的页面查询接口
  return http.requestQuickGet(apiUrl + '/auth/userjwt');
};

/*//解析token
export const parsetoken = (params) => {
  let jwt = require('jsonwebtoken');
  //请求服务端的页面查询接口#解码(data.data代表的是解析的数据)
  let str = jwt.decode(params);
  //console.log(str);
  return str;
};*/


