var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.net.createConnection({
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

exports.dbHandler = connection.query(param, function(err, result, cb) {
  if(error) {
    console.log('error with query :' + err.stack);
    return;
  }
  cb(result);
});
//set up connection vars
//initiate connect
//connect accepts error callback

//need to run a query
//query function will accept an input

//if we are posting

//connection.query
//handle both adding and and retrieving from the database

//must accept sql syntax
