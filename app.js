/**
 * Created by Administrator on 2017/9/11.
 */
//项目主程序
//1:加载相关模块 http express mysql qs
const http=require("http");
const express=require("express");
const mysql=require("mysql");
const qs=require("qs");

//2:创建连接池  25
var pool=mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"freshUser",
    port:3306,
    connectionLimit:25
});

//3:创建express对象
var app=express();
//4:创建服务器对象
var server=http.createServer(app);
//5:绑定监听端口
server.listen(8081);
//6:处理所有静态文件
app.use(express.static("public"));
//7:用户注册
app.get("/myRegister",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    var umail=req.query.umail;
    var uphone=req.query.uphone;
    pool.getConnection((err,conn)=>{
        if(err)throw err;
        var sql="INSERT INTO userList VALUES(null,?,?,?,?)";
        conn.query(sql,[uname,upwd,uphone,umail],(err,result)=>{
            if(err) throw err;
            res.json({code:1,"msg":"注册成功"});
            conn.release();
        })
    });
});