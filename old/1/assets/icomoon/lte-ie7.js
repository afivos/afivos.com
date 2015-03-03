/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-dribbble' : '&#xe000;',
			'icon-twitter' : '&#xe001;',
			'icon-briefcase' : '&#xe005;',
			'icon-camera' : '&#xe006;',
			'icon-envelope' : '&#xe003;',
			'icon-email' : '&#xe002;',
			'icon-camera-2' : '&#xe004;',
			'icon-portfolio' : '&#xe007;',
			'icon-anchor' : '&#xe008;',
			'icon-google-plus' : '&#xe009;',
			'icon-googleplus' : '&#xe00a;',
			'icon-download' : '&#xe00b;',
			'icon-facebook' : '&#xe00c;',
			'icon-facebook-2' : '&#xe00d;',
			'icon-home' : '&#xe00e;',
			'icon-flickr' : '&#xe00f;',
			'icon-flickr-2' : '&#xe010;',
			'icon-tumblr' : '&#xe011;',
			'icon-flickr-3' : '&#xe013;',
			'icon-flickr-4' : '&#xe014;',
			'icon-tumblr-2' : '&#xe012;',
			'icon-tumblr-3' : '&#xe015;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};