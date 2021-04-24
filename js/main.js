(function ($) {
 "use strict";
 
 /*----------------------------
  SnowBall HomePage JS 

  --Todo list /Jahn
  -slider frenzy...
-----------------------------*/


 // Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
/*----------------------------
  1. Mobile Menu Activation
-----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "992",
    });


    $( ".lng-in" ).on("click",function() {
    $( ".lng-out" ).slideToggle("slow");
  });

smoothScroll.init();


 if( $('#pie_chart_1').length > 0 ){
    $('#pie_chart_1').easyPieChart({
      barColor : '#5e619c',
      lineWidth: 2,
      animate: 3000,
      size: 100,
      lineCap: 'square',
      scaleColor:false,
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
  }

  if( $('#e_chart_3').length > 0 ){
    var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
    var data = [{
      value: 1945,
      name: ''
    }, {
      value: 2580,
      name: ''
    }, {
      value: 5160,
      name: ''
    }, {
      value: 54826,
      name: ''
    }];
    var option3 = {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius:0,
        padding:10,
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: "'Encode Sans', sans-serif",
          fontSize: 12
        } 
      },
      series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['90%', '30%'],
        color: ['#a8a9bd','#9395b9', '#656790', '#20293e'],
        labelLine: {
          normal: {
            show: false
          }
        },
        data: data
      }]
    };
    eChart_3.setOption(option3);
    eChart_3.resize();
  }

  if( $('#e_chart_2').length > 0 ){
    var eChart_3 = echarts.init(document.getElementById('e_chart_2'));
    var data = [{
      value: 555555,
      name: ''
    }, {
      value:  58152,
      name: ''
    }, {
      value: 455025,
      name: ''
    }, {
      value: 255525,
      name: ''
    }];
    var option3 = {
      tooltip: {
        show: true,
        trigger: 'item',
        backgroundColor: 'rgba(33,33,33,1)',
        borderRadius:0,
        padding:10,
        formatter: "{b}: {c} ({d}%)",
        textStyle: {
          color: '#fff',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: "'Encode Sans', sans-serif",
          fontSize: 12
        } 
      },
      series: [{
        type: 'pie',
        selectedMode: 'single',
        radius: ['90%', '30%'],
        color: ['#a8a9bd','#9395b9', '#656790', '#20293e'],
        labelLine: {
          normal: {
            show: false
          }
        },
        data: data
      }]
    };
    eChart_3.setOption(option3);
    eChart_3.resize();
  }


/*----------------------------
		wow js active
		------------------------------ */
			new WOW().init();
	
	
	
/*----------------------------
owl active
------------------------------ */  
	$(".blog-slider").owlCarousel({
		autoPlay: true, 
		slideSpeed:7000,
		pagination:false,
		navigation:true,	  
		items : 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [992,2],
		itemsTablet: [768,2],
		itemsMobile : [480,1],
	});

  $(".tokes-chart-slider").owlCarousel({
    autoPlay: false, 
    slideSpeed:2000,
    pagination:false,
    navigation:true,    
    items : 1,
    /* transitionStyle : "fade", */    /* [This code for animation ] */
    navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [992,1],
    itemsTablet: [768,1],
    itemsMobile : [479,1],
  });


	
  // Main Slider Animation
  
  (function( $ ) {

	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	 $myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  

	
})(jQuery);


		
		
		//Single page scroll js
	$('.wd_single_index_menu ul li a').on('click' , function(e){
	  $('.wd_single_index_menu ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('80', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});


  $('.scrollMe a').on('click' , function(e){  
    var target = $('[section-scroll='+$(this).attr('href')+']');
    e.preventDefault();
    var targetHeight = target.offset().top-parseInt('80', 10);
    $('html, body').animate({
     scrollTop: targetHeight
    }, 1000);
  });

	

  //update snowball logo in the nav on scroll[moved]
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.wd_single_index_menu ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 90) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.wd_single_index_menu ul li:first').addClass('active');
	  }



	});
	
	
	//Single page scroll js
	$('#cssmenu ul li a').on('click' , function(e){
	  $('#cssmenu ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('80', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('#cssmenu ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 90) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('#cssmenu ul li:first').addClass('active');
	  }

	});

	
		// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 800) {
			$('.gc_main_menu_wrapper').addClass('menu_fixed animated fadeInDown');
      $('.logo-area img').attr('src','images/logo/logoOnWhite.png'); //change snowball logo to dark
		  $(".snowball_main_menu").addClass("snowballTextColour");
      $(".menuIcon path").addClass("fillBlack");
      
    } else {
			$('.gc_main_menu_wrapper').removeClass('menu_fixed animated fadeInDown');
      $('.logo-area img').attr('src','images/logo/logo.png');
      $(".snowball_main_menu").removeClass("snowballTextColour");
       $(".menuIcon path").removeClass("fillBlack");
		}
	});
	
 


	 /*--- Responsive Menu Start ----*/

$("#toggle").on("click", function(){
  var w = $('#sidebar').width()+50;
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});

$("#toggle_close").on("click", function(){
  var w = $('#sidebar').width()+50;
  var pos = $('#sidebar').offset().left;
 
  if(pos == 0){
  $("#sidebar").animate({"left": -w}, "slow");
  }
  else
  {
  $("#sidebar").animate({"left": "0"}, "slow");
  }
  
});

/*--------------------------
scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	   
 
})(jQuery); 



/*--------------------------
scrollUp
---------------------------- */	
	// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {       
        $('#return-to-top').fadeIn(200);   
    } else {
        $('#return-to-top').fadeOut(200);  
    }
});
$('#return-to-top').click(function() {     
    $('body,html').animate({
        scrollTop : 0                
    }, 500);
});


$(function() {
    $('#SnowballLogoAnimation').attr('src','images/logo/logoAnimate.gif');
});