var db = require("../models");
var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

module.exports = function (app) {

    app.post("/api/artists", function(req, res) {
        db.Artist.create({
            genre: req.body.genre,
            instrumentation: req.body.instruments,
            numberOfMembers: req.body.memberNum,
            email: req.body.email,
            phone: req.body.phone,
            profileImage: req.body.profileImg,
            website: req.body.website
        }).then(function() {
            res.send("band");
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
}