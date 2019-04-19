/* eslint-disable no-console */
/* eslint-disable no-undef */
$(".book").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log("Button clicked " + id)
    $.ajax("/api/gigs/" + id, {
        type: "PUT",
    }).then(function(data) {
        location.reload();
        if(data) {
            console.log("Booked");
        } else {
            console.log("Could not book");
        }
    });
});