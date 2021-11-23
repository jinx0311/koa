const sqldb = require('../mysql/index')
class UserController {
    async register(ctx,next){
        console.log(ctx.request.body)
        let sql = `insert into test (user_name, password) values ('${ctx.request.body.user_name}', '${ctx.request.body.password}')`;
        let res = await sqldb(sql)
       ctx.body={
           data:ctx.request.body,
           code:0,
           message:'注册成功'
       }
    }
    async login(ctx,next){   
        let sql = 'SELECT * FROM test'
        let res=await sqldb(sql)
        let code;
        let message;
        res.forEach(item=>{
            if(item.user_name==ctx.request.body.user_name){
                if(item.password=ctx.request.body.password){
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
