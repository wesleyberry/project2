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
                    var hbObject = {
                        artist: dbArtist,
                        gigs: dbGig,

                    }
                    // console.log(dbArtist);
                    res.render("index-artist", hbObject);
                });
            });
    });
}
