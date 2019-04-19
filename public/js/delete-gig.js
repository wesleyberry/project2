/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
$(".delete").on("click", function(event) {
    var id = $(this).data("id");
    console.log(id);
    // Send the DELETE request.
    $.ajax("/api/gigs/" + id, {
      type: "DELETE"
    }).then(function() {
        console.log("deleted gig ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });