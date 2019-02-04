$( document ).ready(function() {

  $(".intro, .gray, .grid-container, .full").addClass("hide");
  $(".intro, .gray, .grid-container, .full").addClass("show");
	$(".exp-slide2, .exp-slide3, .exp-slide4, .exp-slide5, .exp-slide6").addClass("hideDown");
	$(".besp-1").addClass("spec-select");
	$(".stepOne").addClass("nav-select");
	$(".besp-one .spec-tile h1").addClass("type-besp-one");

  $(".hp").on('click',function() {
    window.setTimeout(function() {
      window.location.href="hp.html";
    }, 500);
  });
	
  $(".denver").on('click',function() {
    window.setTimeout(function() {
      window.location.href="denver.html";
    }, 500);
  });
  
  $(".ibm").on('click',function() {
    window.setTimeout(function() {
      window.location.href="ibm.html";
    }, 500);
  });
  
  $(".aspire").on('click',function() {
    window.setTimeout(function() {
      window.location.href="aspire.html";
    }, 500);
  });
  
  $(".play-feat").on('click',function() {
    window.setTimeout(function() {
      window.location.href="play.html";
    }, 500);
  });
  
  $(".cv").on('click',function() {
    window.setTimeout(function() {
      window.location.href="anticv.html";
    }, 500);
  });
  
  $(".play").on('click',function() {
    window.setTimeout(function() {
      window.location.href="play.html";
    }, 500);
  });

  $(".zf").on('click',function() {
    window.setTimeout(function() {
      window.location.href="zf.html";
    }, 500);
  });
  
  $(".twig").on('click',function() {
    window.setTimeout(function() {
      window.location.href="twig.html";
    }, 500);
  });
  
  $(".daryl").on('click',function() {
    window.setTimeout(function() {
      window.location.href="daryl.html";
    }, 500);
  });
  
  $(".nav-play").on('click',function() {
    window.setTimeout(function() {
      window.location.href="play.html";
    }, 500);
  });
  $(".nav-projects").on('click',function() {
    window.setTimeout(function() {
      window.location.href="index.html";
    }, 500);
  });
  $(".nav-about").on('click',function() {
    window.setTimeout(function() {
      window.location.href="about.html";
    }, 500);
  });

  $(".menu-img").on('click',function() {
    $(".shade").addClass("shade-show");
    $(".menu").addClass("menu-move");
  });
  
  $(".menu-img .mob").on('click',function() {
    $(".shade").addClass("shade-show");
    $(".menu").addClass("menu-move");
  });
  
  $(".hp, .aspire, .nav-play, .nav-projects, .nav-about, .ibm, .anticv, .twig, .daryl, .cv, .zf, .play-feat, .denver").on('click',function() {
    $("body").addClass("hide");
  });
  
  $(".shade").on('click',function() {
    $(".shade").removeClass("shade-show");
    $(".menu").removeClass("menu-move");
  });
  
  $(".index").on('click',function() {
    $(".shade").removeClass("shade-show");
    $(".menu").removeClass("menu-move");
    window.setTimeout(function() {
      $("body").addClass("hide");
    }, 250);
    window.setTimeout(function() {
      window.location.href="index.html";
    }, 750);
  });
  
  $(".play").on('click',function() {
    $(".shade").removeClass("shade-show");
    $(".menu").removeClass("menu-move");
    window.setTimeout(function() {
      $("body").addClass("hide");
    }, 250);
    window.setTimeout(function() {
      window.location.href="play.html";
    }, 750);
  });

  $(".about").on('click',function() {
    $(".shade").removeClass("shade-show");
    $(".menu").removeClass("menu-move");
    window.setTimeout(function() {
      $("body").addClass("hide");
    }, 250);
    window.setTimeout(function() {
      window.location.href="about.html";
    }, 750);
  });
  
  $(".besp-1").on('click',function() {
    $(".besp-2").removeClass("spec-select");
    $(".besp-3").removeClass("spec-select");
		$(".besp-1").addClass("spec-select");
		$(".besp-one .spec-tile h1").removeClass("type-besp-two");
		$(".besp-one .spec-tile h1").removeClass("type-besp-three");
		$(".besp-one .spec-tile h1").addClass("type-besp-one");
  });
  $(".besp-2").on('click',function() {
    $(".besp-1").removeClass("spec-select");
    $(".besp-3").removeClass("spec-select");
		$(".besp-2").addClass("spec-select");
		$(".besp-one .spec-tile h1").removeClass("type-besp-one");
		$(".besp-one .spec-tile h1").removeClass("type-besp-three");
		$(".besp-one .spec-tile h1").addClass("type-besp-two");
  });
  $(".besp-3").on('click',function() {
    $(".besp-2").removeClass("spec-select");
    $(".besp-1").removeClass("spec-select");
		$(".besp-3").addClass("spec-select");
		$(".besp-one .spec-tile h1").removeClass("type-besp-one");
		$(".besp-one .spec-tile h1").removeClass("type-besp-two");
		$(".besp-one .spec-tile h1").addClass("type-besp-three");
  });
	
  $(".stepOne").on('click',function(event) {
		event.stopPropagation();
		
    $(".stepTwo").removeClass("nav-select");
    $(".stepThree").removeClass("nav-select");
		$(".stepFour").removeClass("nav-select");
		$(".stepFive").removeClass("nav-select");
		$(".stepOne").addClass("nav-select");
		
		$(".step-num").text("Step One");
		$(".step-title").text("The Input");
		$(".step-desc").text("The original input text is stored in a string variable.");
		$(".status").css('width', '20%');
		
		$(".exp-slide2, .exp-slide3, .exp-slide4, .exp-slide5, .exp-slide6").removeClass("show");
		$(".exp-slide2, .exp-slide3, .exp-slide4, .exp-slide5, .exp-slide6").addClass("hideDown");
		
    window.setTimeout(function() {
      	$(".exp-slide1").addClass("show");
						$(".exp-slide1").removeClass("hideDown");
    }, 750);
	
  });
	
  $(".stepTwo").on('click',function(event) {
		event.stopPropagation();
		
    $(".stepOne").removeClass("nav-select");
    $(".stepThree").removeClass("nav-select");
		$(".stepFour").removeClass("nav-select");
		$(".stepFive").removeClass("nav-select");
		$(".stepTwo").addClass("nav-select");
		
		$(".step-num").text("Step Two");
		$(".step-title").text("The Array");
		$(".step-desc").text("The string is broken into an array of separate strings.");
		$(".status").css('width', '40%');
		
		$(".exp-slide1, .exp-slide3, .exp-slide4, .exp-slide5, .exp-slide6").removeClass("show");
		$(".exp-slide1, .exp-slide3, .exp-slide4, .exp-slide5, .exp-slide6").addClass("hideDown");
		
    window.setTimeout(function() {
    	$(".exp-slide2").addClass("show");
			$(".exp-slide2").removeClass("hideDown");
    }, 750);
		
  });
	
  $(".stepThree").on('click',function(event) {
		event.stopPropagation();
		
    $(".stepOne").removeClass("nav-select");
    $(".stepTwo").removeClass("nav-select");
		$(".stepFour").removeClass("nav-select");
		$(".stepFive").removeClass("nav-select");
		$(".stepThree").addClass("nav-select");
		
		$(".step-num").text("Step Three");
		$(".step-title").text("Getting the Characters");
		$(".step-desc").text("An array object is created in order to access individual characters.");
		$(".status").css('width', '60%');
		
		$(".exp-slide1, .exp-slide2, .exp-slide4, .exp-slide5, .exp-slide6").removeClass("show");
		$(".exp-slide1, .exp-slide2, .exp-slide4, .exp-slide5, .exp-slide6").addClass("hideDown");
		
    window.setTimeout(function() {
    	$(".exp-slide3").addClass("show");
			$(".exp-slide3").removeClass("hideDown");
    }, 750);
		
  });
	
	
  $(".stepFour").on('click',function(event) {
		event.stopPropagation();
		
    $(".stepOne").removeClass("nav-select");
    $(".stepTwo").removeClass("nav-select");
		$(".stepThree").removeClass("nav-select");
		$(".stepFive").removeClass("nav-select");
		$(".stepFour").addClass("nav-select");
		
		$(".step-num").text("Step Four");
		$(".step-title").text("The Key");
		$(".step-desc").text("Characters are inserted into each object from an extensible key.");
		$(".status").css('width', '80%');
		
		$(".exp-slide1, .exp-slide2, .exp-slide3, .exp-slide5, .exp-slide6").removeClass("show");
		$(".exp-slide1, .exp-slide2, .exp-slide3, .exp-slide5, .exp-slide6").addClass("hideDown");
		
    window.setTimeout(function() {
    	$(".exp-slide4").addClass("show");
			$(".exp-slide4").removeClass("hideDown");
    }, 750);
		
  });
	
	
  $(".stepFive").on('click',function(event) {
		event.stopPropagation();
		
    $(".stepOne").removeClass("nav-select");
    $(".stepTwo").removeClass("nav-select");
		$(".stepFour").removeClass("nav-select");
		$(".stepThree").removeClass("nav-select");
		$(".stepFive").addClass("nav-select");
		
		$(".step-num").text("Step Five");
		$(".step-title").text("The Output");
		$(".step-desc").text("The input is reassembled.");
		$(".status").css('width', '100%');
		
		$(".exp-slide1, .exp-slide2, .exp-slide3, .exp-slide4").removeClass("show");
		$(".exp-slide1, .exp-slide2, .exp-slide3, .exp-slide4").addClass("hideDown");
		
    window.setTimeout(function() {
    	$(".exp-slide5").addClass("show");
			$(".exp-slide5").removeClass("hideDown");
    }, 750);
		
  });
	
	$( ".left-arrow").hover(
	  function() {
	    $(".exp-nav").addClass( "nav-move" );
	  }, function() {
	    $(".exp-nav").removeClass( "nav-move" );
	  }
	);
	
	var count = 1;

	function transition() {

	    if(count == 1) {
				$(".browser .browser-container img").removeClass( "daryl-move4");
					$(".browser .browser-container img").stop(true,true).addClass( "daryl-move0" );
	         count = 2;

	    } else if(count == 2) {
	    	$(".browser .browser-container img").removeClass( "daryl-move0" );
				$(".browser .browser-container img").stop(true,true).addClass( "daryl-move1" );
	         count = 3;

	    } else if(count == 3) {
	    	$(".browser .browser-container img").removeClass( "daryl-move1" );
				$(".browser .browser-container img").stop(true,true).addClass( "daryl-move2" );
	        count = 4;
	    }
			
			else if(count == 4) {
    		$(".browser .browser-container img").removeClass( "daryl-move2" );
				$(".browser .browser-container img").stop(true,true).addClass( "daryl-move3" );
        count = 5;

		} else if(count == 5) {
  	$(".browser .browser-container img").removeClass( "daryl-move3" );
		$(".browser .browser-container img").stop(true,true).addClass( "daryl-move4" );
      count = 1;
  }

	}
	setInterval(transition, 2750);
	
	
	
  // window.setTimeout(function() {
  //   $(".logo").addClass("logo-in");
  // }, 600);
  // window.setTimeout(function() {
  //   $(".arm1").addClass("arm-show");
  // }, 500);
  // window.setTimeout(function() {
  //   $(".arm2").addClass("arm-show2");
  // }, 700);
  // window.setTimeout(function() {
  //   $(".arm3").addClass("arm-show");
  // }, 1000);
  // window.setTimeout(function() {
  //   $(".logo").addClass("logo-scale");
  // }, 2000);
  // window.setTimeout(function() {
  //   $(".denv-text").addClass("text-show");
  // }, 2300);
	
	$( ".left-arrow").hover(
	  function() {
	    $(".exp-nav").addClass( "nav-move" );
	  }, function() {
	    $(".exp-nav").removeClass( "nav-move" );
	  }
	);
	
  $('.caro-cont').flickity({
    // options
    cellAlign: 'left',
    prevNextButtons: false,
    pageDots: false,
    setGallerySize: true,
    contain: true,
    imagesLoaded: true,
    watchCSS: true
  });
  
  $('.no-drag').flickity({
    // options
    draggable: false
  });

  
});