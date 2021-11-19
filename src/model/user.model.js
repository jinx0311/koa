 const { Sequelize,DataTypes} = require('sequelize');
 const  seq  = require('../db/seq')
 //创建模型(Model zd_user -> zd_users)
const User = seq.define('zd_user',{
    //id 会被sequelize自动创建，管理
    user_name:{
        type:DataTypes.STRING,
        allowNull:false,//不允许为空
        unique:true,//唯一的
        comment:'用户名，唯一',
    },
    password:{
        type:DataTypes.CHAR(64),//长度为64的char类型
        allowNull:false,//不允许为空 
        comment:'密码',
    },
    is_admin:{
        type:DataTypes.TINYINT,//长度为64的char类型
        allowNull:false,//不允许为空
        defaultValue:0,//默认值
        comment:'是否为管理员，0：不是（默认值）',
    },
})

User.sync({force: true})