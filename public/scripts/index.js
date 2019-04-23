'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
document.onkeydown = function (evt) {	evt = evt || window.event;	switch (evt.keyCode) {		case 37:			leftArrowPressed();			break;		case 38:			upArrowPressed();			break;		case 39:			rightArrowPressed();			break;		case 40:			downArrowPressed();			break;	}};const sections = [	"home",	"tandem",];const subSections = [	["Main"],	["Main", "Description", "Mobile"],];//adjustArrows();//document.getElementsByClassName('button left')[0].addEventListener('click', leftArrowPressed);//document.getElementsByClassName('button right')[0].addEventListener('click', rightArrowPressed);//document.getElementsByClassName('button up')[0].addEventListener('click', upArrowPressed);//document.getElementsByClassName('button down')[0].addEventListener('click', downArrowPressed);function downArrowPressed() {	let current = document.getElementsByClassName('section visible')[0];	if (sections.indexOf(current.id) < sections.length - 1) {		hide(current, 'above');		show(document.getElementById(getSectionID(current.id, "next")));		adjustArrows();	}}function upArrowPressed() {	let current = document.getElementsByClassName('section visible')[0];	if (sections.indexOf(current.id) > 0) {		hide(current, 'below');		show(document.getElementById(getSectionID(current.id, "prev")));		adjustArrows();	}}function rightArrowPressed() {	let current = document.getElementsByClassName('section visible')[0];	let iSection = sections.indexOf(current.id);	let currentSub = current.getElementsByClassName('visible')[0];	let iSubSection = subSections[iSection].indexOf(currentSub.dataset.subSection);	if (iSubSection < subSections[iSection].length - 1) {		pushSub('left');		adjustArrows();	}}function leftArrowPressed() {	let current = document.getElementsByClassName('section visible')[0];	let iSection = sections.indexOf(current.id);	let currentSub = current.getElementsByClassName('visible')[0];	let iSubSection = subSections[iSection].indexOf(currentSub.dataset.subSection);	if (iSubSection > 0) {		pushSub('right');		adjustArrows();	}}function adjustArrows() {	let current = document.getElementsByClassName('section visible')[0];	let iSection = sections.indexOf(current.id);	let currentSub = current.getElementsByClassName('visible')[0];	let iSubSection = subSections[iSection].indexOf(currentSub.dataset.subSection);	setArrow("up", iSection > 0);	setArrow("down", iSection < sections.length - 1);	setArrow("left", iSubSection > 0);	setArrow("right", iSubSection < subSections[iSection].length - 1);}function setArrow(direction, status) {	let current = document.getElementsByClassName(`button ${direction}`)[0]	current.style.opacity = status ? "1" : "0";}function getSectionID(section, direction) {	let i = sections.indexOf(section);	switch (direction) {		case "prev":			return sections[i - 1];		case "next":			return sections[i + 1];		case "left":			return sections[i + 1];		case "right":			return sections[i + 1];	}}function hide(el, where) {	el.classList.remove('visible');	el.classList.add(where);}function show(el) {	el.classList.add('visible');	el.classList.remove('above');	el.classList.remove('below');}function pushSub(direction) {	let currentSub = document.querySelectorAll(`.visible .visible[data-sub-section]`)[0];	let newSub = currentSub[direction == 'left' ? 'nextElementSibling' : 'previousElementSibling'];	currentSub.classList.remove('visible');	currentSub.classList.add(direction);	currentSub.classList.add('hidden');	newSub.classList.add('visible');	newSub.classList.remove('left');	newSub.classList.remove('hidden');	newSub.classList.remove('right');}document.addEventListener('mousewheel', scrollHandler, false);let prevdeltaY = 0;let prevdeltaX = 0;let maxReached = 0;function scrollHandler(e) {	//console.log(e);	if (e.deltaY < -100 &&		e.deltaY < prevdeltaY &&		e.deltaY * e.deltaY > e.deltaX * e.deltaX &&		!maxReached) {		upArrowPressed();		maxReached = true;	} else if (e.deltaY > 100 &&		e.deltaY > prevdeltaY &&		e.deltaY * e.deltaY > e.deltaX * e.deltaX &&		!maxReached) {		downArrowPressed();		maxReached = true;	}	else if (e.deltaX < -100 &&		e.deltaX < prevdeltaX &&		e.deltaX * e.deltaX > e.deltaY * e.deltaY &&		!maxReached) {		leftArrowPressed();		maxReached = true;	} else if (e.deltaX > 100 &&		e.deltaX > prevdeltaX &&		e.deltaX * e.deltaX > e.deltaY * e.deltaY &&		!maxReached) {		rightArrowPressed();		maxReached = true;	}	prevdeltaY = e.deltaY;	prevdeltaX = e.deltaX;	if (maxReached) { maxReachedF(); }	function maxReachedF() {		if (prevdeltaY * prevdeltaY > 10 || prevdeltaX * prevdeltaX > 10) {			maxReached = true;			setTimeout(() => {				maxReachedF();			}, 100);		} else {			console.log("FREED")			console.log(e);			maxReached = false;		}	}}
*/

