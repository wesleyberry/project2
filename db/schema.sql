### Schema

DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS gigeasy;
CREATE DATABASE gigeasy;

USE gigeasy;

CREATE TABLE users (
  id INTEGER AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(100) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE venues
(
  id int NOT NULL AUTO_INCREMENT,
  venueName VARCHAR(255) NOT NULL,
  street_address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zipCode VARCHAR(255),
  phone VARCHAR(255),
  email VARCHAR(255),
  website VARCHAR(255),
  image VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE artists
(
  id int NOT NULL AUTO_INCREMENT,
  artistName VARCHAR(255) NOT NULL,
  genre VARCHAR(255),
  instrumentation VARCHAR(255),
  numberOfMembers VARCHAR(255),
  email VARCHAR(255),
  phone VARCHAR(255),
  profileImage VARCHAR(255),
  website VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE gigs
(
  id int NOT NULL AUTO_INCREMENT,
  venue_id int NOT NULL,
  artist_id int NOT NULL,
  date DATETIME,
  PRIMARY KEY (id),
  FOREIGN KEY (venue_id) REFERENCES venues(id),
  FOREIGN KEY (artist_id) REFERENCES artists(id)
);



*/