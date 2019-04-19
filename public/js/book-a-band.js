/* eslint-disable no-console */
/* eslint-disable no-undef */
$(function() {
    $("#book-a-band").on("click", function(event) {
        event.preventDefault();
        var bookId = $(this).data("id");
        $.put("/api/gigs", {
            data: bookId
        }).then(function(data) {
            location.reload();
            if(data) {
                console.log("Booked");
            } else {
                console.log("Could not book");
            }
        });
    });
});