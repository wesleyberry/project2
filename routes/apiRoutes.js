var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
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