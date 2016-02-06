DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int PRIMARY KEY, 
  body varchar(200),
  roomname int REFERENCES rooms(id),
  username int REFERENCES users(id)
);

CREATE TABLE users (
  id int PRIMARY KEY,
  user varchar(200)
);

CREATE TABLE rooms (
  id int PRIMARY KEY,
  room varchar(200)
);
/* Create other tables and define schemas for them here! */

-- a table for all messages
-- a table for all users
-- rooms are the join tables
--  which contain references to the user and unique message id

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

