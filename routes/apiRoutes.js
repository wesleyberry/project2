/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var db = require("../models");
var path = require("path");
var passport = require("../config/passport");
var express    = require('express');
var bodyParser = require('body-parser');
var isAuthenticated = require("../config/middleware/isAuthenticated");

var app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

module.exports = function (app) {

    app.post("/api/loginArtist", passport.authenticate("local"), function (req, res) {
      // eslint-disable-next-line no-console
      console.log("Before sending JSON");
      res.send("bandSign");
      // res.sendFile(path.join(__dirname, "../public/html/venueCreateProfile.html"));
    });

    app.post("/api/loginVenue", passport.authenticate("local"), function (req, res) {
      // eslint-disable-next-line no-console
      res.send("venueSign");
      // res.sendFile(path.join(__dirname, "../public/html/bandCreateProfile.html"));
    });

  app.post("/api/signup", function (req, res) {
    // eslint-disable-next-line no-console
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.password);
    console.log(req.body.role);
    if (req.body.role == "artist") {
      db.User.create({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role
      }).then(function () {
        console.log("Create artist callback: ");
        res.redirect(307, "/api/loginArtist");
        console.log("test");
      }).catch(function (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.json(err);
      });
    } else {
      db.User.create({
        name: req.body.name,
        password: req.body.password,
        role: req.body.role
      }).then(function () {
        console.log("Create venue callback: ");
        res.redirect(307, "/api/loginVenue");
      }).catch(function (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.json(err);
      });
    }
  });

    app.get("/logout", function (req, res) {
      console.log(" ------------- Log user out")
      req.logout();
      res.redirect("/");
    });

    app.get("/api/user_data", function (req, res) {
      console.log("User data request");
      if (!req.user) {
        res.json({});
      } else if (req.user.role == "artist"){
        console.log("Confirmed artist - redirect");
        res.redirect(307, "/api/artists/");
      }
    });
  }