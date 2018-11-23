$( document ).ready(function() {

  $(".intro, .gray, .grid-container, .full").addClass("hide");
  $(".intro, .gray, .grid-container, .full").addClass("show");

  $(".hp").on('click',function() {
    window.setTimeout(function() {
      window.location.href="hp.html";
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
  
  $(".hp, .aspire, .nav-play, .nav-projects, .nav-about, .ibm, .anticv, .twig, .daryl, .cv, .zf, .play-feat").on('click',function() {
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