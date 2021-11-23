const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const userRouter = require('../router/user.route')
const mysql = require('../mysql')
const app = new Koa()
app.use(cors())
app.use(koaBody())
// app.use(async (ctx) => {
//     console.log(mysql)
//     let data = await mysql(1,2)
//     ctx.body = {
//         "code": 1,
//         "data": data,
//         "mesg": 'ok'
//     }
    
// })
//中间件
app.use(userRouter.routes()) //use必须接收一个函数做为中间件 
    
module.exports=app