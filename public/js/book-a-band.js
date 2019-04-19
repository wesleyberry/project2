/* eslint-disable no-console */
/* eslint-disable no-undef */
$(".book").on("click", function(event) {
    event.preventDefault();
    var bookId = $(this).data("id");
    console.log("Button clicked " + bookId)
    $.ajax("/api/gigs", {
        type: "PUT",
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