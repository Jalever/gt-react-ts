import qs from 'query-string';
import Cookies from 'js-cookie';

const tokenkey = 'CONTENTCLOUD_TOKEN';
const API_SUCCESS_CODE = true;
const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
}

interface iOptions {
  headers: any
  method: string
  credentials: string
  body?: string
}

interface iRequest {
  url: string,
  params: string,
  method: string,
  jsonType: boolean,
  formType: boolean,
  isQueryPost: boolean,
  isNeedToken: boolean,
}

interface iResp {
  code: number,
  data: object,
  info: string,
  success: boolean
}

// 发送 fetch 请求
const request = (
  url: any,
  params: any,
  method = 'post',
  isQueryPost = false,
  jsonType = false,
  formType = false,
  isNeedToken = true,
) => {
  let options: any = {
    headers: {
      'Content-Type': jsonType
        ? 'application/json'
        : formType
          ? 'multipart/form-data'
          : 'application/x-www-form-urlencoded',
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
    // credentials: 'include'
  }

  let token = null;
  if (isNeedToken) token = Cookies.get(tokenkey);
  if (isNeedToken && !token) return;
  if (token) options.headers.token = token;


  if (method !== METHOD.GET && params) {
    options.body = jsonType ? JSON.stringify(params) : qs.stringify(params)
  }

  if (method === METHOD.GET) {
    params = { ...params } || {}
    for (let item in params) {
      if (typeof params[item] == 'object') {
        params[item] = params[item].join(',')
      }
    }

    params._ = new Date().getTime() // 添加 _ 属性,值为随机数,避免缓存
    url += '?' + qs.stringify(params)
  }

  // 发送 fetch 请求,返回一个 promise. (fetch 可以连续的调用 then,每个 then 的返回值会作为下一个 then 的回调函数的参数)
  return fetch(url, options).then(checkRespStatus)
}

// 获取服务器返回数据
const checkRespStatus = (respPromise: any) => {
  if (respPromise.status !== 200) {
    var { url, status, statusText } = respPromise;
    // todo alert(`${url}\n${status} ${statusText}`);
    return Promise.reject('Server error occurred');
  }

  // 服务端返回 json 字符串,所以调用 json() 来处理数据, then 方法接收的参数就是服务端返回的 json 数据
  return respPromise.json().then((resp: iResp) => {
    // 在 action 中,使用了 createAction 来包装 action,在里面进行异步 fetch 请求,从而调用这里,返回一个 promise
    // 需要返回 promise 是因为 redux-promise 中间件会自动处理这个 promise,如果是 resolve,会配合 redux-actions 将结果 dispatch 到 reducer 中;如果是 reject 则不会 dispatch
    return new Promise((resolve, reject) => {
      // 当 resp.code 为200的时候,则获取数据成功,并从数据中取出 data 为所需数据
      if (resp && resp.success === API_SUCCESS_CODE) {
        resolve(resp.data);
        // 当 resp.code 为403时,则为未登录,跳转到 login 页面
      } else {
        reject(resp);
      }
    });
  })
};

export default request
