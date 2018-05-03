$(function () {
  var carouselList = $('#js-carousel-content'),
      carouselItems = carouselList.find('li'),

      sliderNav = $('#js-carousel-nav'),
      sliderNavItems = sliderNav.find('li'),

      interval,
      carouselPos = 0,
      navPos = 0;

      console.log(interval);
      console.log(navPos);
      

  $('#js-btn-left').click(function() { setCarouselPosition('preview') });
  $('#js-btn-right').click(function() { setCarouselPosition('next') });
  sliderNavItems.click(function() { setCarouselPosition( $(this).index() ) });
      
  function autoMoveSlide() {
    interval = setTimeout(function() { setCarouselPosition('next') }, 3000);
  }

  autoMoveSlide();

  // set position
  function setCarouselPosition(moveTo) {

    if(moveTo == 'next') {
      carouselPos = carouselPos + 400;
      navPos++;

      console.log(navPos);
    } else if(moveTo == 'preview') {
      carouselPos = carouselPos - 400;
      navPos--;

    } else {
      carouselPos = 400*moveTo;
      navPos = moveTo;
    }

    if (carouselPos == 2000) {
      carouselPos = 0;
      navPos = 0;
    } else if (carouselPos == -400) {
      carouselPos = 1600;
      navPos = 4;
    }

    sliderNavItems.removeClass('active');
    sliderNavItems.eq(navPos).addClass('active');

    changeSlide();
  }

  function changeSlide() {
    carouselList.animate({ left: -carouselPos }, 500);

    clearTimeout(interval);
    autoMoveSlide();
  }

});