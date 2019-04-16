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
*/


CREATE TABLE Artists
(
  id int NOT NULL,
  artistName VARCHAR(100) NOT NULL,
  genre VARCHAR(100) NOT NULL,
  instrumentation VARCHAR(100) NOT NULL,
  numberOfMembers int NOT NULL,
  website VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  profileImage VARCHAR(100),
  PRIMARY KEY (id)
);

