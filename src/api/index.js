// 配置API接口地址
// var root = 'http://192.168.1.3:8081/RmarketShop' // 测试

// 引用axios
import axios from 'axios'

axios.defaults.withCredentials = true

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) { delete o[key] }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios (method, url, params, success, failure) {
  // 根据URL地址对象确定使用什么方式请求
  if (url.type === 'json') {
    if (params) {
      params = filterNull(params)
    }
  } else if (url.type === 'formData') {
    const _params = new URLSearchParams()
    if (params) {
      params = filterNull(params)
      // JSON 转换为 FormData
      Object.keys(params).forEach(key => _params.append(key, params[key]))
      params = _params
    }
  }

  axios({
    method: method,
    url: url.api,
    headers: url.type === 'json' ? { 'Content-Type': 'application/json; charset=UTF-8' } : url.type === 'formData' ? { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } : { 'Content-Type': 'multipart/form-data; charset=UTF-8' },
    data: method === 'POST' || method === 'PUT' ? params : null,
    dataType: 'json',
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: url.baseUrl,
    withCredentials: false
  }).then(function (res) {
    if (res.data.code === 0) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      }
    }
  }).catch(function (err) {
    throw new Error(err)
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}
