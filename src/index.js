import './style.scss';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

// const sliderContainer = document.querySelector('.slider');

const sliderInit = (elem) => {
  const controlsContainer = elem.querySelector('.slider__controls-container');
  const controlsPrevButton = elem.querySelector('.slider__controls-button_prev');
  const controlsNextButton = elem.querySelector('.slider__controls-button_next');
  const dotsContainer = elem.querySelector('.slider__dots-container');
  const sliderPicNumber = elem.querySelector('.slider__pic-number');
  const sliderPicQuantity = elem.querySelector('.slider__pic-quantity');

  console.log(`num - ${sliderPicNumber}`);
  console.log(`qty - ${sliderPicQuantity}`);

  let viewportWidth = document.documentElement.clientWidth;

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
  sliderPicQuantity.textContent = `${slider.getInfo().pages}`;

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
    sliderPicNumber.textContent = `${e.target.id}/`;
  };

  controlsPrevButton.addEventListener('click', showPrevSlideIndex);

  controlsNextButton.addEventListener('click', showNextSlideIndex);

  Array.from(elem.querySelectorAll('.slider__dot')).forEach((item) => {
    item.addEventListener('click', showCurrentSlideIndex);
  });

  window.addEventListener('resize', () => {
    viewportWidth = document.documentElement.clientWidth;
  });
};

// const sliders = Array.from(document.querySelectorAll('.slider'));

// const slidersInit = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     sliderInit(arr[i]);
//   }
// };

// slidersInit(sliders);

Array.from(document.querySelectorAll('.slider')).forEach((elem) => {
  sliderInit(elem);
});
