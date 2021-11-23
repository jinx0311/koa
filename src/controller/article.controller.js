const  xss  = require('xss');
const sqldb = require('../mysql/index') 
class ArticleController {
    async getArticleList(ctx,next){ //查询文章列表
        let ctime=new Date().getTime()
        let sql = 'SELECT * FROM article'
        let res = await sqldb(sql)
      
       ctx.body={
           data:res,
           code:0,
           message:''
       }
    } 
}
module.exports = new ArticleController()
