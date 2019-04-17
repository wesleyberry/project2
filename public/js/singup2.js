/* eslint-disable no-console */
/* eslint-disable no-undef */
$(function () {
    $("#signup-submit").on("click", function (event) {
        event.preventDefault();

        var user = $("#user-reg").val().trim();
        var pass = $("#pass-reg").val().trim();
        var confirm = $("#confirm-reg").val().trim();
        var role = $("input[name='role-signup']:checked").val();

        var newMember = {
            username: user,
            password: pass,
            role: role
        };

        if (pass !== confirm) {
            alert("Your passwords do not match");
        } else if (!pass || !user || !confirm || !role) {
            alert("Please fill out every field");
        } else {
            // clear form
            $("#user-reg").val("");
            $("#pass-reg").val("");
            $("#confirm-reg").val("");

            // post request
            console.log(newMember);
            $.post("/api/signup", {
                // data: newMember
                username: user,
                password: pass,
                role: role
            }).then(function (data) {
                // console.log(data);
                window.location.replace(data);
                // eslint-disable-next-line no-console
                // console.log("Signup.js test: Data returned to client for registration.");
            }).catch(handleSignupError);
        }

        function handleSignupError(err) {
            if (err) {
                alert("Sign up error");
            }
        }

    });
});




