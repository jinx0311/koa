const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();
const cors = require('koa2-cors');
const DB = require('./index'); // 这里引入上面创建的mysql.js文件
const app = new Koa();
// 打印请求连接
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
app.use(
    cors({
        origin: function (ctx) { //设置允许来自指定域名请求
            if (ctx.url === '/test') {
                return '*'; // 允许来自所有域名请求
            }
            return '*'; //只允许http://localhost:8080这个域名的请求
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
)
// 进入接口
// get方法取参数 ctx.request.query
// post方法取参数 ctx.request.body
// 向前端返回值 ctx.response.body
let dataObj = {
    status: 200,
    data: {},
    msg: '请求成功',
    success: true,
} 
app.use(router.routes());
app.use(router.allowedMethods());
// 设置端口号
app.listen(3000);
console.log('api start --- port 3000...'); 