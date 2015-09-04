open-gallery/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var a=m.shift();v(a.href,function(b){p(b,a.href,a.media),h[a.href]=!0,setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(a){var b="clientWidth",h=d[b],k="CSS1Compat"===c.compatMode&&h||c.body[b]||h,m={},n=l[l.length-1],o=(new Date).getTime();if(a&&q&&i>o-q)return clearTimeout(r),r=setTimeout(u,i),void 0;q=o;for(var p in e)if(e.hasOwnProperty(p)){var v=e[p],w=v.minw,x=v.maxw,y=null===w,z=null===x,A="em";w&&(w=parseFloat(w)*(w.indexOf(A)>-1?t||s():1)),x&&(x=parseFloat(x)*(x.indexOf(A)>-1?t||s():1)),v.hasquery&&(y&&z||!(y||k>=w)||!(z||x>=k))||(m[v.media]||(m[v.media]=[]),m[v.media].push(f[v.rules]))}for(var B in g)g.hasOwnProperty(B)&&g[B]&&g[B].parentNode===j&&j.removeChild(g[B]);for(var C in m)if(m.hasOwnProperty(C)){var D=c.createElement("style"),E=m[C].join("\n");D.type="text/css",D.media=C,j.insertBefore(D,n.nextSibling),D.styleSheet?D.styleSheet.cssText=E:D.appendChild(c.createTextNode(E)),g.push(D)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);
;
var alreadyrun = new Array();
var frontslidesready = 0;
var frontslidesreadylarge = 0;
var frontinsideready = 0;
var frontoutsideready = 0;
var frontgreetready=0;
var fishkiready=0;

_CaptionTransitions = [
{$Duration: 900, $Clip: 3, $Easing: $JssorEasing$.$EaseInOutCubic },
{$Duration: 900, $Clip: 12, $Easing: $JssorEasing$.$EaseInOutCubic },
{$Duration: 600, $Zoom: 11, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear }, $Opacity: 2 },
{$Duration: 600, $Zoom: 11, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $Opacity: 2 },
{$Duration: 600, $Zoom: 11, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleVertical: 0.6, $Opacity: 2 },
{$Duration: 700, $Zoom: 1, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic }, $ScaleVertical: 0.6, $Opacity: 2 },
{$Duration: 700, $Zoom: 11, $Rotate: 1, $Easing: { $Zoom: $JssorEasing$.$EaseInExpo, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInExpo }, $Opacity: 2, $Round: { $Rotate: 0.8} },
{$Duration: 700, $Zoom: 11, $Rotate: 1, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $ScaleHorizontal: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
{$Duration: 700, $Zoom: 11, $Rotate: 1, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInCubic, $Zoom: $JssorEasing$.$EaseInCubic, $Opacity: $JssorEasing$.$EaseLinear, $Rotate: $JssorEasing$.$EaseInCubic }, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 0.8} },
{$Duration: 700, $Zoom: 1, $Rotate: 1, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleHorizontal: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
{$Duration: 700, $Zoom: 1, $Rotate: 1, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInQuad, $Zoom: $JssorEasing$.$EaseInQuad, $Rotate: $JssorEasing$.$EaseInQuad, $Opacity: $JssorEasing$.$EaseOutQuad }, $ScaleVertical: 0.6, $Opacity: 2, $Round: { $Rotate: 1.2} },
{$Duration: 900, $FlyDirection: 2, $Easing: { $Left: $JssorEasing$.$EaseInOutBack }, $ScaleHorizontal: 0.6, $Opacity: 2 },
{$Duration: 900, $FlyDirection: 8, $Easing: { $Top: $JssorEasing$.$EaseInOutBack }, $ScaleVertical: 0.6, $Opacity: 2 },
];

