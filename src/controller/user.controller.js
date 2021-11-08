class UserController {
    async register(ctx,next){
        ctx.body='用户注册成功'
    }
    async login(ctx,next){
        //1.获取数据
        console.log(ctx.request.body);
        //2.操作数据库

        //3.返回结果
        ctx.body=ctx.request.body
    }
}

module.export = new UserController()