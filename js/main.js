;(function () {

	'use strict';



	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function() {

		// if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		// }

	};

	var parallax = function() {
		$(window).stellar({
			horizontalScrolling: false,
			hideDistantElements: false,
			responsive: true

		});
	};

	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
		    loop: true,
		    margin: 0,
		    responsiveClass: true,
		    nav: false,
		    dots: true,
		    smartSpeed: 500,
		    autoHeight: true
		});
	};


	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});

				}, 100);

			}

		} , { offset: '85%' } );
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#counter-animate').length > 0 ) {
			$('#counter-animate').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);
					$(this.element).addClass('animated');

				}
			} , { offset: '90%' } );
		}
	};

	var burgerMenu = function() {

		$('.js-fh5co-nav-toggle').on('click', function(event){
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-aside, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');

	    	}

	    }
		});

		$(window).scroll(function(){
			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');

	    	}
		});

	};
	var myform = $("form#myform");
	myform.submit(function(event){
	event.preventDefault();

	// Change to your service ID, or keep using the default service
	var service_id = "default_service";
	var template_id = "template_5covS69g";

	myform.find("button").text("Отправление...");
	emailjs.sendForm(default_service,template_5covS69g,"myform")
	.then(function(){
	alert("Отправлено!");
	myform.find("button").text("Отправить");
	}, function(err) {
	alert("Что-то пошло не так!\r\n Response:\n " + JSON.stringify(err));
	myform.find("button").text("Отправить");
	});
	return false;
	});

	$(document).ready(function () {
	$('.hotspot').on('mouseover',function (e) {
  	toggleDescription(e.target.parentElement);
  });

  $('.hotspot').on('mouseout',function (e) {
  	toggleDescription(e.target.parentElement);
  });

function toggleDescription (t) {
	if((t != null && t !== undefined)) {
  	var c = $('#' + t.id + '-desc');

  	if (c.css('display') == 'none') {
			c.css('left',t.offsetLeft + 'px');
      c.css('top',t.offsetTop + t.offsetHeight + 10 + 'px');
      c.css('display','block');
    } else
    	c.css('display','none');
  }
}

});
$(document).ready(function () {
	$('.hotspot1').on('mouseover',function (e) {
  	toggleDescription(e.target.parentElement);
  });

  $('.hotspot1').on('mouseout',function (e) {
  	toggleDescription(e.target.parentElement);
  });

function toggleDescription (t) {
	if((t != null && t !== undefined)) {
  	var c = $('#' + t.id + '-desc');

  	if (c.css('display') == 'none') {
			c.css('left',t.offsetLeft + 'px');
      c.css('top',t.offsetTop + t.offsetHeight + 10 + 'px');
      c.css('display','block');
    } else
    	c.css('display','none');
  }
}

});

	// Document on load.
	$(function(){
		fullHeight();
		parallax();
		testimonialCarousel();
		contentWayPoint();
		counterWayPoint();
		burgerMenu();
		mobileMenuOutsideClick();
	});


}());
