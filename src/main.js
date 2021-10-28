const Koa = require('koa');

const {APP_PORT} = require('./config/config.default')


const app = new Koa()
//中间件
app.use((ctx,next)=>{
    ctx.body='hello wwword'
})

app.listen(APP_PORT,()=>{
    console.log(APP_PORT);
})