_jsor_options = {
	$AutoPlay: true,                                    //[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
	$AutoPlaySteps: 1,                                  //[Optional] Steps to go for each navigation request (this options applys only when slideshow disabled), the default value is 1
	$AutoPlayInterval: 4000,                            //[Optional] Interval (in milliseconds) to go for next slide since the previous stopped if the slider is auto playing, default value is 3000
	$PauseOnHover: 1,                               //[Optional] Whether to pause when mouse over if a slider is auto playing, 0 no pause, 1 pause for desktop, 2 pause for touch device, 3 pause for desktop and touch device, default value is 3

	$ArrowKeyNavigation: true,   			            //[Optional] Allows keyboard (arrow key) navigation or not, default value is false
	$SlideDuration: 500,                                //[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500
	$MinDragOffsetToSlide: 20,                          //[Optional] Minimum drag offset to trigger slide , default value is 20
	//$SlideWidth: 670,                                 //[Optional] Width of every slide in pixels, default value is width of 'slides' container
	//$SlideHeight: 350,                                //[Optional] Height of every slide in pixels, default value is height of 'slides' container
	$SlideSpacing: 0, 					                //[Optional] Space between each slide in pixels, default value is 0
	$DisplayPieces: 1,                                  //[Optional] Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
	$ParkingPosition: 0,                                //[Optional] The offset position to park slide (this options applys only when slideshow disabled), default value is 0.
	$UISearchMode: 1,                                   //[Optional] The way (0 parellel, 1 recursive, default value is 1) to search UI components (slides container, loading screen, navigator container, direction navigator container, thumbnail navigator container etc).
	$PlayOrientation: 1,                                //[Optional] Orientation to play slide (for auto play, navigation), 1 horizental, 2 vertical, default value is 1
	$DragOrientation: 3,                                //[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)

	$CaptionSliderOptions: {                            //[Optional] Options which specifies how to animate caption
		$Class: $JssorCaptionSlider$,                   //[Required] Class to create instance to animate caption
		$CaptionTransitions: _CaptionTransitions,       //[Required] An array of caption transitions to play caption, see caption transition section at jssor slideshow transition builder
		$PlayInMode: 1,                                 //[Optional] 0 None (no play), 1 Chain (goes after main slide), 3 Chain Flatten (goes after main slide and flatten all caption animations), default value is 1
		$PlayOutMode: 3                                 //[Optional] 0 None (no play), 1 Chain (goes before main slide), 3 Chain Flatten (goes before main slide and flatten all caption animations), default value is 1
	},

	$NavigatorOptions: {                                //[Optional] Options to specify and enable navigator or not
		$Class: $JssorNavigator$,                       //[Required] Class to create navigator instance
		$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
		$AutoCenter: 0,                                 //[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
		$Steps: 1,                                      //[Optional] Steps to go for each navigation request, default value is 1
		$Lanes: 1,                                      //[Optional] Specify lanes to arrange items, default value is 1
		$SpacingX: 10,                                   //[Optional] Horizontal space between each item in pixel, default value is 0
		$SpacingY: 10,                                   //[Optional] Vertical space between each item in pixel, default value is 0
		$Orientation: 1                                 //[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
	},

	$DirectionNavigatorOptions: {
		$Class: $JssorDirectionNavigator$,              //[Requried] Class to create direction navigator instance
		$ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
		$Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
	}
};
	





var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i) ? true : false;
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i) ? true : false;
	    },
	    any: function() {
	        return (
	        		//1 || 
	        		isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
	    }
	};



