var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryStr = 'select messages.userid, messages.text, messages.roomname, users.username from messages \
      left outer join users on messages.userid = users.id \
      order by messages.id desc';

      db.query(queryStr, function(err, results) {
        if(err){
          console.log('messages get models: ' + err);
          return;
         }
         console.dir(results);
        callback(results);
      });
    }, // a function which produces all 
    post: function (data, callback) {
      // var query = [ req.body['userid'], req.body['text'], req.body['roomname'] ];
      var queryStr = 'insert into messages (userid, text, roomname) \
      values(?, ?, ?)';
      console.log('post data:' + data);
      db.query(queryStr, data, function(err, results){
        if(err){
          console.log('error with the messages post connection');
          return;
        }
        callback(results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        if(err){
          console.log('error with the users get connection');
          return;
         }
        callback(results);
        
      });
    },
    post: function (data, callback) {
      var queryStr = "insert into users(username) values (?)";
      db.query(queryStr, data, function(err, results){
        if(err){
          console.log('users post models: ' + err);
          return;
        }
        callback(results);

      });
    }
  }
};