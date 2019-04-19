var db = require("../models");

module.exports = function (app) {
    // Get route for retrieving a single venue
    app.get("/api/venues/", function (req, res) {
        db.Venue.findOne({
            where: {
                UserId: req.user.id
            }
        }).then(function (dbVenue) {
            db.Gig.findAll({
                where:{
                    VenueId: req.user.id
                }
            }).then(function(dbGig) {
                var hbObject = {
                    venue: dbVenue,
                    gigs: dbGig
                }
                // console.log(dbVenue);
                res.render("index-venue", hbObject);
            })
        });
    });
}


