var mysql = require('mysql'); 

var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'demo'
});

// 在数据池中进行会话操作
let query = function(sql,args){ 
  return new Promise((resolve,reject)=>{
   pool.getConnection(function(err, connection) {
     connection.query(sql,args,  (error, results, fields) => {
      if(error){ // 如果有错误就抛出
       reject(error)
      }else{
       resolve(results)
      }
       // 结束会话
       connection.release();
     })
   })
  })
 }
module.exports = query