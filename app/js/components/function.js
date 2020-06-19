$(function(){

	$('.main-slider').slick({
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
				arrows: false,
				}
			}
			]
	});

	$('.featured__slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 3,
					arrows: false,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			},
			]
	});

	$('.testimonials__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
				}
			}
			]
	});

	$('.news__slider').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
			]
	});


   $(".cart__body-shuffle").click(function(event){
		$(this).toggleClass("active");
	});

   $(".cart__body-like").click(function(event){
		$(this).toggleClass("active");
	});

/***************** Name ********************/
	$('.special-product__colors-color').click(function(){
	$(".special-product__colors-color").removeClass("active");
	$(this).addClass("active");
	$("body").css("background",$(this).attr("data-color"));
	$(".special-product__image").css("background-image",$(this).attr("data-pic"));
	});

	$('.wallet__cart-close').click(function() {
		$("#wallet__cart_1").remove();
	 });  
 
});



let wallet_icon = document.querySelector('.basket__wallet-icon');
let wallet_menu = document.querySelector('.wallet');
wallet_icon.addEventListener("click", function (e) {
	wallet_menu.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.basket__wallet')) {
		wallet_menu.classList.remove('active');
	}
});
/***************** Menu-setting ********************/
let setting_icon = document.querySelector('.basket__setting-icon');
let setting_menu = document.querySelector('.setting');
setting_icon.addEventListener("click", function (e) {
	setting_menu.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.basket__setting')) {
		setting_menu.classList.remove('active');
	}
});

setting_icon.addEventListener("click", function (e) {
	setting_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.basket__setting')) {
		setting_icon.classList.remove('active');
	}
});

/***************** Menu-search ********************/
let search_icon = document.querySelector('.menu__link-btn');
let search_menu = document.querySelector('.search');
search_icon.addEventListener("click", function (e) {
	search_menu.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.menu__item-search')) {
		search_menu.classList.remove('active');
	}
});
/***************** Menu-burger ********************/
let menu_burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu');
menu_burger.addEventListener("click", function (e) {
	menu.classList.toggle('active');
	menu_burger.classList.toggle('active');
});

/***************** WebP ********************/
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
});

/***************** loaded ********************/
if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('loaded');
}

/***************** ibg adaptive inline bg ********************/
function ibg(){
	let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}		
	}
}
ibg();