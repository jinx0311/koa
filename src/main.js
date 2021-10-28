const Koa = require('koa');

const app = new Koa()
//中间件
app.use((ctx,next)=>{
    ctx.body='hello word'
})

app.listen(3000,()=>{
    console.log('helloword');
})