window.onload = function() {

  //slideshow
  //configuration
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slider.find('.slide'); 

  var interval;

  function startSlider() {
   interval = setInterval(function() {
      $slideContainer.animate({marginLeft: '-=' + width}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css({marginLeft: 0});
        }
      });
    }, pause);
  }

  function pauseSlider() {
    clearInterval(interval);
  }
  
  $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

  startSlider();

  //setInterval
  //animate margin-left
  //if it's the last slide go back to position 1 (0px);
  //listen for mouseenter and pause
  //resume on mouseleave

  var sideMenu = document.getElementById('side-menu');
  var openSlide = document.getElementById('open-slide');

  openSlide.addEventListener('click', onToggle);

  function onToggle() {
    if (sideMenu.className === 'hide') {
      sideMenu.className = '';
    } else {
      sideMenu.className = 'hide';
    }
  }

  var maxWidth = window.matchMedia("(max-width: 480px)");
  functionQuery(maxWidth);
  maxWidth.addListener(functionQuery);

  function functionQuery(maxWidth) {
    if (maxWidth.matches) {
      document.getElementById('side-menu').className = "hide";
    } else {
      document.getElementById('side-menu').className = "hide";
    }
  }
}