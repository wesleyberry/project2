/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
var db = require("../models");
var passport = require("../config/passport");
var express    = require('express');
// eslint-disable-next-line no-unused-vars
var bodyParser = require('body-parser');
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.post("/api/loginArtistAfter", passport.authenticate("local"), function(req, res) {
        console.log("post auth test");
        res.json({url:"/api/artists", id: req.user.id, role: req.user.role});
        // res.json(req.user);
    });
    app.post("/api/loginVenueAfter", passport.authenticate("local"), function(req, res) {
        res.json({url:"/api/venues", id: req.user.id, role: req.user.role});
    });

    app.post("/api/login", function(req, res) {
        console.log(req.body.role);
        console.log(req.body.password);
        console.log(req.body.name);
        if (req.body.role === "Artist") {
            console.log("redirecting to artist");
            res.redirect(307, "/api/loginArtistAfter")
        } else if (req.body.role === "Venue") {
            console.log("redirecting to venue");
            res.redirect(307, "/api/loginVenueAfter");
        }
    });
}