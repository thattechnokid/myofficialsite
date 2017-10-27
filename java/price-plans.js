$(document).ready( function(){  
   $("#click-below").delay(4000).fadeOut(1500); 
});
$("#price-logo-1").click( function(){
   $("#price-content-1").slideToggle(1000);
   $("#price-content-2").slideUp(1000);
   $("#price-content-3").slideUp(1000);

});

$("#price-logo-2").click( function(){
   $("#price-content-2").slideToggle(1000);
   $("#price-content-1").slideUp(1000);
    $("#price-content-3").slideUp(1000);
});

$("#price-logo-3").click( function(){
   $("#price-content-3").slideToggle(1000);
       $("#price-content-2").slideUp(1000);
        $("#price-content-1").slideUp(1000);

});

