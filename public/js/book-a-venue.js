/* eslint-disable no-console */
/* eslint-disable no-undef */
$(function() {
    $("#book-a-venue").on("click", function(event) {
        event.preventDefault();
        var bookId = $(this).data("id");
        $.put("/api/gigs", {
            data: bookId
        }).then(function(data) {
            console.log(data);
        });
    });
});