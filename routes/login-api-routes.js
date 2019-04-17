/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
var db = require("../models");
var passport = require("../config/passport");
var express    = require('express');
// eslint-disable-next-line no-unused-vars
var bodyParser = require('body-parser');

module.exports = function(app) {
    app.post("/api/loginArtistAfter", passport.authenticate("local"), function(req, res) {
        res.json({url:"/bands", id: req.user.id, role: req.user.role});
        // res.json(req.user);
    });
    app.post("/api/loginVenueAfter", passport.authenticate("local"), function(req, res) {
        res.json("/venues");
    });

    app.post("/api/login", function(req, res) {
        console.log(req.body.role);
        if (req.body.role === "Artist") {
            res.redirect(307, "/api/loginArtistAfter")
        } else if (req.body.role === "Venue") {
            res.redirect(307, "/api/loginVenueAfter");
        }
    });
}