'use strict';

import counter from './modules/counter';
import scroll from './modules/scroll';
import burger from './modules/burger';
import products from './modules/products';
import prewievSlider from './modules/prewiev-slider';


window.addEventListener('DOMContentLoaded', () => {
   counter();
   scroll();
   burger();
   products();
   prewievSlider();
});
