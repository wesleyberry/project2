INSERT INTO venues (name, street_address, city, state, zipcode, email, website, sound_system_info, seating_capacity ) 
            VALUES ( "Hole in the Wall",
                     "2538 Guadalupe St.", "Austin", "TX", "78705", "HoleInTheWall@UTBootCamp.edu",
                     "https://www.holeinthewallaustin.com/",
                     "Full system, 4 monitors.  Engineer provided",
                     50 );
INSERT INTO venues (name, street_address, city, state, zipcode, email, sound_system_info, seating_capacity )
            VALUES ( "Emo's",
                     "2015 E Riverside Dr.", "Austin", "TX", "78741", "Emos@UTBootCamp.edu",
                     "https://www.emosaustin.com/",
                     "Full system, 4 monitors.  Engineer provided",
                     60 );
INSERT INTO venues (name, street_address, city, state, zipcode, email, sound_system_info, seating_capacity )
            VALUES ( "Antone's Nightclub",
                     "305 E 5th St.", "Austin", "TX", "78701", "Antones@UTBootCamp.edu",
                     "https://www.antonesnightclub.com/",
                     "Full system, 2 monitors.  Engineer provided",
                     45 );
INSERT INTO venues (name, street_address, city, state, zipcode, email, sound_system_info, seating_capacity )
            VALUES ( "B.D. Riley's Irish Pub",
                     "204 E 6th St.", "Austin", "TX", "78701", "BDRileys@UTBootCamp.edu",
                     "https://bdrileys.com/",
                     "Full system, 2 monitors.  No engineer provided",
                     30 );
INSERT INTO venues (name, street_address, city, state, zipcode, email, sound_system_info, seating_capacity )
            VALUES ( "Central Market North",
                     "401 N. Lamar blvd. 78756", "Austin", "TX", "78701", "CentrlMarketNorth@UTBootCamp.edu",
                     "https://centralmarket.com/",
                     "Full system, 2 monitors.  Engineer provided",
                     100 );

INSERT INTO artists (name, email, num_people_in_band, music_genre )
            VALUES  ( "Javelin Boot", "javelinBoot@UTBootCamp.edu", 3, "Progressive Rock" );
INSERT INTO artists (name, email, num_people_in_band, music_genre )
            VALUES  ( "The Splinters", "theSplinters@UTBootCamp.edu", 5, "Classic Rock Cover" );
INSERT INTO artists (name, email, num_people_in_band, music_genre )
            VALUES  ( "Kaliedescope Eyes", "kaliedescopeEyes@UTBootCamp.edu", 4, "Beatles Cover Band" );
INSERT INTO artists (name, email, num_people_in_band, music_genre )
            VALUES  ( "Stones ATX", "stonesATX@UTBootCamp.edu", 5, "Rolling Stones Cover Band" );

INSERT INTO gigs   ( venue_id, artist_id, date )
            VALUES ( 1, 2, '2019-04-19 20:00:00' );
INSERT INTO gigs   ( venue_id, artist_id, date )
            VALUES ( 1, 4, '2019-04-20 20:00:00' );
INSERT INTO gigs   ( venue_id, artist_id, date )
            VALUES ( 2, 3, '2019-04-19 20:30:00' );
INSERT INTO gigs   ( venue_id, artist_id, date )
            VALUES ( 2, 1, '2019-04-20 20:00:00' );
INSERT INTO gigs   ( venue_id, artist_id, date )
            VALUES ( 3, 2, '2019-04-20 21:00:00' );
INSERT INTO gigs   ( venue_id, artist_id, date )
            VALUES ( 4, 1, '2019-04-26 20:00:00' );
INSERT INTO gigs   ( venue_id, artist_id, date )
            VALUES ( 4, 4, '2019-04-27 20:00:00' );

SELECT *
FROM gigs
LEFT OUTER JOIN artists ON gigs.artist_id = artists.id
WHERE artists.name = "Stones ATX"
  AND gigs.date = '2019-04-27 20:00:00';

SELECT artists.name, venues.name, gigs.date
FROM gigs
LEFT OUTER JOIN artists ON gigs.artist_id = artists.id
LEFT OUTER JOIN venues ON gigs.venue_id = venues.id
WHERE venues.name = "B.D. Riley's Irish Pub";


SELECT gigs.artist_id, venues.name, gigs.date
FROM gigs
LEFT OUTER JOIN venues ON gigs.venue_id = venues.id
WHERE venues.name = "B.D. Riley's Irish Pub";


INSERT INTO Users (name, password, role)
VALUES ("Eric", "hello123", "Artist" ), ("Ken", "hello123", "Artist" ), ("Wes", "Hello$123", "Artist" );