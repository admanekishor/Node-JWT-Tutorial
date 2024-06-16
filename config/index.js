var mysql = require('mysql');
const dbConfig = require('./db.config');

var conn  = mysql.createPool({
    connectionLimit     : 10,
    host                : dbConfig.HOST,
    user                : dbConfig.USER,
    password            : dbConfig.PASSWORD,
    database            : dbConfig.DB,
    waitForConnections  : true,
    connectionLimit     : 10,
    queueLimit          : 0
  });
  
  conn.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('Db is connected - The solution is: ', results[0].solution);
});


module.exports = conn;