(function ($) {

	isset = function() {
	  //  discuss at: http://phpjs.org/functions/isset/
	  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // improved by: FremyCompany
	  // improved by: Onno Marsman
	  // improved by: Rafał Kukawski
	  //   example 1: isset( undefined, true);
	  //   returns 1: false
	  //   example 2: isset( 'Kevin van Zonneveld' );
	  //   returns 2: true

	  var a = arguments,
		l = a.length,
		i = 0,
		undef;

	  if (l === 0) {
		throw new Error('Empty isset');
	  }

	  while (i !== l) {
		if (a[i] === undef || a[i] === null) {
		  return false;
		}
		i++;
	  }
	  return true;
	}


	_Jsor_ScaleSlider = function(elem) {
		return;
		var parentWidth = elem.$Elmt.parentNode.clientWidth;
		if (parentWidth)
			elem.$SetScaleWidth(Math.min(parentWidth, 670));
		else
			window.setTimeout(_Jsor_ScaleSlider(elem), 30);
			
		if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
			$(window).bind('resize', _Jsor_ScaleSlider(elem));
		}
			
	}
	_PageStartJsor = function() {		
		var jssor_slider1 = new $JssorSlider$("slider1_container", _jsor_options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes


        _Jsor_ScaleSlider(jssor_slider1);
	}
	
	FishkiReady = function() {
	
		PreloadFishkiGallery();
	
		$(".techimg a").click(function() {
			$(".techimg .elem").removeClass('active');
			$(this).parent().addClass('active');
			var dataix = $(this).parent().attr('data-ix');
			var elem = "#t-hidden-content ."+dataix;

			$("#t-content-holder").html($(elem).html());
			$("#techtitle").html($(elem).find('h2').html());
			$("#t-content-holder").find('h2').remove();
			
			$("#techbig").removeClass();
			$("#techbig").addClass(dataix);
			return false;
		});
		$("#tech-right a").click(function() {
		
			if($(this).parent().hasClass('active')) {
				$("#t-content-holder").html($("#t-content-holder-default").html());
				$("#t-content-holder").find('h2').remove();
				$("#techtitle").html($("#techtitle-default").html());
				$("#tech-right li").removeClass('active');
				$("#techbig").removeClass();
				$(".techimg .elem").removeClass('active');
				$(".techimg").removeClass('active');
				$(".techimg.t00").addClass('active');				
			}
			else {		
				
				$("#tech-right .inner .desc").hide();
				$("#techbig").removeClass();
				$("#techbig").addClass("e00");
				$(".techimg .elem").removeClass('active');
				$("#tech-right li").removeClass('active');
				$("#techtitle").html($("#techtitle-default").html());
				
				$("#t-content-holder").html($("#t-hidden-content ."+$(this).parent().attr('data-ee')).html());
				$(this).parent().addClass('active');
				var dataix = $(this).parent().attr('data-ix');
				
				
				var elem = ".techimg."+dataix;

				$(".techimg").removeClass('active');
				$(elem).addClass('active');
			}
			return false;
			
		});
		
		
	}
	
	PreloadFishkiGallery = function() {
			for(i in Drupal.settings.optikov.preload.fishki) {
			
			var img = new Image();
			img.onload = function() { 
				fishkiready++; 
				if(fishkiready >= Drupal.settings.optikov.preload.fishki.length) {						
					setCookie('fishkipreload', '1');
					setTimeout(PreloadFishkiReady, 1500);
				}
			};
			img.src = Drupal.settings.optikov.preload.fishki[i];			
		}
	}
	
	PreloadFishkiReady = function() {
		$('#content .l-content').fadeIn(1500, function() {		
			$('#tech-right').fadeIn(1500);			
		});
		
	
	}
	

	SlidesReady = function() {  	
		if($("#slides")) {
			//console.log('slides');
			var aelem = $("#content #slides a.b-galery-link:first");
			var imghtml = aelem.html();
			var imgelem = $("#content #slides a.b-galery-link:first img");
			imgelem.css('opacity',0);
			var img = new Image();
			aelem.addClass('loading');
			$(img).data('path',"#content #slides a.b-galery-link:first img");
			img.onload = function() {
				//console.log('onload');				
				var path = $(this).data('path');
				
				
				
				$("#content #slides a.b-galery-link:first img").css('opacity',1);
					$("#slides").slides({
						effect: 'fade',
						pagination: false,
						generatePagination: false,
						generateNextPrev: true
					});
			};			

			img.src = imgelem.attr('src');			
			$("#content #slides a.b-galery-link:first img").css('opacity',0);
		}
		
	};
	MebelbanReady = function() {
		
	}
	SwapMebel = function() {
		$('#mebelban').addClass('neg');		
		setTimeout(function(){$('#mebelban').removeClass('neg')},50);
	}
	MebelbanRun = function() {
		
		//$('#mebelban').fadeIn('2000');
		
		
		
	}

	DistrictReady = function() {
		$("#block-system-main #viewport").addClass('loading');
		$("#block-system-main #viewport .inner").css('opacity',0);
		var mapimg = new Image();		
		mapimg.onload = function() { 			
			$("#block-system-main #viewport .inner").animate({'opacity':1},800, function() {
				$("#block-system-main #viewport").removeClass('loading')
			});		
		   if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {				
			   $('#mapcontent').draggable({ containment: "#viewport-inner", scroll: false });
			   $(".b-filter").removeClass("hoverable");
			}
			else {
			   $("#viewport").mapbox({mousewheel: true,layerSplit: 8});
			}			
		};
		mapimg.src = $("#block-system-main .inner").css('background-image').replace(/^url\(['"]?/,'').replace(/['"]?\)$/,'');
	}

	PreloadOutReady=function() {
		//$('.b-house').addClass('ready');
		frontoutsideready=1;
		$('.b-house').fadeIn('1500');
		setTimeout(MebelbanRun, 1100);
	}
	PreloadInsReady=function() {
		//$('.b-house').addClass('ready');
		frontoutsideready=1;
		$('.b-house-inside').fadeIn('1500');			
		setTimeout(MebelbanRun, 1100);
	}
	PreloadGrReady=function() {
		frontgreetready=1;
		setCookie('popupshown',1);
		//$.colorbox({inline:true, href:"#greeting"//, onOpen: function(){$("body").addClass("colored");}, onClosed: function(){$("body").removeClass("colored");}
		//});
	}
	
	StartFrontGallery=function() {
	
	galSlider = $('.page-house .l-small-gallery ul.small-gallery').bxSlider({
		minSlides: 4,
		maxSlides: 5,
		slideWidth: 212,
		slideMargin: 6,
		infiniteLoop: false,
		pager: false,
		moveSlides: 1,
		//nextSelector: '#slider-next',
		//prevSelector: '#slider-prev'
	});			
		
		
	
	}
	
	PreloadGalReady = function() {
		
		$('.b-small-gallery').fadeIn(1500, function() {
			StartFrontGallery();
		});
		
	}
	PreloadImage=function(imgsrc, func) {
		var img = new Image();
		img.onload = function() { 
			eval(func+'()');
		};
		img.src = imgsrc;					
	}
	PreloadHouseGallery = function() {
			for(i in Drupal.settings.optikov.preload.images) {
			var img = new Image();
			img.onload = function() { 
				frontslidesready++; 
				if(frontslidesready >= Drupal.settings.optikov.preload.images.length) {						
					setCookie('frontgallery', '1');
					PreloadGalReady();
				}
			};
			img.src = Drupal.settings.optikov.preload.images[i];			
		}
	}
	PreloadHouseGalleryLarge = function() {
		//console.log('preload large started');
			for(i in Drupal.settings.optikov.preload.images_large) {
			var img = new Image();
			img.onload = function() { 
				frontslidesreadylarge++; 
				if(frontslidesreadylarge >= Drupal.settings.optikov.preload.images_large.length) {						
					setCookie('frontgallerylarge', '1');					
					//console.log('preload large ended');
				}
			};
			img.src = Drupal.settings.optikov.preload.images_large[i];			
		}
	}	
	HouseInsideReady = function() {
		PreloadImage(Drupal.settings.optikov.preload.ins, 'PreloadInsReady');
		PreloadHouseGallery();
		setTimeout(3000, PreloadHouseGalleryLarge());
	}
	PlanReady = function() {
	


            var jssor_slider1 = new $JssorSlider$("slider1_container", _jsor_options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes

            _Jsor_ScaleSlider(jssor_slider1);

  
	}
	
	
	CommercialReady = function() {	
		if(location.hash == "#2") {
				elem = $("#floors > li:nth-child(2)");
				$("#floors .active").removeClass("active");
				$(elem).addClass("active");
				$("#floors-block > div").hide();
				var i=$(elem).index()+1;
				location.hash="#"+i;
				$("#floors-block > div:nth-child("+i+")").fadeIn();
			
		}
		
		
		

            var jssor_slider1 = new $JssorSlider$("slider1_container", _jsor_options);
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizes


            _Jsor_ScaleSlider(jssor_slider1);

		
		
		
	
	}
	CommercialElementReady = function() {
		$('a.b-plan-pdf').attr({ target: "_blank" });
	}

	FrontPageReady = function() {		
	
		var popupshown = getCookie('popupshown');		
		if(popupshown == 1) {}
		else {
			PreloadImage(Drupal.settings.optikov.preload.gr, 'PreloadGrReady');				
		}
		
		PreloadImage(Drupal.settings.optikov.preload.out, 'PreloadOutReady');
		preloadImage(Drupal.settings.optikov.preload.out, 'PreloadInReady');
		
		PreloadHouseGallery();
		setTimeout(3000, PreloadHouseGalleryLarge());
	}
	getCookie = function(name) {
		var matches = document.cookie.match(new RegExp(
		  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
		))
		return matches ? decodeURIComponent(matches[1]) : undefined 
	}


	setCookie = function(name, value, props) {
		props = props || {}
		var exp = props.expires
		if (typeof exp == "number" && exp) {
			var d = new Date()
			d.setTime(d.getTime() + exp*1000)
			exp = props.expires = d
		}
		if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

		value = encodeURIComponent(value)
		var updatedCookie = name + "=" + value
		for(var propName in props){
			updatedCookie += "; " + propName
			var propValue = props[propName]
			if(propValue !== true){ updatedCookie += "=" + propValue }
		}
		document.cookie = updatedCookie

	}
	
	deleteCookie = function(name) {
		setCookie(name, null, { expires: -1 })
	}	
	array_search =function(needle, haystack, argStrict) {
	  // http://kevin.vanzonneveld.net
	  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // +      input by: Brett Zamir (http://brett-zamir.me)
	  // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	  // *     example 1: array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
	  // *     returns 1: 'surname'
	  // *     example 2: ini_set('phpjs.return_phpjs_arrays', 'on');
	  // *     example 2: var ordered_arr = array({3:'value'}, {2:'value'}, {'a':'value'}, {'b':'value'});
	  // *     example 2: var key = array_search(/val/g, ordered_arr); // or var key = ordered_arr.search(/val/g);
	  // *     returns 2: '3'

	  var strict = !!argStrict,
	    key = '';

	  if (haystack && typeof haystack === 'object' && haystack.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
	    return haystack.search(needle, argStrict);
	  }
	  if (typeof needle === 'object' && needle.exec) { // Duck-type for RegExp
	    if (!strict) { // Let's consider case sensitive searches as strict
	      var flags = 'i' + (needle.global ? 'g' : '') +
	            (needle.multiline ? 'm' : '') +
	            (needle.sticky ? 'y' : ''); // sticky is FF only
	      needle = new RegExp(needle.source, flags);
	    }
	    for (key in haystack) {
	      if (needle.test(haystack[key])) {
	        return key;
	      }
	    }
	    return false;
	  }

	  for (key in haystack) {
	    if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
	      return key;
	    }
	  }

	  return false;
	}
	CombinedJSLoader = function() {
	/*	$.cachedScript(Drupal.settings.legenda.jscombined.src).done(function( script, textStatus ){
			liveTexStarter();
			doubleClickStarter();
			adhandsStarter();
			kavangaStarter();
			yaStarter();

		});*/
	}
		
		
		
	jQuery.cachedScript = function( url, options ) {
		 
		  // Allow user to set any option except for dataType, cache, and url
		  options = $.extend( options || {}, {
		    dataType: "script",
		    cache: true,
		    url: url
		  });
		 
		  // Use $.ajax() since it is more flexible than $.getScript
		  // Return the jqXHR object so we can chain callbacks
		  return jQuery.ajax( options );
	};
	
	ColorboxReady = function() {
	    if($('a.gallery').length>0) {
	        $('a.gallery').colorbox({rel:'gal'});
	    }
	}


	$(document).ready(function(){
		try {
			if(isset(_jsorstart) && _jsorstart == 1) {
				_PageStartJsor();
			}
		}
		catch(ex) {}
	
		currentUrl = ((window.location + '').split('#').length > 1) ?  (window.location + '').split('#')[0] : (window.location + '');
		
		try {
		
			if(isMobile.any()) {
				$('body').addClass('mobile');
			}
			
			if(Drupal.settings.optikov.isfront) {
				FrontPageReady();
			}
			//console.log(Drupal.settings.optikov.exec);
			if(Drupal.settings.optikov.exec && $.isArray(Drupal.settings.optikov.exec) ) {
				for (elem in Drupal.settings.optikov.exec) { 
					funcname = Drupal.settings.optikov.exec[elem] + 'Ready';
					if($.inArray(funcname, alreadyrun) == -1)
					{
						alreadyrun.push(funcname);
						//console.log(funcname);
						eval(funcname + '()');
					}
				}
			}
//			setTimeout('CombinedJSLoader()', 1000);
			//if(Drupal.settings.optikov.auth == 0) {
				//setTimeout('CallTouch()',100);
			//}
			
			// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

			// ga('create', 'UA-32756002-1', 'legenda-dom.ru');
			// ga('send', 'pageview');

			if(Drupal.settings.optikov.auth == 0) {
				ga(function(tracker) {
					(function(w, d, c){
						
							var a = 'all', b = 'tou'; var src = b + 'c' +'h'; src = 'm' + 'o' + 'd.c' + a + src;
							$.getScript(('https:' == d.location.protocol ? 'https://' : 'http://')+src+"."+"r"+"u/d_client.js?param;client_id"+c+";ref" + escape(d.referrer) + ";url" + escape(d.URL) + ";cook" + escape(d.cookie)+";");

					})(window, document, tracker.get('clientId'));
				});
				
				(_gdeaq = window._gdeaq || []).push(['pageView', 'gde-default', 'ncqbk.9tpAl6iFCCalCUnLRHXmaWVyLEBuaWQsBsVkz.a7']);
				
				$.getScript(('https:' == d.location.protocol ? 'https://' : 'http://')+"gde-default.hit.gemius.pl/gdejs/xgde.js");
				
			}
		}
		catch(e)
		{
			console.log('failed');
			console.log(e);			
		}				
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
		var $filterResultsHolder = $('.b-results');

		$(".map area").click(function(){
			var i=$(this).index()+1;
			var $block=$(this).parent().parent().find(".info-block");
			$block.find(".active").removeClass("active");
			$block.find(".number"+i).addClass("active");
			//alert($block.find(".room"+i).attr("class"));
			return false;
		});
		$( ".draggable" ).draggable({ containment: "parent" });
		$(".j-rulers-trigger").colorbox({inline:true, href:"#rulers"});
		$(".info-block").click(function(){
			$(this).find(".active").removeClass("active");
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



		$("#floors li").click(function(){			
			if(!$(this).is(".active")) {
				$("#floors .active").removeClass("active");
				$(this).addClass("active");
				$("#floors-block > div").hide();
				var i=$(this).index()+1;
				location.hash="#"+i;
				$("#floors-block > div:nth-child("+i+")").fadeIn();
			}
		});

		$(".b-info").hover(function(){
			$(this).parent().parent().find(".b-info-block").fadeIn();
		},function(){
			$(this).parent().parent().find(".b-info-block").fadeOut();
		});
		$(".b-content table tr td:nth-child(1)").addClass("b-plan-content-table-text");
		$(".b-content table tr td:nth-child(2)").addClass("b-plan-content-table-column");
/*		$(".b-results-table tr ").live({
				mouseenter:
					function()
					{
						$(this).find(".j-result-link").show();
					},
				mouseleave:
					function()
					{
						$(this).find(".j-result-link").hide();
					}
			}
		);
		*/
		$("body").on('mouseenter','.b-results-table tr',function(){
			$(this).find(".j-result-link").show();
		});
		$("body").on('mouseleave','.b-results-table tr',function(){
			$(this).find(".j-result-link").hide();
		});
		
		
		$(".b-plan-buildings-availibility tbody tr").each(function(){
			var flag=$(this).find("span").is(".full");
			if(!flag) {$(this).addClass("hidden");}
		});
		/*
		$(".b-results-table tr").live("click", function(){
			if(!$(this).is(".b-results-table-divider")) {
				var hr=$(this).find("a").attr("href");
				document.location.href = hr;
			}
		});*/
		$("body").on('click','.b-results-table tr',function(){
			if(!$(this).is(".b-results-table-divider")) {
				var hr=$(this).find("a").attr("href");
				document.location.href = hr;
			}
		});
		
		
		$( ".draggable" ).draggable();
		$(".j-popup-trigger").colorbox({rel:'popup'});
		$(".j-galery").colorbox({rel:'galery', scalePhotos: true, retinaImage: true, title: function(){var title=$(this).attr('value'); return title;}});

		$(".b-share span").hover(function(){
			$(this).css('opacity','0.7');
		},function(){
			$(this).css('opacity','1');
		});
		$(".j-rulers-trigger").colorbox({inline:true, href:"#rulers"});
		$(".j-clear").click(function(){
			$(".b-popup-rulers-block").css("position","absolute").css("top","70px").css("left","0");
		});
		$(".j-close-but").click(function(){
			$.colorbox.close();
		});

		$(document).click(function(event){
			var t = $(event.target);

			if((!t.is(".on") &&
				!t.parents().is($(".on"))
				))
			{

				$(".on").removeClass("on");
				/*if((!t.is("#plus") &&
					!t.is("#subpages") &&
					!t.parents().is($("#subpages"))
					))
				{
					$("#plus").show();
					$("#subpages").fadeOut();
				}*/
				return true;
			}
		});

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

		$('.hoverable .j-filter-link').hover(function(){
			$(this).addClass("highlighted");
		},function(){
			$(this).removeClass("highlighted");
		});

	   /* $(window).scroll(function () {
			var $pos;
			var $res=$(".b-results");
			var $h=$res.height();
			var $hcol=$(".l-col1").height()+225;
			console.log($hcol-$h-1);
			var $window=$(window).height();
			if($h<$window) {
				if($.browser.msie) {
					$pos = $("html,body").scrollTop();
				}
				else {
					$pos = $("body").scrollTop();
				}
				if ($pos<225){
					$res.removeClass("fixed").removeClass("absolute");
				}
				if(($pos>225) && ($pos<($hcol-$h-45))) {
					$res.addClass("fixed").removeClass("absolute");
				}
				if ($pos>=($hcol-$h-45)) {
					$res.addClass("absolute").removeClass("fixed");
				}

			}
		});*/

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
			filterResults();
			return false;

	   });


	   $(".j-clear").click(function(){
		  $(".start").removeClass("start");
		  var $filter=$(this).parent().parent();
		  $filter.find(".active").removeClass("active");
		  filterResults();
		  return false;
	   });

		var br = navigator.userAgent.toLowerCase().indexOf("safari");
		var br1 = navigator.userAgent.toLowerCase().indexOf("chrome");
		
		
		if (br != -1 && br1 == -1)
		{
			$(".j-camera-link").click(function(){
				$(".ipad-video").show();
			});
			$("#cboxClose").click(function(){
				$(".ipad-video").hide();
			});
		}
		else {
			$(".j-camera-link").colorbox({
				inline:true, 
				href:"#camera-popup", 
				onOpen: function() {
					var output = '<a href="null" ';
					output += 'style="display:block;width:800px;height:600px" ';
					output += 'id="player"></a>';
					$("#camera-popup").html(output);
			}});

		}
				   /*$(".j-camera-link").colorbox({inline:true, href:"#camera-popup", onOpen: function() {
					var output = '<div style="padding:40px 60px;">Уважаемые посетители, работа камеры будет возобновлена 10 декабря. Приносим извинения за доставленные неудобства.</div>';
					$("#camera-popup").html(output);
					}});*/

		
		
	   /*$(".j-camera-link").colorbox({inline:true, href:"#camera-popup"});*/

		/*$(".j-process-link").click(function(){
			var nid = $(this).attr("id");
			var url = '/process';
			if(nid) {
				url+="?n="+nid;
			}
			console.log(url);
			$.post(url,
				function(data){
					console.dir(data.result);
					if(data.result) {
						$("#process").html("");
						$("#process").append(data.result);
						history.pushState('', 'Test', url);
					}
				}, 'json').fail(function() { alert("error"); })
		});*/

		$("table.first a:last").addClass("active").removeAttr("href");


		filterResults=function(){
			var i,count_bed,count_fam,count_size,l;
			var url = '/apartments';
			var flag = false;
			var bedroom = new Array();
			var bathroom;
			var size = new Array();
			var family = new Array();

			$('.b-filter-bedroom').find('span.active').each(function(i){
				var b=$(this);
				bedroom[i]=b.attr("value");
			});

			bathroom = $('.b-filter-bathroom').find('span.active').attr("value");

			$('.b-filter-size').find('span.active').each(function(i){
				var b=$(this);
				size[i]=b.attr("value");
			});

			$('.b-filter-family').find('span.active').each(function(i){
				var b=$(this);
				family[i]=b.attr("value");
			});

			count_bed=bedroom.length;
			count_fam=family.length;
			count_size=size.length;

			if((count_bed+count_fam+count_size > 0) || (bathroom)) { url+='?'; flag=true; }

			if(count_bed>0) {
				for(i=0;i<count_bed;i++) {
					url+='be['+i+']='+bedroom[i]+'&';
				}
			}
			if(bathroom) {
				url+="ba="+bathroom+'&';
			}
			if(count_size>0) {
				for(i=0;i<count_size;i++) {
					url+='s['+i+']='+size[i]+'&';
				}
			}
			if(count_fam>0) {
				for(i=0;i<count_fam;i++) {
					url+='f['+i+']='+family[i]+'&';
				}
			}
			if(flag) {
				l=url.length;
				url=url.substring(1,l-1);
			}


			$.post(url,
				function(data){
					//console.dir(data.result);
					if(data.result) {
						$filterResultsHolder.html("");
						$filterResultsHolder.append(data.result);
						history.pushState('', 'Test', url);
					}
				}, 'json').fail(function() { alert("error"); })



		}


	  /*$("#viewport").mapbox({mousewheel: false});
	  $("#viewport2").mapbox({mousewheel: false});	
	  $(".b-window-menu li").click(function(){
		ind=$(".b-window-menu li").index(this);
		ind++;
		$(".b-window-menu li").removeClass("active");
		$(this).addClass("active");
		$(".viewport").removeClass("active");
		$(".mapwrapper > div:nth-child("+ind+")").addClass("active");
	  });*/



		
		if ( $('.node-type-plans .l-large-gallery ul.small-gallery').find('li').length > 4 ) {
			galSlider = $('.l-small-gallery ul.small-gallery').bxSlider({
				minSlides: 4,
				maxSlides: 4,
				slideWidth: 189,
				slideMargin: 3,
				infiniteLoop: false,
				pager: false,
				moveSlides: 1,
				//nextSelector: '#slider-next',
				//prevSelector: '#slider-prev'
			});
		}

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
		$("#salesman").load("/optikov/ajax/salesman");
	});
}(jQuery));

;
