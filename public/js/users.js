/* eslint-disable no-undef */
$(document).ready(function() {
    $.get("/api/artist/id").then(function(data) {
        // $(".some-class").text(data);
    });
});