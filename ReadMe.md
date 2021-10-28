一、项目初始化
1.npm 初始化
npm init -y //生成 package.json 文件：记录项目的依赖
2.git 初始化
git init //生成.git 隐藏文件夹，git 的本地仓库 3.创建 ReadMe 文件
二、搭建项目 1.安装 koa 框架
npm i koa 2.编写最基本的 app
创建 src/main.js

const Koa = require('koa');

const app = new Koa()
//中间件
app.use((ctx,next)=>{
ctx.body='hello word'
})

app.listen(3000,()=>{
console.log('helloword');
}) 3.测试
在终端，使用'node src/main.js'启动服务
