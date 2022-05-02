'use strict';

import counter from './modules/counter';
import scroll from './modules/scroll';
import burger from './modules/burger';
import products from './modules/products';


window.addEventListener('DOMContentLoaded', () => {
   counter();
   scroll();
   burger();
   products();
});
