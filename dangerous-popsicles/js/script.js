(function($){
	var more_status = 0;

	$(document).ready(function(){
	    var sW =$(window).width();
	    var sH = sW*566/823;

		$("img.lazy").lazyload({
    	effect : "fadeIn"
		});

		$('#header').css({
			'height': sW*9/16,
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


})(jQuery);
