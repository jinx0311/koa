import axios from 'axios'
 // axios.defaults.baseURL = 'http://admin/api/',  //写死

 let baseUrl="";
//console.log(process.env.NODE_ENV,'-----')
 if (process.env.NODE_ENV === "development") {
    // baseUrl = "http://192.168.11.237:7005/ad-admin";
    baseUrl = "http://localhost:3000";
} else if (process.env.NODE_ENV === "production") {
    baseUrl = "http://admin-api-test.tianzhuobj.com";
} else if (process.env.NODE_ENV === "test") {

}

//请求超时时间
axios.defaults.timeout = 5000


axios.defaults.headers.post['Content-Type']='application/json'
//请求拦截
axios.interceptors.request.use(
    config => {
        config.headers.Authorization  = 'Bearer '+localStorage.token;
        return config
    },
    error => {
        return Promise.error(error)
    }
)

//响应拦截器
axios.interceptors.response.use(
    response => {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if(response.status === 200){
            return Promise.resolve(response)
        } else {
            return Promise.reject(response)
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    error => {
        console.log(error)
        if(error.response.status){
            switch (error.response.status){
                // 401: 未登录
                // 未登录则跳转登录页面，并携带当前页面的路径
                // 在登录成功后返回当前页面，这一步需要在登录页操作
                //case 401:
                case 404:
                  // this.$message('网络请求不存在');
                    break
                case 400:
                  // this.$message('服务器繁忙');
                    break
                default:
                  // this.$message('其它提示');
            }
            return Promise.reject(error.response)
        }
    }
)
/**
  * post方法，对应post请求
  * @param {String} url [请求的url地址]
  * @param {Object} params [请求时携带的参数]
  */
 export function post(url,params){

    return new Promise((resolve,reject)=>{
        axios.post(baseUrl+url, params).then(res=>{ //baocunshiyixia
       //    console.log('res',res)
            resolve(res.data)
        }).catch(err => {
           console.log('err:',err)
            reject(err.data)
        })
    })
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */

 export function get(url,params=''){
     return new Promise((resolve,reject)=>{
         axios.get(baseUrl+url,{
             params
         }).then(res=>{
             resolve(res.data)
         }).catch(err => {
             reject(err.data)
         })
     })
 }