import { tns } from '../../node_modules/tiny-slider/src/tiny-slider';

export default class SliderInit {
  constructor(
    sliderContainer,
    sliderList,
    controlsContainer,
    prevButton,
    nextButton,
    dotsContainer,
    sliderPicNumber,
    sliderPicQty,
  ) {
    this.sliderContainer = sliderContainer;
    this.sliderList = sliderList;
    this.controlsContainer = controlsContainer;
    this.prevButton = prevButton;
    this.nextButton = nextButton;
    this.dotsContainer = dotsContainer;
    this.sliderPicNumber = sliderPicNumber;
    this.sliderPicQty = sliderPicQty;
    this.viewportWidth = document.documentElement.clientWidth;
    this.slider = tns({
      container: `.${this.sliderList}`,
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
          fixedWidth: this.viewportWidth * 0.95,
          gutter: this.viewportWidth * 0.05,
        },
        820: {
          fixedWidth: false,
          gutter: false,
        },
      },
    });
    this._sliderTextSetting = this._sliderTextSetting.bind(this);
    this._showNextSlideIndex = this._showNextSlideIndex.bind(this);
    this._showPrevSlideIndex = this._showPrevSlideIndex.bind(this);
    this._showCurrentSlideIndex = this._showCurrentSlideIndex.bind(this);
  }

  _sliderTextSetting() {
    this.sliderPicNumber.textContent = `${this.slider.getInfo().index}/`;
    this.sliderPicQty.textContent = `${this.slider.getInfo().pages}`;
  }

  _showNextSlideIndex() {
    const sliderItems = this.slider.getInfo().slideCount;
    const activeSlide = this.slider.getInfo().index;
    if (activeSlide === sliderItems) {
      this.sliderPicNumber.textContent = `${1}/`;
    } else {
      this.sliderPicNumber.textContent = `${activeSlide + 1}/`;
    }
  }

  _showPrevSlideIndex() {
    const sliderItems = slider.getInfo().slideCount;
    const activeSlide = slider.getInfo().index;
    if (activeSlide === 1) {
      sliderPicNumber.textContent = `${sliderItems}/`;
    } else {
      sliderPicNumber.textContent = `${activeSlide - 1}/`;
    }
  }

  _showCurrentSlideIndex(e) {
    this.sliderPicNumber.textContent = `${e.target.id}/`;
  }

  setListeners() {
    this._sliderTextSetting();
    this.prevButton.addEventListener('click', this._showPrevSlideIndex);
    this.nextButton.addEventListener('click', this._showNextSlideIndex);
    Array.from(this.dotsContainer.querySelectorAll('.slider__dot')).forEach((item) => {
      item.addEventListener('click', this._showCurrentSlideIndex);
    });
  }
}
