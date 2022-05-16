/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const burger = () => {
  const open = document.querySelector('.burger-open'),
        close = document.querySelector('.burger-close'),
        burger = document.querySelector('.burger');
  close.classList.add('hide');
  open.addEventListener('click', () => {
    openModal();
  });
  close.addEventListener('click', () => {
    closeModal();
  });
  burger.addEventListener('click', e => {
    if (e.target === burger) {
      closeModal();
    }
  });

  function openModal() {
    document.body.style.overflow = 'hidden'; // запретить скролл

    open.classList.add('hide');
    close.classList.remove('hide');
    burger.style.cssText = `
      top: ${window.pageYOffset}px;
      `;
  }

  function closeModal() {
    document.body.style.overflow = ''; // запретить скролл

    open.classList.remove('hide');
    close.classList.add('hide');
    burger.style.cssText = `
      top: -1000px;
      `;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const counter = a => {
  const parentCounter = document.querySelector('.purchase__controls'),
        purchaseCounter = document.querySelector('.purchase__counter');
  parentCounter.addEventListener('click', e => {
    if (e.target && e.target.dataset.count === 'plus' && purchaseCounter.value < 10) {
      purchaseCounter.value = +purchaseCounter.value + 1;
    }

    if (e.target && e.target.dataset.count === 'minus' && purchaseCounter.value > 0) {
      purchaseCounter.value = +purchaseCounter.value - 1;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (counter);

/***/ }),

/***/ "./src/js/modules/prewiev-slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/prewiev-slider.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const prewievSlider = () => {
  const mainPick = document.querySelector('.preview__img img');
  const prewiev = document.querySelectorAll('.slider__inner');

  function hide() {
    prewiev.forEach(i => {
      i.classList.add('hidden-slider');
    });
  }

  prewiev.forEach(i => {
    i.addEventListener('click', e => {
      if (i.classList.contains('hidden-slider')) {
        hide();
        mainPick.src = e.target.firstElementChild.src;
        i.classList.toggle('hidden-slider');
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (prewievSlider);

/***/ }),

/***/ "./src/js/modules/products.js":
/*!************************************!*\
  !*** ./src/js/modules/products.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const products = () => {
  const counter = document.querySelector('.purchase__counter');
  const inner = document.querySelector('.purchase__inner');
  const title = document.querySelector('.info__title');
  let temp = 0;
  inner.addEventListener('click', e => {
    if (e.target && e.target.dataset.add) {
      if (counter.value > 0 && temp === 0) {
        temp = 1;
        const messageAdd = document.createElement('div');
        messageAdd.classList.add('message');
        let a = "";
        let b = "";

        if (counter.value < 5 && counter.value > 1) {
          a = 'a';
          b = 'о';
        }

        if (counter.value > 4) {
          a = 'ов';
          b = 'о';
        }

        messageAdd.style.cssText = `
                  display: block;
                  margin: 15px 0px -15px 0px;
                  text-align: center;
               `;

        if (e.target.dataset.add === 'add') {
          messageAdd.textContent = `В корзину добавлен${b} ${counter.value} товар${a}`;
        } else {
          messageAdd.textContent = `Товар "${title.textContent}" добавлен в избранное`;
        }

        inner.insertAdjacentElement('afterend', messageAdd);
        setTimeout(() => {
          messageAdd.remove();
          temp = 0;
        }, 2000);
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (products);

/***/ }),

/***/ "./src/js/modules/scroll.js":
/*!**********************************!*\
  !*** ./src/js/modules/scroll.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const scroll = () => {
  const header = document.querySelector('.header__inner'),
        line = document.querySelector('.header__line'),
        width = window.getComputedStyle(header).height,
        burger = document.querySelector('.burger-open'); // если открыт бургер, но хедер не убирается

  let prevScroll = window.pageYOffset;
  let currentScroll;
  window.addEventListener('scroll', () => {
    currentScroll = scrollY;

    if (currentScroll > prevScroll && !burger.classList.contains('hide')) {
      // &&... если открыт бургер, но хедер не убирается
      header.style.cssText = `
            top: -${width};
         `;
      line.style.cssText = `
            top: -${width};
         `;
    } else {
      header.style.cssText = `
         top: ${0};
      `;
      line.style.cssText = `
         top: ${0};
      `;
    }

    prevScroll = currentScroll;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (scroll);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/counter */ "./src/js/modules/counter.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ "./src/js/modules/scroll.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/products */ "./src/js/modules/products.js");
/* harmony import */ var _modules_prewiev_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/prewiev-slider */ "./src/js/modules/prewiev-slider.js");







window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_counter__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_products__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_prewiev_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map