/* eslint-disable no-console */
/* eslint-disable no-undef */
$(function () {
    $("#login-submit").on("click", function () {
        event.preventDefault();
        var name = $("#username-login").val().trim();
        var password = $("#pass-login").val().trim();
        var role = $("input[name='role-signup']:checked").val();
        
        if (!name || !password || !role) {
            alert("Please fill out every field");
        } else {

            // clear form
            // $("#username-login").val("");
            // $("#pass-login").val("");

            $.post("/api/login", {
                name: name,
                password: password,
                role: role
            }).then(function (response) {
                window.location.replace(response.url);
                console.log(response.id);
                console.log(response.url);
                console.log(response.role);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
          
        }
    });
});




