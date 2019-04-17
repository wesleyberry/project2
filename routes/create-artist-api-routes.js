var db = require("../models");
var passport = require("../config/passport");
var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

module.exports = function (app) {

    app.post("/api/artists", function(req, res) {
        console.log("Test before adding row to Artist table: " + req.body.genre +
            req.body.instruments + req.body.memberNum + req.body.email +
            req.body.phone + req.body.profileImg + req.body.website);
        db.Artist.create({
            music_genre: req.body.genre,
            email: req.body.email,
            website: req.body.website
        }).then(function() {
            res.send("band");
            console.log("Finished create callback");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });


}