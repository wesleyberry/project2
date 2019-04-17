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
            // venueName:
            // street_address:
            // city:
            // state:
            // zipcode:
            // phone:
            // email:
            // website: 
        }).then(function() {
            res.send("venue");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
}