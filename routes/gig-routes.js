/* eslint-disable no-console */
/* eslint-disable no-undef */
var db = require("../models");
module.exports = function(app) {
    //  Posts to gigs table from venue view
    app.post("/api/gigs", function(req, res) {
        db.Venue.findAll({
            where: {
                id: req.user.id
            }
        }).then(function(venueInfo) {
            console.log(venueInfo[0].image);
            console.log(venueInfo[0].venueName);
            console.log(venueInfo[0].id);
                db.Gig.create({
                    date: req.body.gigDate,
                    description: req.body.gigDes,
                    genre: req.body.gigGenre,
                    VenueId: venueInfo[0].id,
                    gigName: venueInfo[0].venueName,
                    profileImage: venueInfo[0].image
        }).then(function() {
            res.send(200);
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
        });
    });
    // Get one specific gig
    app.get("/api/gigs/:gigId", function (req, res) {
        var gigId = req.params.id
        db.Gig.findOne({
            where: {
                VenueId: gigId
            }
        }).then(function(results) {
            var hbsObject = {
                gigs: results
            }
            res.send(hbsObject);
        });
    });
    // Get all gigs for specific user
    // app.get("/api/gigs", function(req, res) {
    //     console.log(req.user.id);
    //     db.Gig.findAll({
    //         where:{
    //             VenueId: req.user.id
    //         }
    //     }).then(function(dbGig) {
    //         db.Venue.findAll({
    //             where: {
    //                 UserId: req.user.id
    //             }
    //         }).then(function(dbVenue) {
    //             console.log(dbGig);
    //             var hbsObject = {
    //                 gig: dbGig
    //             }   
    //             res.send(dbGig);
    //             console.log(hbsObject);
    //             console.log(dbVenue[0].venueName);
    //             console.log(dbVenue[0].image);
    //         });
    //     });
    // });
}