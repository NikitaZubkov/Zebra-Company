'use strict';

import { SliderTo } from "./Slider.js"

var opt = {
	hamburger: '.js-hamburger',
	menu: '.js-menu',
	close: '.js-close',
	item: '.js-item',

	white: "m--white",
	red: "m--red",
	blue: "m--blue",
	black: "m--black",

	active: "is-active"
};

var $hamburger = $(opt.hamburger),
	$menu = $(opt.menu),
	$close = $(opt.close),
	$item = $(opt.item);

function _resetClassHamburger () {
	$hamburger.removeClass(opt.white);
	$hamburger.removeClass(opt.red);
	$hamburger.removeClass(opt.blue);
	$hamburger.removeClass(opt.black);
};

function ChangeHamburger (index) {
	_resetClassHamburger();

	switch(index) {
		case 0:
			$hamburger.addClass(opt.white);
			break;
		case 1:
			$hamburger.addClass(opt.red);
			break;
		case 2:
			$hamburger.addClass(opt.blue);
			break;
		case 3:
			$hamburger.addClass(opt.black);
			break;
	}
};

function _closeMenu () {
	var $obj = $(opt.hamburger);

	$menu.removeClass(opt.active);
	$obj.data("open", 0);
}

function InitHeader () {
		// Открытие/закрытие меню
	$hamburger.click(function() {
	    var $obj = $(this),
	    	openStatus = $obj.data("open");

	    if(openStatus) {
	    	$menu.removeClass(opt.active);
	    	$obj.data("open", 0);
	    } else {
	    	$menu.addClass(opt.active);
	    	$obj.data("open", 1);
	    }
	});

		// Закрытие меню
	$close.click(function() {
	    _closeMenu();
	});

		// Переход на определённый пункт меню
	$item.click(function() {
	    var $obj = $(this),
	    	index = $obj.data("index");

	    _closeMenu();
    	SliderTo(index)
	});
};

export { 
	InitHeader,
	ChangeHamburger
};