function load() {
	var html = document.getElementsByTagName('html')[0];
	html.classList.add('noAnimation');
	setTheme();

	scrollToNextSection();
	var menuItem = document.querySelectorAll('[data-menu-item="' + location.hash.substr(1) + '"]')[0];
	if (menuItem) {
		setActiveMenuItem(menuItem);
		activateMenuItem(menuItem);
	}
	setMenuEvents();
	window.requestAnimationFrame(function () {
		html.classList.remove('noAnimation');
		window.requestAnimationFrame(function () {
			html.style.opacity = 1;
		});
	});
}
load();

function setTheme() {
	var html = document.getElementsByTagName('html')[0];
	if (!window.matchMedia) {
		html.dataset.theme = "light";
	} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		html.dataset.theme = "dark";
	} else {
		html.dataset.theme = "light";
	}

	var themeToggle = document.getElementById('dayNightToggle');
	themeToggle.addEventListener('click', function () {
		if (html.dataset.theme === 'dark') {
			html.dataset.theme = 'light';
		} else {
			html.dataset.theme = 'dark';
		}
	});
}

function setMenuEvents() {
	setMenuSelectionEvents();
	setCloseMenuWhenClickedAway();
	setHamburgerIconEvents();

	function setMenuSelectionEvents() {
		// Open and close the relevant menu items when items and arrows are clicked
		document.querySelectorAll("nav#menu [data-menu-item]").forEach(function (menuItem) {
			menuItem.addEventListener("click", function (e) {
				if ((menuItem.classList.contains("header") || e.target.tagName !== "DIV") && menuItem.classList.contains("active")) {
					setActiveMenuItem();
				} else if (e.target.tagName !== "DIV" && !menuItem.classList.contains("active")) {
					setActiveMenuItem(menuItem);
				} else if (menuItem.classList.contains("header")) {
					setActiveMenuItem(menuItem);
					activateMenuItem(menuItem);
					setHash(menuItem);
				} else if (menuItem.classList.contains("sub") && !menuItem.classList.contains("active")) {
					setActiveMenuItem(menuItem);
					activateMenuItem(menuItem);
					setHash(menuItem);
				}
			});
		});
	}

	function setCloseMenuWhenClickedAway() {
		// Hide the collapsabile mobile menu when clicked away from
		document.querySelectorAll('body').forEach(function (body) {
			body.addEventListener("click", hideMenu);
			body.addEventListener("scroll", hideMenu);
			body.addEventListener("touchmove", hideMenu);
			function hideMenu(e) {
				var nav = document.getElementById('menu');
				var alreadyHidden = nav.classList.contains('hidden');
				var withinMenu = e.target.closest('nav#menu') !== null;
				var withinHamburger = e.target.closest('.hamburger') !== null;
				if (!(withinMenu || withinHamburger) && !alreadyHidden) {
					document.getElementById('menu').classList.add('hidden');
					setTitleStatus();
				}
			}
		});
	}
	function setHamburgerIconEvents() {
		// Set the open and close events for the hamburger icon
		document.querySelectorAll('header .titleBar .hamburger').forEach(function (hamburger) {
			hamburger.addEventListener("click", function (e) {
				var nav = document.querySelectorAll('header nav')[0];
				if (nav.classList.contains('hidden')) {
					nav.classList.remove('hidden');
				} else {
					nav.classList.add('hidden');
				}
				setTitleStatus();
			});
		});
	}
}

function setTitleStatus() {
	var title = document.querySelectorAll('header .titleBar .title')[0];
	var navHidden = document.querySelectorAll('header nav.hidden');
	var homePage = document.querySelectorAll('main article[data-article="James Jordan"].active section[data-section="Main"].active');

	if (navHidden.length === 0 || homePage.length === 1) {
		title.classList.add('hidden');
	} else if (navHidden.length === 1 && homePage.length === 0) {
		title.classList.remove('hidden');
	}
}

