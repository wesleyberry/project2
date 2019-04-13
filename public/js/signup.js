$(document).ready(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var checked = $("input[name='role']:checked").val();
        var user = $("#userReg").val().trim();
        var pass = $("#passReg").val().trim();
        var confirm = $("#confirmReg").val().trim();
        var email = $("#emailReg").val().trim();
        var newMember = {
            username: user,
            password: pass,
            email: email,
            role: checked
        };
        if (pass !== confirm) {
            alert("Your passwords do not match");
        } else if (!newMember.pass || !newMember.user || !newMember.confirm || !newMember.email) {
            alert("Please fill out every field");
        } else {
            $("form :input").val("");
            $.post("/api/signup", {
                data: newMember
            }).then(function (data) {
                console.log("Signup.js test: Data returned to client for registration.");
            }).catch(handleSignupError);
        }

        function handleSignupError(err) {
            if (err) {
                alert("Sign up error");
            }
        }
    });
});