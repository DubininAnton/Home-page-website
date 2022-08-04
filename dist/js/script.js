/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/carousel.js":
/*!************************************!*\
  !*** ./src/js/modules/carousel.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const carousel = (slider, url) => {
  const carouselBoxItem = document.querySelector(slider);
  (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResourse)(url).then(res => {
    res.forEach(item => {
      // Создаю карточку
      const card = document.createElement('div'); // Создаю первую строку

      const row = document.createElement('div'); // Левая часть первой строки

      const rowLeft = document.createElement('div'); // Создаю img в первой строку

      const img = document.createElement('img'); // Строка имени и фамилии

      const name = document.createElement('div');
      name.setAttribute('class', 'reviews__title');
      name.innerHTML = `${item.title}`; // Строка status

      const status = document.createElement('span');
      status.innerHTML = `${item.status}`; // Строка desciption

      const descr = document.createElement('div');
      descr.setAttribute('class', 'reviews__descr');
      descr.innerHTML = `${item.descr}`; // Строка footer в карточке отзыва

      const footer = document.createElement('div');
      footer.setAttribute('style', 'display: flex; align-items: center; margin-top:15px;'); // Звезда в footer

      const star = document.createElement('img');
      star.setAttribute('src', `${item.star}`);
      star.setAttribute('style', 'margin-right: 8px'); // Строка рейтига

      const raiting = document.createElement('div');
      raiting.innerHTML = `${item.raiting}`;
      img.setAttribute('class', 'reviews__img');
      img.setAttribute('src', `${item.photo}`);
      row.setAttribute("class", 'reviews__rowCard');
      row.appendChild(img);
      row.appendChild(rowLeft);
      rowLeft.appendChild(name);
      rowLeft.appendChild(status);
      card.appendChild(row);
      card.appendChild(descr);
      footer.appendChild(star);
      footer.appendChild(raiting);
      card.appendChild(footer);
      carouselBoxItem.appendChild(card);
    });
  }).then(() => {
    $(slider).slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    });
  }); // .then(() => {itemCity = document.querySelectorAll(city)})
  // .then(()=> {getListenerInItemCity()})
  // .catch(error => console.log(error));
};

/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");


const header = (url, modal, down, up, city, close, selectedCity, wrapperElement) => {
  const modalWindow = document.querySelector(modal);
  const arrowDown = document.querySelector(down);
  const arrowUp = document.querySelector(up);
  let itemCity = '';
  const exit = document.querySelector(close);
  const selectCity = document.querySelector(selectedCity);
  const wrapper = document.querySelector(wrapperElement);

  const getListenerInItemCity = () => {
    itemCity.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target.getAttribute('class') === 'modalCity__city') {
          selectCity.innerHTML = e.target.getAttribute('data-city');
          selectCity.setAttribute('class', 'header__selectedCity active');
          hideModal();
        }
      });
    });
  };

  (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResourse)(url).then(res => {
    res.forEach(item => {
      const modalCityGrid = document.querySelector('.modalCity__grid');
      const modalCityCity = document.createElement('div');
      modalCityCity.setAttribute('class', 'modalCity__city');
      modalCityCity.setAttribute('data-city', `${item}`);
      modalCityCity.innerHTML = item;
      modalCityGrid.appendChild(modalCityCity);
    });
  }).then(() => {
    itemCity = document.querySelectorAll(city);
  }).then(() => {
    getListenerInItemCity();
  }).catch(error => console.log(error));

  const hideModal = () => {
    wrapper.setAttribute('class', 'header__wrapperCity');
    modalWindow.style.display = 'none';
    arrowDown.style.display = "";
    arrowUp.style.display = "none";
  };

  hideModal();

  const showModal = () => {
    arrowDown.addEventListener("click", () => {
      wrapper.setAttribute('class', 'selectedButtom header__wrapperCity');
      modalWindow.style.display = '';
      arrowDown.style.display = "none";
      arrowUp.style.display = "";
    });
  };

  showModal();
  arrowUp.addEventListener('click', () => {
    hideModal();
  });
  exit.addEventListener('click', () => {
    hideModal();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ }),

/***/ "./src/js/modules/myForm.js":
/*!**********************************!*\
  !*** ./src/js/modules/myForm.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");
// import * as yup from 'yup';


const myForm = (name, button, form, number, email, labelForEmail) => {
  const clientName = document.querySelector(name);
  const buttonForm = document.querySelector(button);
  const myUseForm = document.querySelector(form);
  const myNumber = document.querySelector(number);
  const myEmail = document.querySelector(email);
  const MylabelForEmail = document.querySelector(labelForEmail);
  let matrix = "+7(___)___-__-__";
  myEmail.addEventListener('blur', e => {
    /* ^ начало строки
        \w все буквы и цифры
        . любой символ кроме перевода строки
        _ любая цифра, буква или знак подчеркивания
        - интервал, любой символ от a до z
        [+]? одно или несколько вхождений соответсвенно знака +
         \w все буквы и цифры
        . любой символ кроме перевода строки
        _ любая цифра, буква или знак подчеркивания
        @ наличие знака собачки
        \w все буквы и цифры
        . любой символ кроме перевода строки
        - интервал, любой символ от a до z
        \. поиск точки
        [a-zA-Z] все буквы
        {2,6} количество вхождений букв от 2 до 6 
        $ конец строки*/
    if (e.target.value.lenght === 0 || e.target.value.match(/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/) === null) {
      MylabelForEmail.innerHTML = 'Не верный формат email';
    } else {
      MylabelForEmail.innerHTML = "";
    }
  });
  /* Маска ввода номера телефона */

  const telephone = action => {
    let placeInLine;
    myNumber.addEventListener(action, e => {
      e.target.value = matrix;
      placeInLine = myNumber.value.indexOf('_');
      myNumber.setSelectionRange(placeInLine, placeInLine); // if(action === "keyup") {

      try {
        const pressKeyCode = String.fromCharCode(e.keyCode);
        /* Определяю, что за клавиша была нажата */

        if (e.key.search(/[a-z]/g) === 0) {
          myNumber.value = matrix;
        }
        /* Ввод цифр с клавиатуры */


        if (e.key !== "Backspace" && e.key !== "Delete" && e.keyCode >= 96 && e.keyCode <= 105) {
          enterNumber(48, placeInLine, e);
        }
        /* Ввод цифр с Numpad */


        if (e.key !== "Backspace" && e.key !== "Delete" && e.keyCode >= 48 && e.keyCode <= 57) {
          enterNumber(0, placeInLine, e);
        }

        if (e.key.search("Backspace") === 0) {
          matrix = matrix.replace(/\d(?=\D*$)/, "_");
          myNumber.value = matrix.substring(0, 16);
          placeInLine = myNumber.value.indexOf('_');
          myNumber.setSelectionRange(placeInLine, placeInLine);
        }
      } catch (error) {
        error => console.log(error);
      } // }

    });
  };

  telephone("keyup");
  telephone("focus");
  telephone("click");

  const enterNumber = (number, placeInLine, e) => {
    placeInLine = myNumber.value.indexOf('_');
    matrix = myNumber.value.replace("_", String.fromCharCode(e.keyCode - `${number}`));
    myNumber.value = matrix.substring(0, 16);
    placeInLine = myNumber.value.indexOf('_');
    myNumber.setSelectionRange(placeInLine, placeInLine);
  };
  /* Отправка формы */


  buttonForm.addEventListener('click', e => {
    e.preventDefault();
    let collectionInformation = {};

    if (clientName.value !== '' && myNumber.value !== '' && myEmail.value !== '' && MylabelForEmail.textContent === '') {
      const formSend = new FormData(myUseForm);

      for (var [key, value] of formSend.entries()) {
        collectionInformation[key] = value;
      }
      /* Пришлось вытащить данные из new FormData записать их в collectionInformation и отправить т.к. formSend отправлялся пустым*/


      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/database', collectionInformation).then(res => {
        if (res.ok) {
          buttonForm.textContent = "Данные отправлены";
          buttonForm.setAttribute('style', 'color:green');
          setTimeout(() => {
            buttonForm.textContent = "Отправить";
            buttonForm.setAttribute('style', 'color: black');
          }, 3000);
        }
      }).catch(err => console.log(err)).finally(() => {
        clientName.value = null;
        myNumber.value = null;
        myEmail.value = null;
      });
    } else {
      buttonForm.textContent = "Введены не все данные";
      buttonForm.setAttribute('style', 'background-color:red');
      setTimeout(() => {
        buttonForm.textContent = "Отправить";
        buttonForm.setAttribute('style', 'background-color: orange');
      }, 3000);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (myForm);

/***/ }),

