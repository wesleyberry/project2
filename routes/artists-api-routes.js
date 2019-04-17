var db = require("../models");

module.exports = function(app) {
// Get route for retrieving a single post
app.get("/api/artists/:id/", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Venue
    db.Gig.findAll({
        where: {
            id: req.params.id,
        },
        include: [db.Venue]
    },{
    // db.Artist.findOne
    })
    .then(function (dbPost) {
        res.json(dbPost);
    });
    

});

// Get route for retrieving a single Artist
app.get("/api/artists/", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Artists
    db.Artist.findAll({

    }).then(function (dbArtist) {
       
        res.json(dbArtist);
        // res.send(dbArtist);
       
    });
});

// app.post("/api/artists", function(req, res) {
//   db.Artist.create(req.body).then(function(dbArtist) {
//     res.json(dbArtist);
//   });
// });
}
