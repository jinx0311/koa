class UserController {
    async register(ctx,next){
        ctx.body='用户注册成功'
    }
    async login(ctx,next){ 
        ctx.body=ctx.request.body
    }
}

module.export = new UserController()