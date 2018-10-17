'use strict';

var opt = {
	container: '.home-page__container'
};

function SliderInit () {
	$(document).ready(function () {
	  	var swiper = new Swiper (opt.container, {
			direction: 'vertical',
	    	slidesPerView: 1,
	    	effect: 'fade',
	  	});
	});
};

export { 
	SliderInit
};