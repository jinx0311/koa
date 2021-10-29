const Koa = require('koa');
const userRouter = require('../router/user.route')
const app = new Koa()
 
//中间件
app. use(userRouter.routes()) //use必须接收一个函数做为中间件 
    
module.exports=app