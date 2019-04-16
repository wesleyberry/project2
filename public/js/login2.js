$(function () {
    $("#login-submit").on("click", function () {
        event.preventDefault();
        var username = $("#username-login").val().trim();
        var password = $("#pass-login").val().trim();
        // var role = $("input[name='role-signup']:checked").val();
        
        var loginBody = {
            username: username,
            password: password
        };

        if (!username || !password) {
            alert("Please fill out every field");
        } else {

            // clear form
            $("#username-login").val("");
            $("#pass-login").val("");

            $.ajax("/api/login", {
                data: loginBody
            }).then(function () {
                // window.location.replace(response);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
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
    });
});




