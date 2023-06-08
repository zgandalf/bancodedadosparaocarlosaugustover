const mysql = require('mysql2');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password: '',
  port :3307,
  database : 'caua'  
});
connection.connect();

console.log("conectado!");


let query = "update usuario set senha = 'ben10' where codigo =3;";
connection.query(query, function(error,results,fields){
})
connection.end();