/***/ "./src/js/modules/program.js":
/*!***********************************!*\
  !*** ./src/js/modules/program.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const program = (trigger, list) => {
  const triggerButton = document.querySelectorAll(trigger);
  const listProgram = document.querySelectorAll(list);

  const selectedButtom = age => {
    triggerButton.forEach(item => {
      if (item.getAttribute('data-info') === age) {
        item.setAttribute('class', 'selectedButtom program__item');
      } else {
        item.setAttribute('class', 'program__item');
      }
    });
  };

  selectedButtom('children');

  const showList = age => {
    listProgram.forEach(item => {
      if (item.getAttribute('data-info') === age) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  };

  showList('children');
  triggerButton.forEach(item => {
    item.addEventListener('click', e => {
      if (e.target) {
        selectedButtom(e.target.parentElement.getAttribute('data-info'));
        showList(e.target.parentElement.getAttribute('data-info'));
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (program);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResourse": function() { return /* binding */ getResourse; },
/* harmony export */   "postData": function() { return /* binding */ postData; }
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status:${res.status}`);
  }

  return await res;
};

const getResourse = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status:${res.status}`);
  }

  return await res.json();
};



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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header */ "./src/js/modules/header.js");
/* harmony import */ var _modules_program__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/program */ "./src/js/modules/program.js");
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/carousel */ "./src/js/modules/carousel.js");
/* harmony import */ var _modules_myForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/myForm */ "./src/js/modules/myForm.js");




window.addEventListener('DOMContentLoaded', () => {
  (0,_modules_header__WEBPACK_IMPORTED_MODULE_0__["default"])("http://localhost:3000/cities", '.modalCity', '.header__arrowDown', '.header__arrowUp', '.modalCity__city', '.modalCity__close', '.header__selectedCity', '.header__wrapperCity');
  (0,_modules_program__WEBPACK_IMPORTED_MODULE_1__["default"])('.program__item', '.list');
  (0,_modules_carousel__WEBPACK_IMPORTED_MODULE_2__["default"])('.reviews__carousel', 'http://localhost:3000/reviews');
  (0,_modules_myForm__WEBPACK_IMPORTED_MODULE_3__["default"])('.dataCollection__name', '#dataCollectionButton', '.dataCollection__form', '.dataCollection__telephone', '.dataCollection__email', '#labelForEmail');
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map