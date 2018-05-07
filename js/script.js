$(function () {
	var carouselList = $('#js-carousel-content'),
			carouselItems = carouselList.find('li'),

			sliderNav = $('#js-carousel-nav'),
			sliderNavItems = sliderNav.find('li'),

			timer,
			steps,
			shift,
			currentPos = 0,
			direction;
			
	// events
	$('#js-btn-left').click(function() { setNewPos('preview') });
	$('#js-btn-right').click(function() { setNewPos('next') });
	sliderNavItems.click(function() { setNewPos( $(this).index() ) });
			
	function startCarousel() {
		timer = setTimeout(function() { setNewPos("next") }, 3000);
	}

	startCarousel();

	function setNewPos(newPos) {
		if (newPos == 'next') {
			newPos = currentPos;
			newPos++;
		} else if (newPos == 'preview') {
			newPos = currentPos;
			newPos--;
		}

		if (newPos > 4) {
			newPos = 0;
		} else if (newPos < 0) {
			newPos = 4;
		}

		steps = currentPos - newPos;
		steps = Math.abs(steps);

		// set direction
		if (steps == sliderNavItems.length - 1) {
			steps = 1;
			switch (currentPos) {
				case 0:
					direction = 'left';
					break;
				case 4:
					direction = 'right';
					break;
			}
		} else if (newPos < currentPos) {
				direction = 'left';
		} else if (newPos > currentPos) {
				direction = 'right';
		}

		console.log('-------------------');
		console.log('currentPos: ' + currentPos);
		console.log('newPos: ' + newPos);
		console.log('steps: ' + steps);
		console.log('direction: ' + direction);
		console.log('-------------------');

		currentPos = newPos;

		sliderNavItems.removeClass('active');
		sliderNavItems.eq(currentPos).addClass('active');

		changeSlide();
	}

	function changeSlide() {
		shiftDuration = 500 / steps * 2;

		switch(direction) {
			case 'left':
				for (i=1; i <= steps; i++) {
					carouselList.animate({ left: '0px' }, shiftDuration, function() { moveSlide(direction) });
				}
        break;
      case 'right':    
				for (i=1; i <= steps; i++) {
					carouselList.animate({ left: '-800px' }, shiftDuration, function() { moveSlide(direction) });
				}
				break;
    }
		
	  clearTimeout(timer);
	  startCarousel();
	}

	function moveSlide(direction) {
	  var firstItem = carouselList.find('li:first'),
	      lastItem = carouselList.find('li:last');
		
		switch(direction) {
			case 'left':
        firstItem.before(lastItem);
        carouselList.css({
          left: '-400px'
        });
        break;
      case 'right':
        lastItem.after(firstItem);
        carouselList.css({
          left: '-400px'
        });
        break;
    }
	}

	// stop carousel when hover
	$('#carousel').hover(function() { carouselMove('stop') }, function() { carouselMove('start') });

	function carouselMove(move) {
		switch (move) {
			case 'stop':
				clearTimeout(timer);
				break;
			case 'start':
				startCarousel();
				break;
		}

		console.log('carousel: ' + move);
	}

});