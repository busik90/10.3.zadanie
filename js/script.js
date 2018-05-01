$(function () {
  var carouselList = $('#carousel ul'),
      interval;

  $('#js-btn-left').click(function() { changeSlide('left') });
  $('#js-btn-right').click(function() { changeSlide('right') });
      
  function autoMoveSlide() {
    interval = setTimeout(function() { changeSlide('left') }, 3000);
  }

  autoMoveSlide();

  function changeSlide(direction) {
    console.log('changeSlide: ' + direction);
    switch(direction) {
      case 'left':       
        carouselList.animate({ left: '-800px' }, 500, function() { moveSlide(direction) });
        break;
      case 'right':    
        carouselList.animate({ left: '0px' }, 500, function() { moveSlide(direction) });
        break;
    }
  }

  function moveSlide(direction) {
    console.log('moveSlide: ' + direction);
    var firstItem = carouselList.find('li:first'),
        lastItem = carouselList.find('li:last');

    switch(direction) {
      case 'left':
        lastItem.after(firstItem);
        carouselList.css({
          left: '-400px'
        });
        break;
      case 'right':
        firstItem.before(lastItem);
        carouselList.css({
          left: '-400px'
        });
        break;
    }
    clearTimeout(interval);
    autoMoveSlide();
  }
});