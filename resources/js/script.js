$(document).ready(function(){

/* scrolling sticky navigation */
   $('.js--section-featured').waypoint(function(direction){
      if (direction == "down"){
         $('nav').addClass('sticky');
      }else{
         $('nav').removeClass('sticky');
      }
   }, {
      offset: '105px'
   });
   
/* animation on scroll */
   $('.js--wp-1').waypoint(function(direction){
      $('.js--wp-1').addClass('animated fadeIn');
   }, {
      offset: '75%'
   });
   
});


