var models = require('../models');
var bluebird = require('bluebird');

//models.messages.get/post, models.users.post

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, results){
        if(err){
          console.log('error in the post for controller');
          return;
        }
        res.json(results);
      })
    }, 
    post: function (req, res) {

      models.messages.post(query, function(err, results){
        if(err){
          console.log('error in the post for controller');
          return;
        }
        res.json(results);
      })
       // a function which handles posting a message to the database
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results){
        if(err){
          console.log('error in the post for controller');
          return;
        }
        res.json(results);
      })
    },
    post: function (req, res) {

      models.users.post(query, function(err, results){
        if(err){
          console.log('error in the post for controller');
          return;
        }
        res.json(results);
      })
    }
  }
};

