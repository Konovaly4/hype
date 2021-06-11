import './style.scss';
import SliderInit from './scripts/sliderInit';
import {
  sliderOneElements,
  sliderTwoElements,
  sliderThreeElements,
  sliderFourElements,
} from './scripts/constants/sliderElements';

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
  sliderTwoElements.sliderList,
  sliderTwoElements.controlsContainer,
  sliderTwoElements.prevButton,
  sliderTwoElements.nextButton,
  sliderTwoElements.dotsContainer,
  sliderTwoElements.sliderPicNumber,
  sliderTwoElements.sliderPicQty,
);

const sliderThree = new SliderInit(
  sliderThreeElements.sliderContainer,
  sliderThreeElements.sliderList,
  sliderThreeElements.controlsContainer,
  sliderThreeElements.prevButton,
  sliderThreeElements.nextButton,
  sliderThreeElements.dotsContainer,
  sliderThreeElements.sliderPicNumber,
  sliderThreeElements.sliderPicQty,
);
const sliderFour = new SliderInit(
  sliderFourElements.sliderContainer,
  sliderFourElements.sliderList,
  sliderFourElements.controlsContainer,
  sliderFourElements.prevButton,
  sliderFourElements.nextButton,
  sliderFourElements.dotsContainer,
  sliderFourElements.sliderPicNumber,
  sliderFourElements.sliderPicQty,
);

sliderOne.setListeners();
sliderTwo.setListeners();
sliderThree.setListeners();
sliderFour.setListeners();
