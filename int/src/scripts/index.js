import '../styles/index.scss';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper-projets', {
	// Optional parameters
	slidesPerView: 1.5,
	spaceBetween: 40,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-projets-navigation.next',
		prevEl: '.swiper-projets-navigation.prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		640: {
			slidesPerView: 1.5,
			spaceBetween: 40
		},
		1280: {
			slidesPerView: 2.5,
			spaceBetween: 40
		}
	}
});