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
三、项目的基本优化 1.自动重启服务
1.1.安装 nodemon 工具
npm i nodemon
1.2.编写 package.json 脚本
scripts": {
"dev":"nodemon ./src/main.js",
"test": "echo \"Error: no test specified\" && exit 1"
}
执行 npm run dev 启动服务 2.读取配置文件
安装 dotenv,读取根目录中的.env 文件，将配置写在 process.env 中
npm i dotenv
创建.env 文件
APP_PORT=8000
