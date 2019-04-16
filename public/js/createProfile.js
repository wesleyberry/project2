/* eslint-disable no-undef */
$(function () {
// create band profile
    $("#artist-create").on("click", function () {
        event.preventDefault();
        
        var bandNameP = $("#primary-name").val().trim();
        var bandNameS = $("#secondary-name").val().trim();
        var genre = $("#genre-des").val().trim();
        var instruments = $("#instrument-des").val().trim();
        var memberNum = $("#member-num").val().trim();
        var website = $("#website").val().trim();
        var phone = $("#phone-num").val().trim();
        var profileImg = $("#profile-img").val().trim();
        
        var bandProfile = {
            bandNameP: bandNameP,
            bandNameS: bandNameS,
            genre: genre,
            instruments: instruments,
            memberNum: memberNum,
            website: website,
            phone: phone,
            profileImg: profileImg
        };
       
        if (!bandNameP || !genre || !instruments || !website || !phone || !memberNum) {
            alert("Please fill out every field");
        } else {
            // clear form
            $("#primary-name").val("");
            $("#secondary-name").val("");
            $("#genre-des").val("");
            $("#instrument-des").val("");
            $("#member-num").val("");
            $("#website").val("");
            $("#phone-num").val("");
            $("#profile-img").val("");

            // POST
            $.ajax("/api/signup", {
                type: "POST",
                data: bandProfile            
                // eslint-disable-next-line no-unused-vars
            }).then(function (response) {
                // window.location.replace(response);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
        }

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

            // clear form
            $("#venue-name").val("");
            $("#address").val("");
            $("#city").val("");
            $("#state").val("");
            $("#zip").val("");
            $("#venue-phone-num").val("");
            $("#venue-website").val("");

            // POST
            $.ajax("/api/signup", {
                type: "POST",
                data: venueProfile
            // eslint-disable-next-line no-unused-vars
            }).then(function (response) {
                // window.location.replace(response);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
        }

    });

});




