/* carusel*/ 

const owl = $('.owl-carousel');
owl.owlCarousel({
		center: true,
		loop: true,
		margin: 20,
    items: 1,
    startPosition: 0,
		responsive : {
      640: {
        items: 3,
      },

			850 : {
				items: 3,
        startPosition: 1,
			},
			1200 : {
        items: 3,
				margin: 30,
			},
		},
});

$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})


$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
}) 

/* nav icon */

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');




navBtn.onclick = function() {
	nav.classList.toggle('nav--mobile');
	menuIcon.classList.toggle('menu-icon--active');
	document.body.classList.toggle('no-scroll');
}