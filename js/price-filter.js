/***************** price-filter ********************/
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