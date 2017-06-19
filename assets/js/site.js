var menu = [{
	"name": "Work",
	"url": "/Work",
	"active": false,
	"subLinks": [{
		"name": "Developer Work",
		"url": "/Work/Developer",
		"active": false,
	}, {
		"name": "Volunteer Work",
		"url": "/Work/Volunteer",
		"active": false,
	}, ]
}, {
	"name": "Opinion",
	"url": "/Opinion",
	"active": false,
	"subLinks": [{
		"name": "Music",
		"url": "/Opinion/Music",
		"active": false,
	}, {
		"name": "Film & TV",
		"url": "/Opinion/FilmTV",
		"active": false,
	}, {
		"name": "Travel",
		"url": "/Opinion/Travel",
		"active": false,
	}, ]
}, {
	"name": "Code Snippets",
	"url": "/CodeSnippets",
	"active": false,
	"subLinks": [{
		"name": "Javascript",
		"url": "/CodeSnippets/Javascript",
		"active": false,
	}, {
		"name": "HTML",
		"url": "/CodeSnippets/HTML",
		"active": false,
	}, {
		"name": "jQuery",
		"url": "/CodeSnippets/jQuery",
		"active": false,
	}, ]
}, ];
$(document).ready(function () {
	console.log("ready!");
	for (i = 0; i < menu.length; i++) {
		var menuitem = menu[i];
		$(".menu").append('<a class="subheader ' + (!menuitem.active ? "not-active" : "") + '" href="' + menuitem.url + '">' + menuitem.name + '</a>');
		for (j = 0; j < menuitem.subLinks.length; j++) {
			$(".menu").append('<a class="menuitem ' + (!menuitem.subLinks[j].active ? "not-active" : "") + '" href="' + menuitem.subLinks[j].url + '">' + menuitem.subLinks[j].name + '</a>');
		}
	}
});