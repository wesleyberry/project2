var db = require("../models");

module.exports = function (app) {
    // Get route for retrieving a single post
    app.get("/api/venues/", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Venue
        db.Gig.findAll({})
            .then(function (dbGig) {
                db.Venue.findOne({
                    where: {
                        UserId: req.user.id
                    }
                }).then(function (dbVenue) {
                    // console.log(dbArtist);
                    res.json({venue: dbVenue, gig: dbGig })
                })
                //res.json(dbGig);
            });

        


    });

    // // Get route for retrieving a single Artist
    // app.get("/api/artists/", function (req, res) {
    //     // Here we add an "include" property to our options in our findOne query
    //     // We set the value to an array of the models we want to include in a left outer join
    //     // In this case, just db.Artists
    //     db.Artist.findAll({

    //     }).then(function (dbArtist) {

    //         res.json(dbArtist);
    //         // res.send(dbArtist);

    //     });
    // });

}