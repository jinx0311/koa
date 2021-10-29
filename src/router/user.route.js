const Router = require('koa-router')
const { register,login} = require('../controller/user.controller') 
const router = new Router({ prefix:'/users'})
//注册接口
router.get('/register',register)
router.get('/login',login)
module.exports=router