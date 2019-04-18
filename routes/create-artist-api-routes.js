/* eslint-disable no-console */
var db = require("../models");
var express    = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

module.exports = function (app) {

    app.post("/api/artists", function(req, res) {
        console.log(req.body);
        db.Artist.create({
            artistName: req.body.artistName,
            genre: req.body.genre,
            instrumentation: req.body.instruments,
            numberOfMembers: req.body.memberNum,
            email: req.body.email,
            phone: req.body.phone,
            profileImage: req.body.profileImg,
            website: req.body.website,
            UserId: req.user.id
        }).then(function() {
            res.json({url:"api/artists"});
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
}