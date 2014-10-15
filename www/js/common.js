$(document).ready(function () {
	var index = 1;
	var height = 0;
	
	$('.top, .bottom').click(function () {
		if ( $(this).attr('id') == 'down' ) {
			if ( index < $('.list').length) {
				index++;
				height += $(window).height()
				$('#slider').animate({bottom : + height + 'px'}, 1000);
			};
		} else {
			if ( index > 1 ) {
				index--;
				height -= $(window).height()
				$('#slider').animate({bottom : + height + 'px'}, 1000);
			};
		};
		
		if ( index == 1 ) {
			$('.footer').fadeOut();
			$('.top').fadeOut();
		} else {
			$('.footer').fadeIn();
			$('.top').fadeIn();
		}
		
		if ( index == $('.list').length ) {
			$('.bottom').fadeOut();
			//$('.footer').fadeOut();
		} else {
			$('.bottom').fadeIn();
		}
	});
});