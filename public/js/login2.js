$(function () {
    $("#login-submit").on("click", function () {
        event.preventDefault();
        var username = $("#username-login").val().trim();
        var password = $("#pass-login").val().trim();
        var role = $("input[name='role-signup']:checked").val();
        
        var loginBody = {
            username: username,
            password: password,
            role: role
        };

        if (!username || !password || !role) {
            alert("Please fill out every field");
        } else {
            // if (role === "artist"){
            //     $.ajax("/api/loginArist", {
            //         data: loginBody
            //     }).then(function (response) {
            //         // window.location.replace(response);
            //     }).catch(function (err) {
            //         // eslint-disable-next-line no-console
            //         console.log(err);
            //     });
            // } else {
            //     $.ajax("/api/loginVenue", {
            //     data: loginBody
            // }).then(function (response) {
            //     // window.location.replace(response);
            // }).catch(function (err) {
            //     // eslint-disable-next-line no-console
            //     console.log(err);
            // });
            // }
        }

        // clear form
        $("#username-login").val("");
        $("#pass-login").val("");
    });
});




