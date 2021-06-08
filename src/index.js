import './style.scss';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

const sliderContainer = document.querySelector('.slider');
const controlsContainer = sliderContainer.querySelector('.slider__controls-container');
const controlsPrevButton = sliderContainer.querySelector('.slider__controls-button_prev');
const controlsNextButton = sliderContainer.querySelector('.slider__controls-button_next');
const dotsContainer = sliderContainer.querySelector('.slider__dots-container');
const sliderPicNumber = sliderContainer.querySelector('.slider__pic-number');
let viewportWidth = document.documentElement.clientWidth;

console.log(`vp - ${viewportWidth}`);

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
  responsive: {
    320: {
      fixedWidth: viewportWidth * 0.95,
      gutter: viewportWidth * 0.05,
    },
    820: {
      fixedWidth: false,
      gutter: false,
    },
  },
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

const showCurrentSlideIndex = (e) => {
  console.log('clicked');
  console.log(`e.target id - ${e.target.id}`);
  sliderPicNumber.textContent = `${e.target.id}/`;
};

controlsPrevButton.addEventListener('click', showPrevSlideIndex);

controlsNextButton.addEventListener('click', showNextSlideIndex);

Array.from(sliderContainer.querySelectorAll('.slider__dot')).forEach((elem) => {
  elem.addEventListener('click', showCurrentSlideIndex);
});

window.addEventListener('resize', () => {
  viewportWidth = document.documentElement.clientWidth;
});
