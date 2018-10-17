'use strict';

import { ChangeHamburger } from "./Header.js"

var opt = {
	container: '.home-page__container',
	return: '.js-return' 
};

var swiperObj;

function SliderTo (index) {
	swiperObj.slideTo( index );
};

function SliderInit () {
	$(document).ready(function () {
			// Инициализация слайдера
	  	var swiper = new Swiper (opt.container, {
			direction: 'vertical',
	    	slidesPerView: 1,
	    	effect: 'fade',
	    	keyboard: true,
	    	simulateTouch: false
	  	});

	  	swiperObj = swiper;

	  		// Меняем цвет гамбургера исходя из текущего слайдера
		swiper.on('slideChange', function (e) {
		  	ChangeHamburger(this.activeIndex);
		});

			// Возврат на первый слайд при клике на блок возврата в footer
		$(opt.return).click(function() {
		    swiper.slideTo( 0 );
		});
	});
};

export { 
	SliderInit,
	SliderTo
};