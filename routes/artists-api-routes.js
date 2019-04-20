var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
    // Get route for retrieving a single artist and all gigs.
    app.get("/api/artists/", isAuthenticated, function (req, res) {
        db.Gig.findAll({})
            .then(function (dbGig) {
                db.Artist.findOne({
                    where: {
                        UserId: req.user.id
                    }
                }).then(function (dbArtist) {
                    db.Venue.findAll({}).then(function(dbVenue){
                    var hbObject = {
                        artist: dbArtist,
                        gigs: dbGig,
                        venues:dbVenue
                    }
                    // console.log(dbArtist);
                    res.render("index-artist", hbObject);
                });
            });
    });
});
}
