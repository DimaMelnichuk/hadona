//Объявляем переменные
const parent_original = document.querySelector('.menu__item-search');
const parent = document.querySelector('.header__container');
const item = document.querySelector('.content__block_item');

//Слушаем изменение размера экрана
window.addEventListener('resize', move);

//Функция
function move(){
	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	if (viewport_width <= 991.98) {
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

