/* eslint-disable no-console */
var db = require("../models");
var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

module.exports = function (app) {

    app.post("/api/venues", function(req, res) {
        db.Venue.create({
            venueName: req.body.venueName,
            street_address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zip,
            phone: req.body.phone,
            email: req.body.venueEmail,
            website: req.body.website,
            image: req.body.venueProfileImg,
            UserId: req.user.id
        }).then(function() {
            res.json({url:"api/venues"});
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
}