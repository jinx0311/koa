class UserController {
    async register(ctx,next){
        ctx.body='用户注册成功'
    }
    async login(ctx,next){
        ctx.body="请你登录"
    }
}

module.exports = new UserController()