/* eslint-disable no-undef */
$(document).ready(function () {
    $("#signup-submit").on("click", function (event){
        event.preventDefault();

        var user = $("#user-reg").val().trim();
        var email = $("#email-reg").val().trim();
        var pass = $("#pass-reg").val().trim();
        var confirm = $("#confirm-reg").val().trim();
        var role = $("input[name='role-signup']:checked").val();
        var newMember = {
            username: user,
            email: email,
            password: pass,
            role: role
        };
        
        if (pass !== confirm) {
            alert("Your passwords do not match");
        } else if (!pass || !user || !confirm || !email || !role) {
            alert("Please fill out every field");
        } else {
            $("form :input").val("");
            $.post("/api/signup", {
                data: newMember
            }).then(function () {
                window.location.replace(data);
                // eslint-disable-next-line no-console
                console.log("Signup.js test: Data returned to client for registration.");
            }).catch(handleSignupError);
        }

        function handleSignupError(err) {
            if (err) {
                alert("Sign up error");
            }
        }

        // clear form
        $("#user-reg").val("");
        $("#pass-reg").val("");
        $("#confirm-reg").val("");
        $("#email-reg").val("");
    });
});