$(function () {
  var carouselList = $('#carousel #slides'),
      carouselItems = carouselList.find('li'),
      interval,
      position = 0;

  $('#js-btn-left').click(function() { setPosition('preview') });
  $('#js-btn-right').click(function() { setPosition('next') });
      
  function autoMoveSlide() {
    interval = setTimeout(function() { setPosition('next') }, 3000);
  }

  autoMoveSlide();

  // Ustaw pozycję
  function setPosition(moveTo) {
    if(moveTo == 'next') {
      position = position + 400;
    } else if(moveTo == 'preview') {
      position = position - 400;
    } else {
      position = 400*moveTo;
    }

    if (position == 2000) {
      position = 0;
    } else if (position == -400) {
      position = 1600;
    }

    changeSlide();
  }

  function changeSlide() {
    carouselList.animate({ left: -position }, 500, function() { console.log(position) });
    clearTimeout(interval);
    autoMoveSlide();
  }

});