//PRELOADER
$(window).on('load', function() { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({ 'overflow': 'visible' });
});
	$('.fotorama').fotorama({
		fit:'cover',
		width: '100%',
	  ratio: 16/7,
	  loop:true,
		autoplay:true,
	});
	new WOW().init();