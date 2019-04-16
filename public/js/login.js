/* eslint-disable no-undef */
$(document).ready(function () {
    $(".sign-in-form").on("submit", function () {
        event.preventDefault();
        var username = $("input#username-signin");
        var password = $("input#password-signin");
        var role = $("input[name='role-signin']:checked");
        var signBody = {
            username: username,
            password: password,
            role: role
        };
        if (!username || !password || !role) {
            alert("Please fill out every field");
        } else {
            $.ajax("/api/login", {
                data: signBody
            }).then(function () {
                // window.location.replace(response);
            }).catch(function (err) {
                // eslint-disable-next-line no-console
                console.log(err);
            });
        }
    });
});
