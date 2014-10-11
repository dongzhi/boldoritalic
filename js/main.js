(function($){
var more_status = 0;

$( document ).ready(function() {
  //
  $('#bold').css({
    'height':$(window).height(),
  });
  $('#italic').css({
    'height':$(window).height(),
  });

  $('.more_icon').on('click','a',function(){
    if(!more_status){
      $('.more ul').fadeIn(400);
      $('.more_icon a').css({
        'border-color':'#000',
      });
      more_status = 1;
    }else{
      $('.more ul').fadeOut(400);
      $('.more_icon a').css({
        'border-color':'transparent',
      });
      more_status = 0;
    }

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
