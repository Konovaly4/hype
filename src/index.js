import './style.scss';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

const controlsContainer = document.querySelector('.slider__controls-container');
const controlsPrevButton = document.querySelector('.slider__controls-button_prev');
const controlsNextButton = document.querySelector('.slider__controls-button_next');
const dotsContainer = document.querySelector('.slider__dots-container');

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
