const Router = require('koa-router')
const { getArticleList} = require('../controller/article.controller') 
const router = new Router({ prefix:'/article'})
//注册接口
router.get('/getArticleList',getArticleList) 
module.exports=router