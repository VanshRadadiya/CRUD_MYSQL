var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database: "node"
});

con.connect();

// var insert_q = "insert into user(name,email,password)values('user','user@gmail.com','user@123')";
var select_q = "select * from user";

con.query(select_q,function(error,result,index){
    if(error) throw error;
    console.log(result);
})