import 'bootstrap'

(function ($, Drupal) {
  Drupal.behaviors.main = {

	  attach(context, settings) {
		  const swiper = new Swiper('.swiper-projets', {
			  // Optional parameters
			  slidesPerView: 1.5,
			  spaceBetween: 40,

			  // Navigation arrows
			  navigation: {
				  nextEl: '.swiper-projets-navigation.next',
				  prevEl: '.swiper-projets-navigation.prev',
			  },
		  });
	  }

  };
})(jQuery, Drupal);
