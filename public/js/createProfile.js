/* eslint-disable no-console */
/* eslint-disable no-undef */
$(function () {
// create artist profile
    $("#artist-create").on("click", function () {
        event.preventDefault();
        
        var artistName = $("#artist-name").val().trim();
        var genre = $("#genre-des").val().trim();
        var instruments = $("#instrument-des").val().trim();
        var memberNum = $("#artist-num").val().trim();
        var email = $("#artist-email").val().trim();
        var website = $("#artist-website").val().trim();
        var phone = $("#artist-phone").val().trim();
        var profileImg = $("#profile-img").val().trim();

        console.log(artistName);
       
        if (!artistName || !genre || !instruments || !website || !phone || !memberNum || !email) {
            alert("Please fill out every field");
        } else {
            // clear form
            $("#artist-name").val("");
            $("#genre-des").val("");
            $("#instrument-des").val("");
            $("#artist-num").val("");
            $("#artist-email").val("");
            $("#artist-website").val("");
            $("#artist-phone").val("");
            $("#profile-img").val("");
            // POST
            $.post("/api/artists", {
                  
                artistName: artistName,
                genre: genre,
                instruments: instruments,
                memberNum: memberNum,
                email: email,
                website: website,
                phone: phone,
                profileImg: profileImg         
                // eslint-disable-next-line no-unused-vars
            }).then(function (response) {
                // console.log(response);
                // window.location.replace(response);
                console.log("Before testing get request");
                // console.log(response);
                window.location.assign(response.url);
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
        var address = $("#venue-address").val().trim();
        var city = $("#city").val().trim();
        var state = $("#state").val().trim();
        var zip = $("#zip").val().trim();
        var venueEmail = $("#venue-email").val().trim();
        var phone = $("#venue-phone-num").val().trim();
        var website = $("#venue-website").val().trim();
        var venueProfileImg = $("#venue-profile-img").val().trim();

        if (!venueName || !address || !city || !state || !zip || !venueEmail || !phone || !website) {
            alert("Please fill out every field");
        } else {

            // clear form
            $("#venue-name").val("");
            $("#venue-address").val("");
            $("#city").val("");
            $("#state").val("");
            $("#zip").val("");
            $("#venue-email").val("");
            $("#venue-phone-num").val("");
            $("#venue-website").val("");
            $("#venue-profile-img").val("");

            // POST
            $.post("/api/venues", {
                venueName: venueName,
                address: address,
                city: city,
                state: state,
                zip: zip,
                venueEmail: venueEmail,
                phone: phone,
                website: website,
                venueProfileImg: venueProfileImg
            // eslint-disable-next-line no-unused-vars
            }).then(function (response) {
                window.location.assign(response.url);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
        }

    });

});




