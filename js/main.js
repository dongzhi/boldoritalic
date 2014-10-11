(function($){

$( document ).ready(function() {
  //
  $('#bold').css({
    'height':$(window).height(),
  });
  $('#italic').css({
    'height':$(window).height(),
  });

  $('.more_icon').on('mouseenter','a',function(){
      $('.more ul').fadeIn(400);
      $('.more_icon a').css({
        'border-color':'#000',
      });

  });

  $('.more_icon').on('mouseleave','a',function(){
      $('.more ul').fadeOut(400);
      $('.more_icon a').css({
        'border-color':'transparent',
      });
  });


  $('.more').on('mouseenter','ul',function(){
      $('.more ul').stop();
      $('.more_icon a').css({
        'border-color':'#000',
      });

  });

  $('.more').on('mouseleave','ul',function(){
      $('.more ul').fadeOut(400);
      $('.more_icon a').css({
        'border-color':'transparent',
      });

  });


});



$( window ).resize(function() {
  $('#bold').css({
    'height':$(window).height(),
  });
  $('#italic').css({
    'height':$(window).height(),
  });
});





})(jQuery);
