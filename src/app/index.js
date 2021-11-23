const Koa = require('koa');
const koaBody = require('koa-body');
const cors = require('koa2-cors');
const userRouter = require('../router/user.route')
const articleRouter =require('../router/article.route') 
const app = new Koa()
app.use(cors())
app.use(koaBody()) 
//中间件
app.use(userRouter.routes()) //use必须接收一个函数做为中间件 
app.use(articleRouter.routes())
module.exports=app