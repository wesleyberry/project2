DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;


SELECT artists.name, venues.name, gigs.date
FROM gigs
LEFT OUTER JOIN artists ON gigs.artist_id = artists.id
LEFT OUTER JOIN venues ON gigs.venue_id = venues.id
WHERE venues.name = "B.D. Riley's Irish Pub";