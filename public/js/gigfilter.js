/* eslint-disable no-undef */
$(document).ready(function(){
  $("#filter").on("click",function(event){
      event.preventDefault();
      const name = $("#inputGroupSelect03").val();
      $(".gig-card").each(function(i,element){
          const checkName = $(element).children(".card-text").children(".card-title").text()
          
          /* When filtering the 'card' view for an artist, part of the support for other 
           * options would have some code here.  'name' is the name of the venue we are
           * filtering on.  If we wanted to filter to only show gigs for the current 
           * artist, we could do a few things to help that here. */
          if(name === checkName){
              $(element).show();
          }else if(name === "All Venues"){
              $(element).show();
          }else{
              $(element).hide();
          }
      })
  })
})