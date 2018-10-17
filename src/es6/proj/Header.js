'use strict';

var opt = {
	hamburger: '.js-hamburger',
	menu: '.js-menu',
	white: "m--white",
	red: "m--red",
	blue: "m--blue",
	black: "m--black",
	active: "is-active"
};

var $hamburger = $(opt.hamburger),
	$menu = $(opt.menu);

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

function InitHeader () {
		// Открытие/закрытие меню
	$(opt.hamburger).click(function() {
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
};

export { 
	InitHeader,
	ChangeHamburger
};