import './style.scss';
import { tns } from '../node_modules/tiny-slider/src/tiny-slider';

const slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  center: true,
});
