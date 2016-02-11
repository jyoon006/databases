// YOUR CODE HERE:
//var request = require('request');
var app = {
  lastObjectId: 0,
  server: 'http://127.0.0.1:3000',
  username: window.location.search.replace(/(&|\?)username=/,""), 
  roomname: '',
  rooms: {},
  friends: {},
  escapeStr: function(str) {
    var $div = $('<div>');
    $div.append(document.createTextNode(str));
    return $div.html();
    },
  fetch: function(path){
    $.ajax({
      url: app.server + path,
      method: 'GET',
      success: function(data){
        console.log(data);
        if (data[0]) {
          for (var i = data.length - 1; i >= 0 ; i--) {
            if (data[i].userid > app.lastObjectId) {
              app.addMessage(data[i]);
              if(data[i].roomname){
                app.addRoom(data[i].roomname);
              }            
            }
          }
          app.lastObjectId = data[0].objectId;
        }
      },
      error: function(data){
        console.error('chatterbox: Failed to fetch messages. Error: ', data);
      }
    });
  },
  init: function() {
    $('#real-all').data('roomname','real-all');
    $('.chat').on('click','.submit', app.handleSubmit);
    $('#chats').on('click','.username', function() {
      var username = $(this).parent().data("username");
      app.addFriend(username);
    });
    $("#roomSelect").on('click','a', function(){
     app.showRoom($(this).text())});
    $('#send').keypress(function(e) {
      if(e.which == 13) {
        $(this).find('.submit').click();
      }
    });
    setInterval(function(){
      app.fetch('/classes/messages')
    }, 5000);
  },
  clearMessages: function(){
    $("#chats").children().hide();
  },
  send: function (message, path) {
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: app.server + path,
      method: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent. Data: ', data);
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message. Error: ', data);
      }
    });
  },
  addMessage: function (message){
      //attempt at blocking common xss:
    var escapedText = app.escapeStr(message.text);
    var escapedUsername = app.escapeStr(message.username);
    var escapedRoomName = app.escapeStr(message.roomname);
    // properly format message before appending to DOM
    if (escapedText[0] === '/') {
      app.parseCommand(escapedText);
    }
    var $username = $('<a href="#" class="username">' + escapedUsername +': </a>');
    var $text = $('<span>' + escapedText + '</span>');
    // var $timestamp = ('<span class="timestamp" title="' + message.createdAt + '"> · ' + jQuery.timeago(message.createdAt) + '</span>');
    var $message = $('<div>');
    $message.data('username', escapedUsername);
    if(escapedRoomName){
      $message.data('roomname', escapedRoomName);
    } else {
      $message.data('roomname', 'lobby');
    }
    $message.append($username).append($text);
    // append message to DOM
    $('#chats').prepend($message);
  },
  addRoom: function(roomName){
    if (!app.rooms[roomName]){
      $("#roomSelect").append("<li>");
      $("#roomSelect").children().last().html('<a href="#">' + roomName + '</a>');
      app.rooms[roomName] = true;
    }
  },
  handleSubmit: function() {
    app.send({
      username: app.username,
      text: $("#message").val(),
      roomname: app.roomname
    }, '/classes/messages');
    $('#message').val("");
    $('#message').blur();
  },
  showRoom: function(roomName){
    if (roomName === 'All Rooms') {
      $("#chats > div").show();
      app.roomname = '';
    } else {
      app.roomname = roomName;
      app.clearMessages();
      $("#chats > div").each(function(i, e){
        if($(e).data("roomname") === roomName){
          $(e).show();
        }
      });
    }
  },
  addFriend: function(username) {
    if(!app.friends[username]){
      app.friends[username] = true;
      $("#chats > div").each(function(i, e) {
        if (app.friends[$(e).data("username")]) {
          $(e).addClass("friend");
        }
      });
    }
  }, 
  parseCommand: function(commandString) {
    var arr = commandString.split(" ");
    var command = arr.shift();
    var param = arr.join(" ");
    if (command === '/room') {
      app.addRoom(param);
    }
  }
};

$(document).ready(function() {
  app.init();
});