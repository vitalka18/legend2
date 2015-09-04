$(document).ready(function(){
	$('.j-object').parent().hover(function(){
		var object=$(this);
		var block=$(this).children(".b-house-object-info");
		object.addClass("on");
		block.slideToggle("fast");

	},function(){
		var object=$(this);
		var block=$(this).children(".b-house-object-info");
		block.hide();
		object.removeClass("on");
	});

	$(".j-camera-link").colorbox({
		inline:true, 
		href:"#camera-popup"
	});

	 $("#plus").click(function(){
    if($(this).is(".plus")) {
      $("#subpages").fadeIn(150);
      $(this).addClass("minus").removeClass("plus");
    }
    else {
      $("#subpages").fadeOut(150);
      $(this).removeClass("minus").addClass("plus");
    }
  });

		if ( $(document).width() > 1024 && $('.l-large-gallery ul.small-gallery').find('li').length > 5 ) {
			galSlider = $('.l-large-gallery ul.small-gallery').bxSlider({
				minSlides: 5,
				maxSlides: 5,
				slideWidth: 198,
				slideMargin: 2,
				infiniteLoop: false,
				pager: false,
				moveSlides: 1,
			});	
		} else if ( $(document).width() <= 1024 && $('.l-large-gallery ul.small-gallery').find('li').length > 5 ) {
			galSlider = $('.l-large-gallery ul.small-gallery').bxSlider({
				minSlides: 5,
				maxSlides: 5,
				slideWidth: 140,
				slideMargin: 2,
				infiniteLoop: false,
				pager: false,
				moveSlides: 1,
			});	
		}

		$('a.link-house-img').click(function () {

			$active = $(this);
			$allIndex = $('.l-large-gallery ul').find('li').length;
			$activeIndex = $active.parent().index();
			$realElement = $('.l-large-gallery ul').find('li').eq($activeIndex).children('a');

			if ( $active.hasClass('open-gallery') ) {
				$('.l-large-gallery').fadeIn('fast');
				
				galSlider.reloadSlider();
				
				$('body,html').animate({ scrollTop: 330 }, 300);


				$('#wrapper').append("<div id='overlay'></div>");
				
				var docHeight = $(document).height();
				$('#overlay')
					.height(docHeight)
					.css({
						'opacity' : 0.6,
						'filter:progid' : "DXImageTransform.Microsoft.Alpha(opacity=60)",
						'-moz-opacity' : 0.6,
						'-khtml-opacity' : 0.6,
						'opacity' : 0.6,
						'position': 'absolute',
						'top': 0,
						'left': 0,
						'background-color': 'black',
						'width': '100%',
						'z-index': 200,
						'cursor': 'pointer'
				});

			}

			openSecond();
			
			return false;
		});
	
		openSecond=function() {
			var imgAttr = $realElement.attr('href');
			
			$('a.link-house-img').removeClass('active');
				
			$realElement.addClass('active');

			$('.b-gallery-main-desc').empty();
			
			$('.b-gallery-main-img img').addClass('remove-img').fadeTo(500, 0);
			$('<img src="' + imgAttr + '" alt="">').appendTo('.b-gallery-main-img').css('opacity', '0').fadeTo(500, 1);
			$('img.remove-img').remove();

			$realElement.parent().find('p').clone().css('opacity', '0').appendTo('.b-gallery-main-desc').fadeTo( 500, 1);
			
			$('body,html').animate({ scrollTop: 330 }, 300);
		}

		// Close outside
		$('body').click(function(e) {
			if ( $(e.target).closest('.l-large-gallery').length == 0 ) {
				$('#overlay').remove();
				$('.l-large-gallery').fadeOut('fast');
			}
		});

		// Gallery controls
		$('#gallery-close').click(function() {
			$('#overlay').remove();
			$('.l-large-gallery').fadeOut('fast');
		});

		$('#gallery-prev').click(function() {
			$prevElement = $('.l-large-gallery ul').find('a.active').parent().prev().index();
			
			if ( $prevElement >= 0) {
				$realElement = $realElement.parent().prev().children('a');
				openSecond();
			}
			return false;
		});
		
		$('#gallery-next').click(function() {
			$nextElement = $('.l-large-gallery ul').find('a.active').parent().next().index();
			
			if ( $nextElement > 0 && $nextElement <= $allIndex ) {
				$realElement = $realElement.parent().next().children('a');
				openSecond();
			}
			return false;
		});

		$(".b-info").hover(function(){
			$(this).parent().parent().find(".b-info-block").fadeIn();
		},function(){
			$(this).parent().parent().find(".b-info-block").fadeOut();
		});

		$('.j-filter-link').click(function(e){
			$(".b-filter").find(".current").removeClass("current");
			$(".start").removeClass("start");
			$(this).parents(".j-filter").addClass("current");
			$(".j-filter").not(".current").find(".active").removeClass("active");

			if($(this).is(".active")) {
			   $(this).removeClass("active");
				 if ($(this).is(".b-filter-bathroom span"))  {
					$(".hidden").removeClass("hidden").addClass("active");
					$(this).addClass("hidden");
			   }
			}
			else {
				$(this).addClass("active");
			}
			
			return false;

	   });
		$("body").on('mouseenter','.b-results-table tr',function(){
			$(this).find(".j-result-link").show();
		});
		$("body").on('mouseleave','.b-results-table tr',function(){
			$(this).find(".j-result-link").hide();
		});
		$('.hoverable .j-filter-link').hover(function(){
			$(this).addClass("highlighted");
		},function(){
			$(this).removeClass("highlighted");
		});

});