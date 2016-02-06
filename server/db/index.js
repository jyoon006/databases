var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'chat'
});

connection.connect(function(err){
  if(err){
    console.log('error with the connection in the db file' + err.stack);
    return;
  }
  console.log('connected' + connection.threadId);
});

module.exports = connection;
