jQuery(document).ready(function(){
// Jitha start

		// Header cart click
		jQuery('.cart-button').click(function(event){
			event.preventDefault();
			jQuery('.basket-wrap').slideToggle()
		})

		jQuery(document).ready(function () {
		  jQuery('.cart-button').click(function(e){
		     e.stopPropagation();
		  });
		  jQuery('html').click(function() {
		    var jQuerydrop = jQuery('.basket-wrap');
		    if(jQuerydrop.is(":visible")) {
		      jQuerydrop.slideUp('medium', function() {
		      });
		    }
		  });
		 });

		// Features slider about page
		jQuery('.top-features-slider').owlCarousel({
				loop:true,
				margin:0,
				dots:true,
				nav:false,
				slidesToShow: 1,
			  slidesToScroll: 1,
				responsiveClass:true,
				autoplay: true,
				autoplaySpeed: 1000,
				responsive:{
					0:{
						items:1,
					}
				}
			});

		// Services slider
		jQuery('.services-slider').slick({
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			// autoplay: true,
			// autoplaySpeed: 1000,
			responsive: [
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
			]
		});


	// Partners slider
		jQuery('.partner-slider').slick({
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
		});

		var docWidth = jQuery(window).width();

		jQuery(window).on('resize', function () {
			var docWidth = jQuery(window).width();
			if(docWidth < 767){
				location.reload(true);
			}
		});

		if( docWidth<575){
			jQuery('.auto-height ul.pslider').addClass("owl-carousel product-list-carousel owl-theme");
		}

		// Product list slider on mobile
		jQuery('.product-list-carousel').owlCarousel({
				loop:true,
				margin:0,
				dots:true,
				nav:false,
				slidesToShow: 1,
			  slidesToScroll: 1,
				responsiveClass:true,
				responsive:{
					0:{
						items:1,

					}
				}
			});

		// Product list
		jQuery('.pro-holder').click(function(){
			jQuery('.pro-holder').css("margin-bottom","0");
			jQuery('.pro-holder').find('.pro-cat-list').removeClass("active");
			jQuery('.pro-holder').removeClass("open");

			jQuery(this).find('.pro-cat-list').addClass("active");

			var productListHeight = jQuery(this).find('.auto-height').height() + 15;
			jQuery(this).find('.auto-height').css("height",productListHeight );

			jQuery(this).toggleClass("open");
      jQuery(this).css("margin-bottom",productListHeight + 100);
		})

		// Team slider
		jQuery('.team-slider').slick({
			infinite: false,
		});

		// value slider
		jQuery('.value-slider').slick({
			infinite: false,
		  speed: 300,
		  slidesToShow: 3,
		  slidesToScroll: 1,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 1000,
			responsive: [
				{
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
				{
		      breakpoint: 500,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
			]
		});

// jitha end


	jQuery('.owl-banner').owlCarousel({
		loop:true,
		margin:10,
		dots:true,
		nav:false,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:1,
				nav:false,
				loop:false
			}
		}
	});

jQuery('.owl-h-product').owlCarousel({
		loop:true,
		margin:10,
		dots:true,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,

			},
			600:{
				items:1,

			},
			1000:{
				items:1,

			}
		}
	});


jQuery('.three-item').owlCarousel({
		loop:true,
		margin:30,
		dots:false,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,

			},
			767:{
				items:2,

			},
			1000:{
				items:3,

			}
		}
	});

	jQuery('.two-item').owlCarousel({
		loop:false,
		margin:30,
		dots:false,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				loop:true

			},
			767:{
				items:2,

			},
			1000:{
				items:2,

			}
		}
	});


	var jQueryowl = jQuery('.three-item1');

	jQueryowl.children().each( function( index ) {
	  jQuery(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
	});


	jQuery('.three-item1').owlCarousel({
		loop:false,
		margin:10,
		dots:false,
		nav:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:2,
				center: true,
  				loop: true,

			},
			499:{
				items:3,
				center: true,
  				loop: true,

			},

			1200:{
				items:5,
				margin:10,
				loop: false

			}
		}
	});



	jQuery(document).on('click', '.owl-item>div', function() {

		var jQueryspeed = 300;  // in ms
		jQueryowl.trigger('to.owl.carousel', [jQuery(this).data( 'position' ), jQueryspeed] );
	  });





// =========fixed header on scroll===================

		jQuery(window).scroll(function(){
			if (jQuery(window).scrollTop() >= 300) {
				jQuery('.header-section-bottom').addClass('fixed');

			}
			else {

				jQuery('.header-section-bottom').removeClass('fixed');

			}
		});

// ========search icon==================

		var  menu = jQuery('.search-icon');

		jQuery('.search-icon').on('click', function(e) {
			e.preventDefault();

			if (jQuery(".search-menu").hasClass("is-active")) {
				jQuery('.search-menu').removeClass('is-active');
			  }
			else
			jQuery('.search-menu').addClass('is-active');
		});



		jQuery(document).mouseup(function(e) {
			var container = jQuery(".search-menu,.search-icon"); // target ID or class
			// if the target of the click isn't the container nor a descendant of the container
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				// get Event here
				jQuery('.search-menu').removeClass('is-active');
			}
		});



});