function activateMenuItem(menuItem) {
	console.log(menuItem.dataset.menuItem);

	//Determine Variables
	var sectionName = menuItem.dataset.menuItem;
	var articleName = menuItem.parentNode.querySelectorAll('.header')[0].dataset.menuItem;
	if (sectionName === articleName) sectionName = "Main";

	var chosenArticle = document.querySelectorAll('article[data-article="' + articleName + '"]')[0];
	var chosenSection = document.querySelectorAll('article[data-article="' + articleName + '"] section[data-section="' + sectionName + '"]')[0];

	var menuItems = document.querySelectorAll('nav [data-menu-item]');
	var iChosenSection = [].concat(_toConsumableArray(menuItems)).indexOf(menuItem);
	var iChosenArticle = [].concat(_toConsumableArray(menuItems)).indexOf(menuItem.parentNode.querySelectorAll('.header')[0]);

	document.querySelectorAll('article').forEach(function (article) {
		article.classList.remove('active');
		var iCurrentArticle = [].concat(_toConsumableArray(menuItems)).indexOf([].concat(_toConsumableArray(menuItems)).find(function (el) {
			return el.dataset.menuItem === article.dataset.article;
		}));

		if (iChosenArticle > iCurrentArticle) {
			article.classList.add('hiddenAbove');
		} else if (iChosenArticle < iCurrentArticle) {
			article.classList.add('hiddenBelow');
		} else if (iChosenArticle === iCurrentArticle) {}
		slideSections(article.dataset.article);
	});

	function slideSections(articleName) {
		document.querySelectorAll('article[data-article="' + articleName + '"] section').forEach(function (section) {
			var iCurrentSection = [].concat(_toConsumableArray(menuItems)).indexOf([].concat(_toConsumableArray(menuItems)).find(function (el) {
				if (section.dataset.section === "Main") {
					return el.dataset.menuItem === section.parentNode.dataset.article;
				} else {
					return el.dataset.menuItem === section.dataset.section;
				}
			}));
			resetHiddens(section);

			if (iChosenSection > iCurrentSection) {
				section.classList.add('hiddenLeft');
				if (!section.classList.contains('active')) {
					//section.classList.add('noAnimation');
					//requestAnimationFrame(function () {
					//	section.classList.remove('noAnimation')
					//});
				}
			} else if (iChosenSection < iCurrentSection) {
				section.classList.add('hiddenRight');
				if (!section.classList.contains('active')) {
					//section.classList.add('noAnimation');
					//requestAnimationFrame(function () {
					//	section.classList.remove('noAnimation')
					//});
				}
			}
			section.classList.remove('active');
		});
	}

	chosenArticle.classList.add('active');
	resetHiddens(chosenArticle);

	chosenSection.classList.add('active');
	resetHiddens(chosenSection);

	function resetHiddens(el) {
		el.classList.remove('hiddenBelow', 'hiddenAbove', 'hiddenLeft', 'hiddenRight');
	}
}
function setActiveMenuItem(menuItem) {
	document.querySelectorAll("nav#menu .active").forEach(function (activeMenuItem) {
		activeMenuItem.classList.remove("active");
	});
	if (typeof menuItem !== "undefined") {
		menuItem.classList.add("active");
		menuItem.parentNode.classList.add("active");
	}
}

function setHash(menuItem) {
	location.hash = '#' + menuItem.dataset.menuItem;
}

function locationHashChanged() {
	if (location.hash === '#cool-feature') {
		console.log("You're visiting a cool feature!");
	}
}

window.onhashchange = locationHashChanged;

function scrollToNextSection() {
	var scrolling = false;
	document.querySelectorAll('section').forEach(function (sectiona) {
		//section.addEventListener(scroll, (e) => {
		//	console.log(e);
		//	if (!scrolling) {
		//		scrolling = true;
		//		window.requestAnimationFrame(function () {
		//			scrolling = false;
		//		})
		//	}
		//})
		var startPositionB = null;
		sectiona.addEventListener("scroll", scrollNext);
		function scrollNext(e) {
			if (!scrolling) {
				console.log(e);
				if (startPositionB == null) startPositionB = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
				window.requestAnimationFrame(function () {
					scrolling = false;
				});
				console.log(startPositionB);
			}
			scrolling = true;
		}
	});
}
