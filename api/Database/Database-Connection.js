const mysql = require('mysql');

const db_connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bincomtest"
});

db_connection.connect(function(err) 
{
  if (err) throw err;
  console.log("Connected!");
});

module.exports = db_connection