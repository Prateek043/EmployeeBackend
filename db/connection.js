const mysql=require('mysql');

       const con=  mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"",
            database:"employee_db"
        })

module.exports=con;