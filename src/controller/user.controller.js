const {createUser} = require('../service/user.service')
class UserController {
    async register(ctx,next){
        ctx.body='用户注册成功'
    }
    async login(ctx,next){  
        const{user_name,password}=ctx.request.body

        const res = await createUser(user_name,password)
        ctx.body=res
    }
} 
module.exports = new UserController()
