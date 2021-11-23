const  xss  = require('xss');
const sqldb = require('../mysql/index') 
class UserController {
    async register(ctx,next){ 
        let ctime=new Date().getTime()
        let sql = `insert into user (user_name, password,ctime) values ('${xss(ctx.request.body.user_name)}', '${xss(ctx.request.body.password)}','${xss(ctime)}')`;
        let res = await sqldb(sql)
       ctx.body={
           data:xss(ctx.request.body),
           code:0,
           message:'注册成功'
       }
    }
    async login(ctx,next){   
        let sql = 'SELECT * FROM user'
        let res=await sqldb(sql)
        let code;
        let message;
        res.forEach(item=>{
            if(item.user_name==xss(ctx.request.body.user_name)){
                if(item.password=xss(ctx.request.body.password)){
                    code=0
                    message='登陆成功'
                }else{
                  code=400
                    message='密码错误'
                }
            }else{
                    code=400
                    message='账号不存在'
            }
        }) 
        ctx.body={
            code:code,
            message:message
        }
    }
}
module.exports = new UserController()
