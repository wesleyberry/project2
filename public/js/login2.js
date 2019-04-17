/* eslint-disable no-console */
/* eslint-disable no-undef */
$(function () {
    $("#login-submit").on("click", function () {
        event.preventDefault();
        var username = $("#username-login").val().trim();
        var password = $("#pass-login").val().trim();
        var role = $("input[name='role-signup']:checked").val();
        
        // var loginBody = {
        //     username: username,
        //     password: password,
        //     role: role
        // };

        if (!username || !password || !role) {
            alert("Please fill out every field");
        } else {

            // clear form
            // $("#username-login").val("");
            // $("#pass-login").val("");

            $.post("/api/login", {
                // data: loginBody
                name: username,
                password: password,
                role: role
            }).then(function (response) {
                // window.location.replace(response.url);
                console.log(response.id);
                console.log(response.url);
                console.log(response.role);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
            // if (role === "artist"){
            //     $.ajax("/api/artists/" +id, {
            //         data: loginBody
            //     }).then(function (response) {
            //         // window.location.replace(response);
            //     }).catch(function (err) {
            //         // eslint-disable-next-line no-console
            //         console.log(err);
            //     });
            // } else {
            //     $.ajax("/api/venues/" +id, {
            //          data: loginBody
            // }).then(function (response) {
            //     // window.location.replace(response);
            // }).catch(function (err) {
            //     // eslint-disable-next-line no-console
            //     console.log(err);
            // });
            // }
        }
    });
});




