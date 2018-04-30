$(function () {
  var carouselList = $('#carousel ul');

  var interval = setInterval(changeSlide, 3000);

  function changeSlide() {
    carouselList.animate({
      left: '-400px'
    }, 500, moveFirstSlide());
  }

  function moveFirstSlide() {
    var firstItem = carouselList.find('li:first'),
      lastItem = carouselList.find('li:last');

    lastItem.after(firstItem);
    carouselList.css({
      left: 0
    });
  }
});