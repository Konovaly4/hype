import './style.scss';
import SliderInit from './scripts/sliderInit';
import { sliderOneElements, sliderTwoElements } from './scripts/constants/sliderElements';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

// console.log(sliderOneElements);

const sliderOne = new SliderInit(
  sliderOneElements.sliderContainer,
  sliderOneElements.sliderList,
  sliderOneElements.controlsContainer,
  sliderOneElements.prevButton,
  sliderOneElements.nextButton,
  sliderOneElements.dotsContainer,
  sliderOneElements.sliderPicNumber,
  sliderOneElements.sliderPicQty,
);

const sliderTwo = new SliderInit(
  sliderTwoElements.sliderContainer,
  sliderOneElements.sliderList,
  sliderTwoElements.controlsContainer,
  sliderTwoElements.prevButton,
  sliderTwoElements.nextButton,
  sliderTwoElements.dotsContainer,
  sliderTwoElements.sliderPicNumber,
  sliderTwoElements.sliderPicQty,
);

sliderOne.setListeners();
sliderTwo.setListeners();

// // forEach function
// const forEach = function (array, callback, scope) {
//   for (let i = 0; i < array.length; i++) {
//     callback.call(i, array[i]); // passes back stuff we need
//   }
// };

// // tiny-slider initialisation
// const sliders = document.querySelectorAll('.my-slider');
// console.log(sliders);
// forEach(sliders, (index, value) => {
//   const slider = tns({
//     container: value,
//   });
// });
