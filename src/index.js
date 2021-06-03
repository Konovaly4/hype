import './style.scss';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

const controlsContainer = document.querySelector('.slider__controls-container');
const controlsPrevButton = document.querySelector('.slider__controls-button_prev');
const controlsNextButton = document.querySelector('.slider__controls-button_next');
const dotsContainer = document.querySelector('.slider__dots-container');
const sliderPicNumber = document.querySelector('.slider__pic-number');

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

sliderPicNumber.textContent = `${slider.getInfo().index}/`;
console.log(`pic - ${sliderPicNumber.textContent}`);

// tns-slide-active

const showNextSlideIndex = () => {
  const sliderItems = slider.getInfo().slideCount;
  const activeSlide = slider.getInfo().index;
  if (activeSlide === sliderItems) {
    sliderPicNumber.textContent = `${1}/`;
  } else {
    sliderPicNumber.textContent = `${activeSlide + 1}/`;
  }
};

const showPrevSlideIndex = () => {
  const sliderItems = slider.getInfo().slideCount;
  const activeSlide = slider.getInfo().index;
  if (activeSlide === 1) {
    sliderPicNumber.textContent = `${sliderItems}/`;
  } else {
    sliderPicNumber.textContent = `${activeSlide - 1}/`;
  }
};

controlsPrevButton.addEventListener('click', showPrevSlideIndex);

controlsNextButton.addEventListener('click', showNextSlideIndex);
