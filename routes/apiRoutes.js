var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

  app.post("/api/loginArtist", passport.authenticate("local"), function (req, res) {
    // eslint-disable-next-line no-console
    console.log("Test after Artist authentication: " + req.user);
    res.json("/bandSign");
  });
  app.post("/api/loginVenue", passport.authenticate("local"), function (req, res) {
    // eslint-disable-next-line no-console
    console.log("Test after Venue uthentication: " + req.user);
    res.json("/venueSign");
  });

  app.post("/api/signup", function (req, res) {
    // eslint-disable-next-line no-console
    console.log(req.body);
    if (req.body.role === "artist") {
      db.User.create({
        username: req.body.username,
        password: req.body.password
      }).then(function () {
        res.redirect(307, "/api/loginArtist");
      }).catch(function (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.json(err);
      });
    } else if (req.body.role === "venue") {
      db.User.create({
        username: req.body.username,
        password: req.body.password
      }).then(function () {
        res.redirect(307, "/api/loginVenue");
      }).catch(function (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        res.json(err);
      });
    }
  });

  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      res.json("/");
    }
    else {
      res.json({
        // Include in here everything we want to return to the user
      });
    }
  });





  // *********************************************************************************
  // api-routes.js - this file offers a set of routes for displaying and saving data to the db
  // *********************************************************************************

  // Dependencies
  // =============================================================

  // Grabbing our models

  var db = require("../models");

  // Routes
  // =============================================================
  module.exports = function (app) {

    app.get("/", function (req, res) {
      db.Burger.findAll({}).then(function (results) {

        var hbsObject = {
          burgers: results
        };
        res.render("index", hbsObject);
      });
    });

    app.post("/api/burgers", function (req, res) {
      db.Burger.create({
        burger_name: req.body.burger_name
      }).then(function (results) {
        res.json({
          id: result.insertId
        })
      })
    });


    app.put("/api/burgers/:id", function (req, res) {
      var condition = req.params.id;

      console.log("put route hit")

      db.Burger.update({
        devoured: true
      }, {
        where: {
          id: condition
        }
      }).then(function (results) {
        if (results.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          return res.status(200).end();
        }
      });
    });






  }

};