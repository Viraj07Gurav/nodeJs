const mysql=require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb",
});

db.connect((err)=>{
    if(err){
        console.log("Mysql connection error",err);
        return;
    }
    else{
        console.log("connection succeefull");
    }
});

module.exports=db;
