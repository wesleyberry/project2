/* eslint-disable no-undef */
$(document).ready(function() {
    $.get("/api/user_data").then(function(data) {
        console.log(data);
    });
});