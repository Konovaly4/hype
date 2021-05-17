import './style.scss';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
  container: '.my-slider',
  items: 1,
  fixedWidth: false,
  gutter: 50,
  slideBy: 'page',
  autoplay: true,
  center: true,
  controlsPosition: 'bottom',
  swipeAngle: false,
});
slider.pause();
