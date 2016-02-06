var db = require('../db');

//db.dbHandler
//inside of those function, reference the database connection stuff

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    //takes the get request
    //turn it into a proper sql syntax
    //and then feeds that syntax to the database function
    //and handles a callback with the result
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

