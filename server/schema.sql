DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar(40) NOT NULL,
  PRIMARY KEY (ID)
);



CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL AUTO_INCREMENT, 
  userid int,
  text varchar(200) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (ID),
  FOREIGN KEY (userid) REFERENCES users (id)
);


-- our join will be a table with the unique message id which corresponds to each user id
-- SELECT * FROM messages WHERE roomname=inputroom INNER JOIN users ON messages.username=users.id
/* Create other tables and define schemas for them here! */

-- a table for all messages
-- a table for all users
-- rooms are the join tables
--  which contain references to the user and unique message id

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

