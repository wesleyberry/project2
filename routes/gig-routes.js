/* eslint-disable no-console */
/* eslint-disable no-undef */
module.exports = function(app) {
    app.post("/api/gigs", function(req, res) {
        db.Gig.create({
            date: req.body.gigDate,
            description: req.body.gigDes,
            genre: req.body.gigGenre
            
        }).then(function() {
            res.send(200);
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        })
    });

    app.get("/api/gigs/:gigId", function (req, res) {
        var gigId = req.params.id
        db.Gig.findOne({
            where: {
                venueId: gigId
            }
        }).then(function(results) {
            var hbsObject = {
                gig: results
            }
            res.send(hbsObject);
        });
    });
}