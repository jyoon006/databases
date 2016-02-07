var models = require('../models');
var bluebird = require('bluebird');

//models.messages.get/post, models.users.post

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        if(err){
          console.log(err);
        }
        res.json(results);
      });
    }, 
    post: function (req, res) {
      var query = [ req.body['userid'], req.body['text'], req.body['roomname'] ];
      models.messages.post(query, function(err, results){
        if(err){
          console.log(err);
          
        }
        res.json(results);
      });
       // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        if(err){
          console.log('error in the user get for controller ' + err);
          
        }
        
        res.json(results);
      });
    },
    post: function (req, res) {
      var query = [ req.body['username'] ];
      models.users.post(query, function(err, results){
        if(err){
          console.log(err);
          
        }
        
        res.json(results);
      });
    }
  }
};

