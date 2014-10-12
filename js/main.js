(function($){


var count = 1;
var slideWidth = $(window).width()/2;
var slideHeight = $(window).height();
var slideCount = 2;
var sliderUlWidth = slideCount * slideWidth;
var sliderUlHeight = slideCount * slideHeight;

var slider = function(){
  var i = getRandomInt(0,4);
  var j = getRandomInt(0,4);
  while(j==i){
    j = getRandomInt(0,4);
  }
  //console.log(i+'-'+j);
  switch(i) {
    case 0:
        moveLeft("bold");
        break;
    case 1:
        moveRight("bold");
        break;
    case 2:
        moveTop("bold");
        break;
    case 3:
        moveDown("bold");
        break;
  }

  switch(j) {
    case 0:
        moveLeft("italic");
        break;
    case 1:
        moveRight("italic");
        break;
    case 2:
        moveTop("italic");
        break;
    case 3:
        moveDown("italic");
        break;
  }
}

var moveLeft = function(id){
  $('#'+id+' ul').append('<li><img src="image/'+ id + count +'.jpg" width="100%"/></li>');

  $('#'+id+' ul').css({ width: sliderUlWidth, top:0, left:0});
  $('#'+id+' ul li').css({ width:slideWidth, float: "left" });

  $('#'+id+' ul').animate({
            left: - slideWidth
        }, 400, function () {
            $('#'+id+' ul li:last-child').prependTo('#'+id+' ul');
            $('#'+id+' ul').css('left', '');
            $('#'+id+' ul li:last-child').remove();
            if(count==2){
              count = 0;
            }else{
              count++;
            }
  });
}

var moveRight = function(id){
  $('#'+id+' ul').prepend('<li><img src="image/'+ id + count +'.jpg" width="100%"/></li>');

  $('#'+id+' ul').css({ width: sliderUlWidth, top:0, left:-slideWidth});
  $('#'+id+' ul li').css({ width:slideWidth, float: "left" });

  $('#'+id+' ul').animate({
            left: 0
        }, 400, function () {
            $('#'+id+' ul li:last-child').remove();
            if(count==2){
              count = 0;
            }else{
              count++;
            }
  });
}

var moveTop = function(id){
  $('#'+id+' ul').append('<li><img src="image/'+ id + count +'.jpg" width="100%"/></li>');

  $('#'+id+' ul').css({ width: slideWidth, height: sliderUlHeight, top:0, left:0});
  $('#'+id+' ul li').css({ width:slideWidth, height:slideHeight });

  $('#'+id+' ul').animate({
            top: - slideHeight
        }, 300, function () {
            $('#'+id+' ul li:last-child').prependTo('#'+id+' ul');
            $('#'+id+' ul').css('top', '');
            $('#'+id+' ul li:last-child').remove();
            if(count==2){
              count = 0;
            }else{
              count++;
            }
  });
}

var moveDown = function(id){
  $('#'+id+' ul').prepend('<li><img src="image/'+ id + count +'.jpg" width="100%"/></li>');

  $('#'+id+' ul').css({ width: slideWidth, height: sliderUlHeight, top:-slideHeight, left:0});
  $('#'+id+' ul li').css({ width:slideWidth, height:slideHeight });

  $('#'+id+' ul').animate({
            top: 0
        }, 400, function () {
            $('#'+id+' ul li:last-child').remove();
            if(count==2){
              count = 0;
            }else{
              count++;
            }
  });
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$( document ).ready(function() {
  //
  setInterval(function(){
    slider();
  }, 6000);

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
  // $('#bold').css({
  //   'height':$(window).height(),
  // });
  // $('#italic').css({
  //   'height':$(window).height(),
  // });
});





})(jQuery);
