INSERT INTO Users (name, password, role)
VALUES ("javelinboot", "123", "Artist" ),
       ("thesplinters", "123", "Artist" ), 
       ("kaliedescopeeyes", "123", "Artist" ),
       ("stonesatx", "123","Artist");

INSERT INTO Artists (artistName, genre, instrumentation, numberOfMembers, email, phone, profileImage, website, UserId )
            VALUES  ( "Javelin Boot",
                      "Progressive Rock",
                      "guitar",
                       3,
                      "javelinBoot@UTBootCamp.edu",
                      "(555) 555-5555", 
                      "https://via.placeholder.com/300", 
                      "bootcampspot.com",
                      1 ),

                    ( "The Splinters",
                      "Classic Rock Cover",
                      "guitar",
                       5, 
                      "theSplinters@UTBootCamp.edu", 
                      "(555) 555-5555", 
                      "https://via.placeholder.com/300", 
                      "bootcampspot.com",
                      2 ),

                    ( "Kaliedescope Eyes", 
                      "Beatles Cover Band", 
                      "none",
                       4,
                      "kaliedescopeEyes@UTBootCamp.edu", 
                      "(555) 555-5555", 
                      "https://via.placeholder.com/300", 
                      "bootcampspot.com",
                       3 ),

                     ( "Stones ATX", 
                       "Rolling Stones Cover Band",
                       "full set", 
                        5, 
                        "stonesATX@UTBootCamp.edu", 
                        "(555) 555-5555", 
                        "https://via.placeholder.com/300", 
                        "bootcampspot.com",
                        4 );

INSERT INTO Users (name, password, role)
VALUES ("holeinthewall", "123", "Venue"),
       ("emos", "123", "Venue"),
       ("antones", "123", "Venue"),
       ("bdrileys", "123", "Venue"),
       ("cmn", "123", "Venue");

INSERT INTO Venues (venueName, street_address, city, state, zipcode, phone, email, website, UserId) 
            VALUES ( "Hole in the Wall",
                     "2538 Guadalupe St.", "Austin", "TX", "78705", "(555) 555-5555", "HoleInTheWall@UTBootCamp.edu",
                     "https://www.holeinthewallaustin.com/fullscreen-page/comp-jc7gdz3r/e388a146-0979-4682-a11d-838d7e421b16/6/%3Fi%3D6%26p%3Dacsro%26s%3Dstyle-ji24vi6q%26rl%3D1",
                     "https://www.holeinthewallaustin.com/", 5),

                   ( "Emo's",
                     "2015 E Riverside Dr.", "Austin", "TX", "78741", 
                     "(555) 555-5555",
                     "Emos@UTBootCamp.edu",
                     "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/cffda9680b0848c0ae916497614c8fce/2/GCuCv726gZycFxatknDdac/003_Emo?dpr=2%27s-Resized.jpg",
                     "https://www.emosaustin.com/", 6),

                   ( "Antone's Nightclub",
                     "305 E 5th St.", "Austin", "TX", "78701", 
                     "(555) 555-5555", 
                     "Antones@UTBootCamp.edu",
                     "https://scontent-sea1-1.cdninstagram.com/vp/55dae11e94dc3a565059b30f155b4bc3/5D7665C1/t51.2885-15/e35/56416968_649136208857094_500001289747272358_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com",
                     "https://www.antonesnightclub.com/", 7),

                   ( "B.D. Riley's Irish Pub",
                     "204 E 6th St.", "Austin", "TX", "78701", 
                     "(555) 555-5555",
                     "BDRileys@UTBootCamp.edu",
                     "https://bdrileys.com/wp-content/themes/bdrileys/images/homesixthstreet.jpg",
                     "https://bdrileys.com/", 8);


