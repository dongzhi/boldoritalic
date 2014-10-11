(function($){

	$(document).ready(function(){
	    var sW =$(window).width();
	    var sH = sW*566/823;

		$("img.lazy").lazyload({
    	effect : "fadeIn"
		});

		$('#header').css({
			'height': sW*9/16,
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


})(jQuery);