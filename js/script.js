document.onkeydown = function (evt) {
	evt = evt || window.event;
	switch (evt.keyCode) {
		case 37:
			leftArrowPressed();
			break;
		case 38:
			upArrowPressed();
			break;
		case 39:
			rightArrowPressed();
			break;
		case 40:
			downArrowPressed();
			break;
	}
};
const sections = [
	"home",
	"tandem",
	
];
const subSections = [
	["Main"],
	["Main", "Description", "Mobile"],
	
];
adjustArrows();
document.getElementsByClassName('button left')[0].addEventListener('click',leftArrowPressed);
document.getElementsByClassName('button right')[0].addEventListener('click',rightArrowPressed);
document.getElementsByClassName('button up')[0].addEventListener('click',upArrowPressed);
document.getElementsByClassName('button down')[0].addEventListener('click',downArrowPressed);

function downArrowPressed() {
	let current = document.getElementsByClassName('section visible')[0];
	if (sections.indexOf(current.id) < sections.length - 1) {
		hide(current, 'above');
		show(document.getElementById(getSectionID(current.id, "next")));
		adjustArrows();
	}
}

function upArrowPressed() {
	let current = document.getElementsByClassName('section visible')[0];
	if (sections.indexOf(current.id) > 0) {
		hide(current, 'below');
		show(document.getElementById(getSectionID(current.id, "prev")));
		adjustArrows();
	}
}

function rightArrowPressed() {
	let current = document.getElementsByClassName('section visible')[0];
	let iSection = sections.indexOf(current.id);
	let currentSub = current.getElementsByClassName('visible')[0];
	let iSubSection = subSections[iSection].indexOf(currentSub.dataset.subSection);
	if (iSubSection < subSections[iSection].length - 1) {
		pushSub('left');
		adjustArrows();
	}
}

function leftArrowPressed() {
	let current = document.getElementsByClassName('section visible')[0];
	let iSection = sections.indexOf(current.id);
	let currentSub = current.getElementsByClassName('visible')[0];
	let iSubSection = subSections[iSection].indexOf(currentSub.dataset.subSection);
	if (iSubSection > 0) {
		pushSub('right');
		adjustArrows();
	}
}

function adjustArrows() {
	let current = document.getElementsByClassName('section visible')[0];
	let iSection = sections.indexOf(current.id);
	let currentSub = current.getElementsByClassName('visible')[0];
	let iSubSection = subSections[iSection].indexOf(currentSub.dataset.subSection);
	setArrow("up", iSection > 0);
	setArrow("down", iSection < sections.length - 1);
	setArrow("left", iSubSection > 0);
	setArrow("right", iSubSection < subSections[iSection].length - 1);
}

function setArrow(direction, status) {
	let current = document.getElementsByClassName(`button ${direction}`)[0]
	current.style.opacity = status ? "1" : "0";
}

function getSectionID(section, direction) {
	let i = sections.indexOf(section);
	switch (direction) {
		case "prev":
			return sections[i - 1];
		case "next":
			return sections[i + 1];
		case "left":
			return sections[i + 1];
		case "right":
			return sections[i + 1];
	}
}

function hide(el, where) {
	el.classList.remove('visible');
	el.classList.add(where);
}

function show(el) {
	el.classList.add('visible');
	el.classList.remove('above');
	el.classList.remove('below');
}

function pushSub(direction) {
	let currentSub = document.querySelectorAll(`.visible .visible[data-sub-section]`)[0];
	let newSub = currentSub[direction == 'left' ? 'nextElementSibling' : 'previousElementSibling'];
	currentSub.classList.remove('visible');
	currentSub.classList.add(direction);
	currentSub.classList.add('hidden');
	newSub.classList.add('visible');
	newSub.classList.remove('left');
	newSub.classList.remove('hidden');
	newSub.classList.remove('right');
}

document.addEventListener('mousewheel', scrollHandler, false);
let prevWheelDelta = 0;
let maxReached = 0;
function scrollHandler(e) {
	if (e.wheelDelta < 0 && e.wheelDelta < prevWheelDelta && !maxReached) {
		maxReached = true;
		setTimeout(() => {
			maxReached = false;
		}, 2000);
		downArrowPressed();
	} else if (e.wheelDelta > 0 && e.wheelDelta > prevWheelDelta && !maxReached) {
		maxReached = true;
		setTimeout(() => {
			maxReached = false;
		}, 2000);
		upArrowPressed();
	}
	prevWheelDelta = e.wheelDelta;

}