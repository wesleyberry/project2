/* eslint-disable no-console */
/* eslint-disable no-undef */
$("#logout").on("click", function (event) {
    event.preventDefault();

    $.get("/logout", function(err){
        if (err) throw err
        else {
            console.log("Success");
        }
    }); 
});