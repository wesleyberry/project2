/*### Schema

DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

DROP DATABASE IF EXISTS gigeasy;
CREATE DATABASE gigeasy;

USE gigeasy;

CREATE TABLE venues
(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  website VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE artists
(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  website VARCHAR(100),
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

CREATE TABLE users (
id INTEGER AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
role VARCHAR(100) NOT NULL,
PRIMARY KEY(id)
);


*/