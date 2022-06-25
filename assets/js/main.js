$(document).ready (function(){
 $(window).on('scroll',function(){
   if($(window).scrollTop()>=650 && !$('#Site-header').hasClass('sticky')){
       $('#Site-header').addClass('sticky');
   }
   else if($(window).scrollTop()<650 && $('#Site-header').hasClass('sticky')){
       $('#Site-header').removeClass('sticky')
   }
 });
 var options = {
    animateClass: 'animate__animated', // for v3 or 'animate__animated' for v4
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.home-section').AniView(options);
});