import './style.scss';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

const controlsContainer = document.querySelector('.slider__controls-container');
const controlsPrevButton = document.querySelector('.slider__controls-button_prev');
const controlsNextButton = document.querySelector('.slider__controls-button_next');
const dotsContainer = document.querySelector('.slider__dots-container');
const sliderPicNumber = document.querySelector('.slider__pic-number');
console.log(`pic - ${sliderPicNumber.textContent}`);

const slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  center: true,
  controlsContainer,
  prevButton: controlsPrevButton,
  nextButton: controlsNextButton,
  navPosition: 'bottom',
  navContainer: dotsContainer,
});

sliderPicNumber.textContent = `${slider.getInfo().index}`;

// tns-slide-active

const showNextSlideIndex = (numberContainer) => {
  const sliderItems = slider.getInfo().slideCount;
  console.log(numberContainer);
  const activeSlide = slider.getInfo().index;
  if (activeSlide === sliderItems) {
    numberContainer.textContent = '1';
  } else {
    numberContainer.textContent = `${activeSlide + 1}`;
  }
  console.log(numberContainer.textContent);
};

const showPrevSlideIndex = (numberContainer) => {
  const sliderItems = slider.getInfo().slideCount;
  console.log(numberContainer);
  const activeSlide = slider.getInfo().index;
  if (activeSlide === 1) {
    numberContainer.textContent = `${sliderItems}`;
  } else {
    numberContainer.textContent = `${activeSlide - 1}`;
  }
  console.log(numberContainer.textContent);
};

controlsPrevButton.addEventListener('click', showPrevSlideIndex(sliderPicNumber));

controlsNextButton.addEventListener('click', showNextSlideIndex(sliderPicNumber));
