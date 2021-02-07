import qs from "query-string";
import request from "./request";

const METHOD = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
};
const API_PREFIX = "http://api.gtzdb.com/api/v4";

// url: any,
// params: any,
// method = 'post',
// isQueryPost = false,
// jsonType = false,
// formType = false,
// isNeedToken = true,
const getApi = (url?: string) => API_PREFIX + url;
export default {
  getData: (params?: any) => request(getApi('/login/get-token'), params, METHOD.GET, false, false, false, false),
  getPage: (params?: any) => request(getApi('/page-manage/get-page'), params, METHOD.POST, true)
};
