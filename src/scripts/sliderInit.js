import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

export default class SliderInit {
  constructor(
    controlsContainer,
    prevButton,
    nextButton,
    dotsContainer,
    sliderPicNumber,
    sliderPicQty,
  ) {
    this.controlsContainer = controlsContainer;
    this.prevButton = prevButton;
    this.nextButton = nextButton;
    this.dotsContainer = dotsContainer;
    this.sliderPicNumber = sliderPicNumber;
    this.sliderPicQty = sliderPicQty;
  }

  _sliderInitialisation() {
    const slider = tns({
      container: `.${this.controlsContainer}`,
      items: 1,
      slideBy: 'page',
      center: true,
      controlsContainer,
      prevButton: this.prevButton,
      nextButton: this.nextButton,
      navPosition: 'bottom',
      navContainer: this.dotsContainer,
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
  }

  _sliderTextSetting() {}
}
