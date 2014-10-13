(function($){

	$(document).ready(function(){
	    var sW =$(window).width();
	    var sH = sW*566/823;

		$('#vimeo iframe').css({
				'width': $(window).width()*0.75,
				'height': $(window).width()*0.75*0.5625
		});

		$("img.lazy").lazyload({
    	effect : "fadeIn"
		});

		$('#header').css({
			'height': $(window).width()*8/16
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
			$('#vimeo iframe').css({
					'width': $(window).width()*0.75,
					'height': $(window).width()*0.75*0.5625
			});

	});


})(jQuery);
