$(function() {

	$('.top-line__menu').mmenu({
		extensions: [
			'pagedim-black',
			'fx-menu-slide',
			'fx-panels-slide-up',
			'fx-listitems-slide',
			'theme-dark'
	 ],
	}, {
		clone: true
	});

	var api = $('.top-line__menu').data( 'mmenu' );
	
	api.bind( 'open:start', function() {
		$('.my-hamburger').addClass('is-active');
	});
	api.bind( 'close:after', function() {
		$('.my-hamburger').removeClass('is-active');
	});

	$('.my-hamburger, .mm-listitem').click(function() {
		if($('.top-line__menu').hasClass('mm-menu_opened')) {
			api.close();
		} else{
			api.open();
		}
	});

	$('.setlang__default').click(function() {
		if($('.setlang__languages').hasClass('setting__languages-active')) {
			$('.setlang__languages').removeClass('setting__languages-active');
			$('.setlang__default').removeClass('lang-click');
			$('.mm-panels').removeClass('hidden');
		} else {
			$('.setlang__languages').addClass('setting__languages-active');
			$('.setlang__default').addClass('lang-click');
			$('.mm-panels').addClass('hidden');
		}
	});

	$(document).on('click', function(e) {
		if (!$(e.target).closest('.setlang').length) {
			$('.setlang__languages').removeClass('setting__languages-active');
			$('.setlang__default').removeClass('lang-click');
		}
		e.stopPropagation();
	});
	
	$(document).ready(function() {
		$('#fullpage').fullpage({
			navigation: true,
			navigationPosition: 'left',
			autoScrolling: false,
			fitToSection: false
		});
	});

	//start slowScroll
	function slowScroll (id) {
		var offset = 0;
		$('html, body').animate({
			scrollTop :$(id).offset ().top - offset}, 500);
		return false;
	}
	//close slowScroll

	$('.menu-list__item').click(function() {
		slowScroll($(this).find('a').attr('href'));
	});

});
let product = document.querySelectorAll('.products-list__item');
for(let i = 0; i < product.length; i++) {
	let item = product[i].querySelector('.section-num__text');
	if(i + 1 < 10) {
		$(item).text('0' + (i+1));
	}
	if (i + 1 >= 10) {
		$(item).text(i + 1);
	}
}
//start preloader
document.body.onload = function() {
	setTimeout(function() {
		$('.loader-cnt').fadeOut('slow');
		$('#fp-nav').fadeIn('slow');
	}, 2000);
}
//end preloader