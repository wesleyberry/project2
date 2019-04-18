/* eslint-disable no-console */
/* eslint-disable no-undef */
$(document).ready(function() {
    $.get("/api/user_data").then(function(data) {
        console.log(data);
    });
});

$(document).ready(function() {
    $.get("/api/gigs").then(function(data) {
        console.log(data);
    });
});