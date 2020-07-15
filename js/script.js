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
		responsive: [
			{
				breakpoint: 1500,
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
				breakpoint: 1500,
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

/***************** special-product ********************/
	$('.special-product__colors-color').click(function(){
	$(".special-product__colors-color").removeClass("active");
	$(this).addClass("active");
	$("body").css("background",$(this).attr("data-color"));
	$(".special-product__image").css("background-image",$(this).attr("data-pic"));
	});

	 /***************** checkmark ********************/
	 $('.checkmark').on('click', function(event) {
		if($(this).hasClass('active')){
			$(this).find('input').prop('checked',false);
		}else{
			$(this).find('input').prop('checked',true);
		}
		$(this).toggleClass('active');
		return false;
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
let menu_lock = document.querySelector('body');
menu_burger.addEventListener("click", function (e) {
	menu.classList.toggle('active');
	menu_burger.classList.toggle('active');
	menu_lock.classList.toggle('lock');
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
//Объявляем переменные
const parent_original = document.querySelector('.menu__item-search');
const parent = document.querySelector('.header__container');
const item = document.querySelector('.content__block_item');

//Слушаем изменение размера экрана
window.addEventListener('resize', move);

//Функция
function move(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 1060) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[1]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item, parent_original.children[0]);
			item.classList.remove('done');
		}
	}
}

//Вызываем функцию
move();


$(function(){

   /***************** Accordion ********************/
   $(".accordion__item-title").click(function(event){
      if($(".accordion__item-title").hasClass("accordion__item-title--active")){
        $(".accordion__item-title").not($(this)).removeClass("accordion__item-title--active");
        $(".accordion__item-info").not($(this).next()).slideUp(300);
      }
      $(this).toggleClass("accordion__item-title--active").next().slideToggle(300);
   });

});
const ratingItemList = document.querySelectorAll(".cart__rating-item");
const ratingItemArray = Array.prototype.slice.call(ratingItemList);

ratingItemArray.forEach(item => 
	item.addEventListener('click', () => {
		const { itemValue } = item.dataset;
		item.parentNode.dataset.totalValue = itemValue;

		// request itemValue
	})
	
);
function getTimeRemaining(endtime) {
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor((t / 1000) % 60);
	var minutes = Math.floor((t / 1000 / 60) % 60);
	var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	return {
	  'total': t,
	  'days': days,
	  'hours': hours,
	  'minutes': minutes,
	  'seconds': seconds
	};
 }
  
 function initializeClock(id, endtime) {
	var clock = document.getElementById(id);
	var daysSpan = clock.querySelector('.days');
	var hoursSpan = clock.querySelector('.hours');
	var minutesSpan = clock.querySelector('.minutes');
	var secondsSpan = clock.querySelector('.seconds');
  
	function updateClock() {
	  var t = getTimeRemaining(endtime);
  
	  daysSpan.innerHTML = t.days;
	  hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	  minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	  secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
	  if (t.total <= 0) {
		 clearInterval(timeinterval);
	  }
	}
  
	updateClock();
	var timeinterval = setInterval(updateClock, 1000);
 }
  
 var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000); // for endless timer
 initializeClock('countdown', deadline);
 var deadline_1 = new Date(Date.parse(new Date()) + 30 * 24 * 60 * 60 * 1000); // for endless timer
 initializeClock('countdown_1', deadline_1);
const colors = document.querySelectorAll('.cart-detail__colors-color');
const shoes = document.querySelectorAll('.cart-detail__img');

let prevColor = "blue";
let animationEnd = true;

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}


function changeColor(){
    if(!animationEnd) return;
	 let primary = this.getAttribute('primary');
	 let color = this.getAttribute('color');
	 let shoe = document.querySelector(`.card__img[color="${color}"]`);

    if(color == prevColor) return;

    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');

    document.documentElement.style.setProperty('--primary', primary);
    
    shoes.forEach(s => s.classList.remove('show'));
    shoe.classList.add('show');

    gradients.forEach(g => g.classList.remove('first', 'second'));
    gradient.classList.add('first');
    prevGradient.classList.add('second');

    prevColor = color;
    animationEnd = false;

    gradient.addEventListener('animationend', () => {
        animationEnd = true;
    })
}

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(c => c.addEventListener('click', changeColor));

let x = window.matchMedia("(max-width: 1000px)");

function changeHeight(){
    if(x.matches){
        let shoeHeight = shoes[0].offsetHeight;
        shoeBg.style.height = `${shoeHeight * 0.9}px`;
    }
    else{
        shoeBg.style.height = "475px";
    }
}

changeHeight();

window.addEventListener('resize', changeHeight);