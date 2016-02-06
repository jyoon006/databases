var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select id, text, roomname from messages \
      left outer join users on (messages.userid = userid) \
      order by message.id desc';

      db.query(queryStr, function(err, results) {
        callback(results);
      });
    }, // a function which produces all 
    post: function (data, callback) {
      var quertyStr = 'insert into messages (text, roomname, username) \
      values(?, (select id from users where username = ? limit 1), ?)';
      db.connection.query(queryStr, params, function(err, result){
         if(err){
            console.log('error with the post connection');
            return;
         }
         callback(result);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var quertyStr = 'SELECT * FROM users';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    post: function (data, callback) {
      var queryStr = 'insert into users(username) values (?)';
      db.query(queryStr, params, function(err, result){
         if(err){
            console.log('error with the post connection');
            return;
         }
         callback(result);
      });
    }
  }
};

