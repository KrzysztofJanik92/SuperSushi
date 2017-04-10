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
   
   $('.js--wp-2').waypoint(function(direction){
      $('.js--wp-2').addClass('animated fadeInUp');
   }, {
      offset: '50%'
   });
   
/* mobile menu */
   $('.js--nav-icon').click(function(){
      var nav = $('.js--main-nav');
      
      nav.slideToggle(200);
   })
   
});