INSERT INTO Gigs (gigName, street_address, city, state, zipcode, phone, discription, profileImage, date) 
            VALUES ( "Hole in the Wall",
                     "2538 Guadalupe St.", "Austin", "TX", "78705", 
                     "(555) 555-5555", 
                     "Electric Boogaloo",
                     "http://www.one2onebar.com/index_files/stacks-image-55009ff.jpg",
                     "Friday Night"),
                    
                    ( "Emo's",
                     "2015 E Riverside Dr.", "Austin", "TX", "78741", 
                     "(555) 555-5566",
                     "Aquatic Boogaloo",
                     "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/c1a873b75fab499d8654dc751d9f5554/2/GCuCv726gZycFxatknDdac/SEVENLIONS-EMOS-11.29.18-11_1920w.jpg",
                     "Saturday Night"),
                     
                     ( "Lit Lounge",
                       "215 East 6th Street", "Austin", "TX", "78701",
                       "(512) 466-2604",
                       "Premiere destination for Austin’s elite crowd ",
                       "https://litloungeaustin.com/images/page2-img1.jpg",
                       "Saturday, April 20, 2019, 7:00pm - 10:00pm"
                     ),
                     ("Broken Spoke",
                     "3201 S Lamar Blvd", "Austin", "TX", "78704",
                     "(555) 555-5555",
                     "Honky Tonk",
                     "https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                     "Saturday Night"),

                     ("One-2-One Bar",
                     "1509 S Lamar Blvd", "Austin", "TX", "78704",
                     "(555) 555-5555",
                     "Rager",
                     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                     "Saturday Night"),

                    ( "Hole in the Wall",
                     "2538 Guadalupe St.", "Austin", "TX", "78705", 
                     "(555) 555-5555", 
                     "Electric Boogaloo",
                     "http://www.one2onebar.com/index_files/stacks-image-55009ff.jpg",
                     "Friday Night"),
                    
                    ( "Emo's",
                     "2015 E Riverside Dr.", "Austin", "TX", "78741", 
                     "(555) 555-5566",
                     "Aquatic Boogaloo",
                     "https://static.spacecrafted.com/d0ff1849232e40769aef8fe7be7d853d/i/c1a873b75fab499d8654dc751d9f5554/2/GCuCv726gZycFxatknDdac/SEVENLIONS-EMOS-11.29.18-11_1920w.jpg",
                     "Saturday Night"),
                     
                     ( "Lit Lounge",
                       "215 East 6th Street", "Austin", "TX", "78701",
                       "(512) 466-2604",
                       "Premiere destination for Austin’s elite crowd ",
                       "https://litloungeaustin.com/images/page2-img1.jpg",
                       "Saturday, April 20, 2019, 7:00pm - 10:00pm"
                     ),
                     ("Broken Spoke",
                     "3201 S Lamar Blvd", "Austin", "TX", "78704",
                     "(555) 555-5555",
                     "Honky Tonk",
                     "https://images.unsplash.com/photo-1508252592163-5d3c3c559f36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
                     "Saturday Night"),

                     ("One-2-One Bar",
                     "1509 S Lamar Blvd", "Austin", "TX", "78704",
                     "(555) 555-5555",
                     "Rager",
                     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                     "Saturday Night")
                     ;

INSERT INTO gigs   ( VenueId, ArtistId, date )
            VALUES ( 1, 2, '2019-04-19 20:00:00' );
INSERT INTO gigs   ( VenueId, ArtistId, date )
            VALUES ( 1, 4, '2019-04-20 20:00:00' );
INSERT INTO gigs   ( VenueId, ArtistId, date )
            VALUES ( 2, 3, '2019-04-19 20:30:00' );
INSERT INTO gigs   ( VenueId, ArtistId, date )
            VALUES ( 2, 1, '2019-04-20 20:00:00' );
INSERT INTO gigs   ( VenueId, ArtistId, date )
            VALUES ( 3, 2, '2019-04-20 21:00:00' );
INSERT INTO gigs   ( VenueId, ArtistId, date )
            VALUES ( 4, 1, '2019-04-26 20:00:00' );
INSERT INTO gigs   ( VenueId, ArtistId, date )
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


