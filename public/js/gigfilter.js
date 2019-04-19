/* eslint-disable no-undef */
$(document).ready(function(){
  $("#filter").on("click",function(event){
      event.preventDefault();
      const name = $("#inputGroupSelect03").val();
      console.log("what is checkname")
          console.log(name);
      $(".gig-card").each(function(i,element){
          const checkName = $(element).children(".card-text").children(".card-title").text()
          
          if(name === checkName){
              $(element).show();
          }else if(name === "Select Venue"){
              $(element).show();
          }else{
              $(element).hide();
          }
      })
  })
})