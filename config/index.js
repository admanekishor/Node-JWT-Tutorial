const config = require('dbConfig');
var mysql = require('mysql');
const dbConfig = require('./db.config');

var con = mysql.createConnection({
  host: config.HOST,
  user: config.USER,
  password: config.PASSWORD
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});