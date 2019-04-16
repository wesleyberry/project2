$(function () {

// create band profile
    $("#band-create").on("click", function () {
        event.preventDefault();
        
        var bandNameP = $("#primary-name").val().trim();
        var bandNameS = $("#secondary-name").val().trim();
        var genre = $("#genre-des").val().trim();
        var instruments = $("#instrument-des").val().trim();
        var website = $("#website").val().trim();
        var phone = $("#phone-num").val().trim();
        var profileImg = $("#profile-img").val().trim();
        
        var bandProfile = {
            bandNameP: bandNameP,
            bandNameS: bandNameS,
            genre: genre,
            instruments: instruments,
            website: website,
            phone: phone,
            profileImg: profileImg
        };

        if (!bandNameP || !genre || !instruments || !website || !phone) {
            alert("Please fill out every field");
        } else {
            $.ajax("/api/signup", {
                type: "PUT",
                data: bandProfile
            }).then(function (response) {
                window.location.replace(response);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
        }

        // clear form
        $("#primary-name").val("");
        $("#secondary-name").val("");
        $("#genre-des").val("");
        $("#instrument-des").val("");
        $("#website").val("");
        $("#phone-num").val("");
        $("#profile-img").val("");
    });

// create venue profile
    $("#venue-create").on("click", function () {
        event.preventDefault();
        
        var venueName = $("#venue-name").val().trim();
        var address = $("#address").val().trim();
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        var zip = $("#zip").val().trim();
        var phone = $("#venue-phone-num").val().trim();
        var website = $("#venue-website").val().trim();

        var venueProfile = {
            venueName: venueName,
            address: address,
            city: city,
            state: state,
            zip: zip,
            phone: phone,
            website: website
        };

        if (!venueName || !address || !city || !state || !zip || !phone || !website) {
            alert("Please fill out every field");
        } else {
            $.ajax("/api/signup", {
                type: "PUT",
                data: venueProfile
            }).then(function (response) {
                window.location.replace(response);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
        }

        // clear form
        $("#venue-name").val("");
        $("#address").val("");
        $("#city").val("");
        $("#state").val("");
        $("#zip").val("");
        $("#venue-phone-num").val("");
        $("#venue-website").val("");
    });

});




