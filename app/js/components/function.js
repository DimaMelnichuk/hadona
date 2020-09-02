$(function(){

	/***************** main-slider ********************/
	$('.main-slider').slick({
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
				arrows: false,
				autoplay: true,
  				autoplaySpeed: 2000,
				}
			}
			]
	});

	/***************** featured__slider big ********************/
	$('.featured__slider--b').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1500,
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
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			]
	});

	/***************** featured__slider small ********************/
	$('.featured__slider--sm').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1300,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 1165,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 1000,
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
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			},
			]
	});
	
	/***************** testimonials__slider ********************/
	$('.testimonials__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 801,
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
				breakpoint: 900,
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

	$('.featured-product__slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1480,
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
					slidesToShow: 2,
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
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 450,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
			]
	});

	$('.popular-product__slider').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: true,
		/* asNavFor: '.slider-for', */
		responsive: [
			{
				breakpoint: 1750,
				settings: {
					slidesToShow: 7,
				}
			},
			{
				breakpoint: 1330,
				settings: {
					slidesToShow: 6,
				}
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 1030,
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
					slidesToShow: 4,
					arrows: false,
				}
			},
			{
				breakpoint: 650,
				settings: {
					slidesToShow: 3,
					arrows: false,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					arrows: false,
				}
			},
			{
				breakpoint: 350,
				settings: {
					slidesToShow: 1,
					arrows: false,
				}
			}
			]
	});

	$('.slider-grid').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					dots: false,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			}
			]
	});

	$('.cart-detail__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		asNavFor: '.cart-detail__box',
	});

	$('.cart-detail__box').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		asNavFor: '.cart-detail__slider',
	});


   $(".cart__body-shuffle").click(function(event){
		$(this).toggleClass("active");
	});

   $(".cart__body-like").click(function(event){
		$(this).toggleClass("active");
	});

	/***************** checkmark ********************/
/* 	$('.checkmark').on('click', function(event) {
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('active');
		return false;
	}); */

	/***************** Mobile-menu-sidebar ********************/
	$(".sidebar-nav__item-dropdown").click(function(e){
		e.preventDefault();
		if($(".sidebar-nav__item-dropdown").hasClass("active")){
			$(".sidebar-nav__item-dropdown").not($(this)).removeClass("active");
		}
		$(this).toggleClass("active");
	});

	/***************** Mobile-menu ********************/
	$(".menu__item-dropdown").click(function(e){
		e.preventDefault();
		if($(".menu__item-dropdown").hasClass("active")){
			$(".menu__item-dropdown").not($(this)).removeClass("active");
		}
		$(this).toggleClass("active");
	});

/***************** special-product ********************/
	$('.special-product__colors-color').click(function(){
	$(".special-product__colors-color").removeClass("active");
	$(this).addClass("active");
	$("body").css("background",$(this).attr("data-color"));
	$(".special-product__image").css("background-image",$(this).attr("data-pic"));
	});

	/***************** Сounter ********************/
	$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
	$('.quantity').each(function() {
	  var spinner = $(this),
		 input = spinner.find('input[type="number"]'),
		 btnUp = spinner.find('.quantity-up'),
		 btnDown = spinner.find('.quantity-down'),
		 min = input.attr('min'),
		 max = input.attr('max');

	  btnUp.click(function() {
		 var oldValue = parseFloat(input.val());
		 if (oldValue >= max) {
			var newVal = oldValue;
		 } else {
			var newVal = oldValue + 1;
		 }
		 spinner.find("input").val(newVal);
		 spinner.find("input").trigger("change");
	  });

	  btnDown.click(function() {
		 var oldValue = parseFloat(input.val());
		 if (oldValue <= min) {
			var newVal = oldValue;
		 } else {
			var newVal = oldValue - 1;
		 }
		 spinner.find("input").val(newVal);
		 spinner.find("input").trigger("change");
	  });

	});
 
	/***************** Tab-menu ********************/
	$(".tabs__container:first").show()
	$(".tabs__nav li:first").addClass('active');

	$(".tabs__nav li").click(function(event) {
	index = $(this).index();
	$(".tabs__nav li").removeClass('active');
	$(this).addClass('active');
	$('.tabs__container').hide();
	$('.tabs__container').eq(index).show();
	});

	 /***************** Add active for setting__currency-link ********************/
	$('.setting__currency-link').click(function() {
		$('.setting__currency-link').removeClass('active');
		$(this).addClass('active')
	});

	/***************** Add active for  setting__lang-link ********************/
	$('.setting__lang-link').click(function() {
		$('.setting__lang-link').removeClass('active');
		$(this).addClass('active')
	});


});




/***************** featured-tabs ********************/
document.querySelectorAll('.featured-tabs__title-item').forEach((item) =>
	item.addEventListener('click', function (e) {
		e.preventDefault();
		const id = e.target.getAttribute('href').replace('#', '');

		document.querySelectorAll('.featured-tabs__title-item').forEach(
			(child) => child.classList.remove('featured-tabs__title-item--active')
		);
		document.querySelectorAll('.featured-tabs__content-item').forEach(
			(child) => child.classList.remove('featured-tabs__content-item--active')
		);

		item.classList.add('featured-tabs__title-item--active');
		document.getElementById(id).classList.add('featured-tabs__content-item--active');
	})
);


/***************** Menu-wallet ********************/
let wallet_icon = document.querySelector('.basket__wallet-icon');
let wallet_menu = document.querySelector('.wallet');
let wallet_lock = document.querySelector('body');
wallet_icon.addEventListener("click", function (e) {
	wallet_menu.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.basket__wallet')) {
		wallet_menu.classList.remove('active');
	}
});

wallet_icon.addEventListener("click", function (e) {
	wallet_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.basket__wallet')) {
		wallet_icon.classList.remove('active');
	}
});
/***************** Menu-setting ********************/
let setting_icon = document.querySelector('.basket__setting-icon');
let setting_menu = document.querySelector('.setting');
let setting_lock = document.querySelector('body');
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

search_icon.addEventListener("click", function (e) {
	search_icon.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.menu__item-search')) {
		search_icon.classList.remove('active');
	}
});
/***************** Menu-burger ********************/
let menu_burger = document.querySelector('.menu__burger');
let menu = document.querySelector('.menu');
menu_burger.addEventListener("click", function (e) {
	menu.classList.toggle('active');
	menu_burger.classList.toggle('active');
});

document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header__menu-inner')) {
		menu_burger.classList.remove('active');
	}
});
document.documentElement.addEventListener("click", function (e) {
	if (!e.target.closest('.header__menu-inner')) {
		menu.classList.remove('active');
	}
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



const filterPrice = document.querySelector('.price-filter__slider');

noUiSlider.create(filterPrice, {
	 start: [1000, 10000],
	 connect: true,
    range: {
        'min': [0],
        'max': [15000]
    }
});

const priceStart = document.getElementById("filter-price__start");
const priceEnd = document.getElementById("filter-price__end");
priceStart.addEventListener('change', setPriceValues);
priceEnd.addEventListener('change', setPriceValues);

function setPriceValues() {
	let priceStartValue;
	let priceEndValue;
	if (priceStart.value !='') {
		priceStartValue = priceStart.value;
	}
	if (priceEnd.value !='') {
		priceEndValue = priceEnd.value;
	}
	filterPrice.noUiSlider.set([priceStartValue, priceEndValue]);
} 

var snapValues = [
   document.getElementById('filter-price__start'),
   document.getElementById('filter-price__end')
];
filterPrice.noUiSlider.on('update', function (values, handle) {
	snapValues[handle].value = values[handle];
});