/* eslint-disable no-console */
/* eslint-disable no-undef */
// below is the code for the calendar functionality
$(document).ready(function () {
    var date_input = $('input[name="date"]'); //our date input has the name "date"
    var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
    date_input.datepicker({
        format: 'mm/dd/yyyy',
        container: container,
        todayHighlight: true,
        autoclose: true,
    })
});


$("#gig-create").on("click", function (event) {
    event.preventDefault();

    // var gigImage
    // var gigName
    // var gigAddress
    var gigDes = $("#gig-des").val().trim();
    var gigGenre = $("#gig-genre").val().trim();
    var gigDate = $("#gig-date").val().trim();

    $.post("/api/gigs", {
        gigDes: gigDes,
        gigGenre: gigGenre,
        gigDate: gigDate
    // eslint-disable-next-line no-unused-vars
    }).then(function (response) {
        // window.location.replace(response);
        console.log(response);
        location.reload();
    }).catch(function (err) {
        console.log(err);
    });

});

// this is the funcationality to toggle between the form and display gigs
$(document).ready(function(){
    $("#display-venue-gigs").hide();
    $("#dis-make-gig-form-btn").hide();

    $("#dis-gigs-btn").on("click", function(event){
        event.preventDefault();
        
        $("#display-venue-gigs").show();
        $("#dis-gigs-btn").hide();
        $("#dis-make-gig-form-btn").show();
        $("#display-make-gig-form").hide();
        
    })

    $("#dis-make-gig-form-btn").on("click", function(event){
        event.preventDefault();
        
        $("#display-venue-gigs").hide();
        $("#dis-gigs-btn").show();
        $("#dis-make-gig-form-btn").hide();
        $("#display-make-gig-form").show();

    })
});