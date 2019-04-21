/* eslint-disable no-console */
/* eslint-disable no-undef */
$(".logout").on("click", function (event) {
    event.preventDefault();

    window.location.replace("/logout");
});