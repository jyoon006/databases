var models = require('../models');
var bluebird = require('bluebird');

//models.messages.get/post, models.users.post

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    //normal http get stuff
    //then feed the json to the model.messages.get

    //request.on('data', function(err, data)).request('end', function() {

      //})
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

