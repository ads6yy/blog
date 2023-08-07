import Headroom from "headroom.js";

(function ($, Drupal) {
	Drupal.behaviors.headerHeadroom = {
		attach(context, settings) {
			// grab an element
			const myElement = document.querySelector("header");
			// construct an instance of Headroom, passing the element
			const headroom  = new Headroom(myElement);
			// initialise
			headroom.init();
		}
	};
})(jQuery, Drupal);