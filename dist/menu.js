/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n\r\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWtDO0FBQ0E7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUk7QUFDSix5REFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsby1pbnRlbnNpdi8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSBcIi4vbW9kdWxlcy9hdXRoXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5pbXBvcnQgY2FydCBmcm9tIFwiLi9tb2R1bGVzL2NhcnRcIjtcclxuXHJcbmF1dGgoKTtcclxubWVudSgpO1xyXG5jYXJ0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const buttonAuth = document.querySelector('.button-auth');\r\n    const modalAuth = document.querySelector('.modal-auth');\r\n    const closeAuth = document.querySelector('.close-auth');\r\n    const buttonOut = document.querySelector('.button-out');\r\n    const userName = document.querySelector('.user-name');\r\n    const logInForm = document.getElementById('logInForm');\r\n    const inputLogin = document.getElementById('login');\r\n    const inputPassword = document.getElementById('password');\r\n    const cartButton = document.getElementById('cart-button');\r\n\r\n    const login = (user) => {\r\n        buttonAuth.style.display = 'none';\r\n        buttonOut.style.display = 'flex';\r\n        cartButton.style.display = 'flex';\r\n        userName.style.display = 'flex';\r\n        userName.textContent = user.login;\r\n        modalAuth.style.display = 'none';\r\n    };\r\n\r\n    const logout = () => {\r\n        buttonAuth.style.display = 'flex';\r\n        buttonOut.style.display = 'none';\r\n        cartButton.style.display = 'none';\r\n        userName.style.display = 'none';\r\n        userName.textContent = '';\r\n        localStorage.removeItem('user');\r\n    };\r\n\r\n    buttonAuth.addEventListener('click', () =>{\r\n    //    console.dir(modalAuth);\r\n    modalAuth.style.display = 'flex';\r\n    });\r\n\r\n    closeAuth.addEventListener('click', () =>{\r\n    modalAuth.style.display = 'none';\r\n    });\r\n\r\n    buttonOut.addEventListener('click', () =>{\r\n        logout();\r\n    });\r\n\r\n    logInForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n    //    console.log(inputLogin.value);\r\n    //    console.log(inputPassword.value);\r\n    const user = {\r\n        login : inputLogin.value,\r\n        password : inputPassword.value\r\n    };\r\n\r\n    localStorage.setItem('user', JSON.stringify(user));\r\n    login(user);\r\n    });\r\n\r\n    if (localStorage.getItem('user')){\r\n    login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG8taW50ZW5zaXYvLi9zcmMvbW9kdWxlcy9hdXRoLmpzP2U3YjEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKTtcclxuICAgIGNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJyk7XHJcbiAgICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpO1xyXG4gICAgY29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKTtcclxuICAgIGNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xyXG4gICAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0luRm9ybScpO1xyXG4gICAgY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpO1xyXG4gICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG4gICAgY29uc3QgY2FydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0LWJ1dHRvbicpO1xyXG5cclxuICAgIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgICAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgY2FydEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmxvZ2luO1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGNhcnRCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIH07XHJcblxyXG4gICAgYnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgLy8gICAgY29uc29sZS5kaXIobW9kYWxBdXRoKTtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgIGxvZ291dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coaW5wdXRMb2dpbi52YWx1ZSk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhpbnB1dFBhc3N3b3JkLnZhbHVlKTtcclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgbG9naW4gOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkIDogaW5wdXRQYXNzd29yZC52YWx1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpe1xyXG4gICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cart = ()=>{\r\n    const cartButton = document.getElementById('cart-button');\r\n    const modalCart = document.querySelector('.modal-cart');\r\n    const close = modalCart.querySelector('.close');\r\n    const clearCart = document.querySelector('.clear-cart');\r\n\r\n    cartButton.addEventListener('click', (e)=>{\r\n            modalCart.classList.add('is-open');\r\n    });\r\n    close.addEventListener('click', ()=>{\r\n        modalCart.classList.remove('is-open');\r\n    });\r\n    clearCart.addEventListener('click', () => {\r\n        modalCart.classList.remove('is-open');\r\n    });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlFQUFlLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG8taW50ZW5zaXYvLi9zcmMvbW9kdWxlcy9jYXJ0LmpzP2FjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FydCA9ICgpPT57XHJcbiAgICBjb25zdCBjYXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQtYnV0dG9uJyk7XHJcbiAgICBjb25zdCBtb2RhbENhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2FydCcpO1xyXG4gICAgY29uc3QgY2xvc2UgPSBtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XHJcbiAgICBjb25zdCBjbGVhckNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xlYXItY2FydCcpO1xyXG5cclxuICAgIGNhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgICAgICAgICAgbW9kYWxDYXJ0LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICAgIG1vZGFsQ2FydC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1vcGVuJyk7XHJcbiAgICB9KTtcclxuICAgIGNsZWFyQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbENhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNhcnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const cardsMenu = document.querySelector('.cards-menu');\r\n\r\n    const restaurant = JSON.parse(localStorage.getItem('restaurant'));\r\n    const changeTitle = (restaurant) => {\r\n        const restaurantTitle = document.querySelector('.restaurant-title');\r\n        const rating = document.querySelector('.rating');\r\n        const price = document.querySelector('.price');\r\n        const category = document.querySelector('.category');\r\n\r\n        restaurantTitle.textContent = restaurant.name;\r\n        rating.textContent = restaurant.stars;\r\n        price.textContent = `От ${restaurant.price} ₽`;\r\n        category.textContent = restaurant.kitchen;\r\n    };\r\n    const cartArray = [];\r\n    const addToCart = (cartItem)=>{\r\n        console.log(cartArray.some(cartItem));\r\n        // if ()\r\n        cartArray.push(cartItem);\r\n        localStorage.setItem('cart',JSON.stringify( cartArray));\r\n    };\r\n    const renderItems = (data) =>{\r\n        // console.log(data);\r\n        data.forEach((elem,index,array) => {\r\n            // console.log(elem)\r\n            const {description, id, image, name, price} = elem;\r\n            const card = document.createElement('div');\r\n            card.classList.add('card');\r\n            card.innerHTML = `\r\n                <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n                <div class=\"card-text\">\r\n                    <div class=\"card-heading\">\r\n                        <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n                    </div>            \r\n                    <div class=\"card-info\">\r\n                        <div class=\"ingredients\">${description}\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-buttons\">\r\n                        <button class=\"button button-primary button-add-cart\">\r\n                            <span class=\"button-card-text\">В корзину</span>\r\n                            <span class=\"button-cart-svg\"></span>\r\n                        </button>\r\n                        <strong class=\"card-price-bold\">${price} ₽</strong>\r\n                    </div>\r\n                </div>\r\n            `;\r\n             card.querySelector('.button-card-text').addEventListener('click', () => {\r\n                 const cartItem = {name: name,price: price,count: 1, id};\r\n                 addToCart(cartItem);\r\n             });\r\n            cardsMenu.append(card);\r\n            });\r\n    };\r\n    // http://erol.qlihost.ru/db.json\r\n    if (restaurant){\r\n        changeTitle(restaurant);\r\n        fetch(`./db/${restaurant.products}`)\r\n        .then((response) => response.json())\r\n        .then((data) => {\r\n            renderItems(data);\r\n        })\r\n        .catch((error)=>{\r\n            console.log(error)\r\n        });\r\n        // .finally()\r\n    }else{\r\n        window.location.href = '/';\r\n    }\r\n\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFDQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxTQUFTLEtBQUs7QUFDaEQ7QUFDQTtBQUNBLGdFQUFnRSxLQUFLO0FBQ3JFO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsT0FBTztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBLGNBQWM7QUFDZDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQkFBb0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvLWludGVuc2l2Ly4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjYXJkc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbWVudScpO1xyXG5cclxuICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50JykpO1xyXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAocmVzdGF1cmFudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXVyYW50LXRpdGxlJyk7XHJcbiAgICAgICAgY29uc3QgcmF0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGluZycpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlJyk7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnknKTtcclxuXHJcbiAgICAgICAgcmVzdGF1cmFudFRpdGxlLnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5uYW1lO1xyXG4gICAgICAgIHJhdGluZy50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQuc3RhcnM7XHJcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBg0J7RgiAke3Jlc3RhdXJhbnQucHJpY2V9IOKCvWA7XHJcbiAgICAgICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LmtpdGNoZW47XHJcbiAgICB9O1xyXG4gICAgY29uc3QgY2FydEFycmF5ID0gW107XHJcbiAgICBjb25zdCBhZGRUb0NhcnQgPSAoY2FydEl0ZW0pPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FydEFycmF5LnNvbWUoY2FydEl0ZW0pKTtcclxuICAgICAgICAvLyBpZiAoKVxyXG4gICAgICAgIGNhcnRBcnJheS5wdXNoKGNhcnRJdGVtKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsSlNPTi5zdHJpbmdpZnkoIGNhcnRBcnJheSkpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbmRlckl0ZW1zID0gKGRhdGEpID0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoZWxlbSxpbmRleCxhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlbGVtKVxyXG4gICAgICAgICAgICBjb25zdCB7ZGVzY3JpcHRpb24sIGlkLCBpbWFnZSwgbmFtZSwgcHJpY2V9ID0gZWxlbTtcclxuICAgICAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAgICAgY2FyZC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7aW1hZ2V9XCIgYWx0PVwiJHtuYW1lfVwiIGNsYXNzPVwiY2FyZC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtcmVnXCI+JHtuYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ncmVkaWVudHNcIj4ke2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLXByaW1hcnkgYnV0dG9uLWFkZC1jYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJ1dHRvbi1jYXJkLXRleHRcIj7QkiDQutC+0YDQt9C40L3Rgzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcnQtc3ZnXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImNhcmQtcHJpY2UtYm9sZFwiPiR7cHJpY2V9IOKCvTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGA7XHJcbiAgICAgICAgICAgICBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2FyZC10ZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgY2FydEl0ZW0gPSB7bmFtZTogbmFtZSxwcmljZTogcHJpY2UsY291bnQ6IDEsIGlkfTtcclxuICAgICAgICAgICAgICAgICBhZGRUb0NhcnQoY2FydEl0ZW0pO1xyXG4gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNhcmRzTWVudS5hcHBlbmQoY2FyZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIC8vIGh0dHA6Ly9lcm9sLnFsaWhvc3QucnUvZGIuanNvblxyXG4gICAgaWYgKHJlc3RhdXJhbnQpe1xyXG4gICAgICAgIGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpO1xyXG4gICAgICAgIGZldGNoKGAuL2RiLyR7cmVzdGF1cmFudC5wcm9kdWN0c31gKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zKGRhdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcik9PntcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gLmZpbmFsbHkoKVxyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICB9XHJcblxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBtZW51OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;