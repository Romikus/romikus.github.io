var stories = document.querySelector('.stories');
if (stories) {
  var storiesList = stories.querySelector('.stories__list');
  var storiesItems = stories.querySelectorAll('.stories__item');
  var nextStories = stories.querySelector('#stories-next');
  var prevStories = stories.querySelector('#stories-prev');
}

var advices = document.querySelector('.advices');
if (advices) {
  var advicesList = advices.querySelector('.advices__list');
  var advicesItems = advices.querySelectorAll('.advices__item');
  var nextAdvice = advices.querySelector('#advice-next');
  var prevAdvice = advices.querySelector('#advice-prev');
}

var number;
var offsetValue;
var translateValue;

if (stories) {
  nextStories.addEventListener('click', function(event) {
    event.preventDefault();
    for (var i = 0; i < storiesItems.length; i++) {
      if (storiesItems[i].classList.contains('stories__item--active')) {
        number = i;
        storiesItems[i].classList.remove('stories__item--active');
        break;
      }
    }

    if (number < (storiesItems.length -1)) {
      storiesItems[number+1].classList.add('stories__item--active');
      number = number + 1;
    } else {
      //storiesItems[0].classList.add('stories__item--active');
      //number = 0;
    }
    offsetValue = -100/storiesItems.length*number;
    translateValue = "translateX(" + offsetValue + "%)";
    storiesList.style.transform= translateValue;

    prevStories.classList.remove('slider__button--disable');
    if (number == (storiesItems.length - 1)) {
      nextStories.classList.add('slider__button--disable');
    }
  });

  prevStories.addEventListener('click', function(event) {
    event.preventDefault();
    for (var i = 0; i < storiesItems.length; i++) {
      if (storiesItems[i].classList.contains('stories__item--active')) {
        number = i;
        storiesItems[i].classList.remove('stories__item--active');
        break;
      }
    }

    if (number < 1) {
      //storiesItems[storiesItems.length-1].classList.add('stories__item--active');
      //number = storiesItems.length - 1;
    } else {
      storiesItems[number-1].classList.add('stories__item--active');
      number = number - 1;
    }
    offsetValue = -100/storiesItems.length*number;
    translateValue = "translateX(" + offsetValue + "%)";
    storiesList.style.transform= translateValue;

    nextStories.classList.remove('slider__button--disable');
    if (number == 0) {
      prevStories.classList.add('slider__button--disable');
    }
  });
}

if (advices) {
  nextAdvice.addEventListener('click', function(event) {
    event.preventDefault();
    for (var i = 0; i < advicesItems.length; i++) {
      if (advicesItems[i].classList.contains('advices__item--active')) {
        number = i;
        advicesItems[i].classList.remove('advices__item--active');
        break;
      }
    }

    if (number < (advicesItems.length -1)) {
      advicesItems[number+1].classList.add('advices__item--active');
      number = number + 1;
    } else {
      //advicesItems[0].classList.add('advices__item--active');
      //number = 0;
    }
    offsetValue = -100/advicesItems.length*number;
    translateValue = "translateX(" + offsetValue + "%)";
    advicesList.style.transform= translateValue;

    prevAdvice.classList.remove('slider__button--disable');
    if (number == (storiesItems.length - 1)) {
      nextAdvice.classList.add('slider__button--disable');
    }
  });

  prevAdvice.addEventListener('click', function(event) {
    event.preventDefault();
    for (var i = 0; i < advicesItems.length; i++) {
      if (advicesItems[i].classList.contains('advices__item--active')) {
        number = i;
        advicesItems[i].classList.remove('advices__item--active');
        break;
      }
    }

    if (number < 1) {
      //advicesItems[advicesItems.length-1].classList.add('advices__item--active');
      //number = storiesItems.length - 1;
    } else {
      advicesItems[number-1].classList.add('advices__item--active');
      number = number - 1;
    }
    offsetValue = -100/advicesItems.length*number;
    translateValue = "translateX(" + offsetValue + "%)";
    advicesList.style.transform= translateValue;

    nextAdvice.classList.remove('slider__button--disable');
    if (number == 0) {
      prevAdvice.classList.add('slider__button--disable');
    }
  });
}
