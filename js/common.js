window.onload = function() {
	//Тоторо
	particlesJS.load('particles-js', './assests/particles/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});

//Градиентный анимационный фон
var
degress = 0
timer = setInterval(function(){
	degress++;
	jQuery('body').css('background-image','linear-gradient(' + degress + 'deg, #EDEDED, #36A6C8')
},10000/360);

//Скрытие меню при скролле
$("#nav").autoHidingNavbar({
	showOnBottom: false,
	animationDuration: 700
});

//Поиск на мобильных
$("#searchbutton").click(function() {
	$("#searchform").toggle("slow","easeInOutCirc");
});

new WOW().init(); //инициализация плагина для анимации при скролле



};
$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut("fast"); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})