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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nbG8taW50ZW5zaXYvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aFwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIjtcclxuXHJcbmF1dGgoKTtcclxubWVudSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    'use strict';\r\n    const buttonAuth = document.querySelector('.button-auth');\r\n    const modalAuth = document.querySelector('.modal-auth');\r\n    const closeAuth = document.querySelector('.close-auth');\r\n    const buttonOut = document.querySelector('.button-out');\r\n    const userName = document.querySelector('.user-name');\r\n    const logInForm = document.getElementById('logInForm');\r\n    const inputLogin = document.getElementById('login');\r\n    const inputPassword = document.getElementById('password');\r\n\r\n    const login = (user) => {\r\n        buttonAuth.style.display = 'none';\r\n        buttonOut.style.display = 'flex';\r\n        userName.style.display = 'flex';\r\n        userName.textContent = user.login;\r\n        modalAuth.style.display = 'none';\r\n    };\r\n\r\n    const logout = () => {\r\n        buttonAuth.style.display = 'flex';\r\n        buttonOut.style.display = 'none';\r\n        userName.style.display = 'none';\r\n        userName.textContent = '';\r\n        localStorage.removeItem('user');\r\n    };\r\n\r\n    buttonAuth.addEventListener('click', () =>{\r\n    //    console.dir(modalAuth);\r\n    modalAuth.style.display = 'flex';\r\n    });\r\n\r\n    closeAuth.addEventListener('click', () =>{\r\n    modalAuth.style.display = 'none';\r\n    });\r\n\r\n    buttonOut.addEventListener('click', () =>{\r\n        logout();\r\n    });\r\n\r\n    logInForm.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n    //    console.log(inputLogin.value);\r\n    //    console.log(inputPassword.value);\r\n    const user = {\r\n        login : inputLogin.value,\r\n        password : inputPassword.value\r\n    };\r\n\r\n    localStorage.setItem('user', JSON.stringify(user));\r\n    login(user);\r\n    });\r\n\r\n    if (localStorage.getItem('user')){\r\n    login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2dsby1pbnRlbnNpdi8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYXV0aCcpO1xyXG4gICAgY29uc3QgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWF1dGgnKTtcclxuICAgIGNvbnN0IGNsb3NlQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1hdXRoJyk7XHJcbiAgICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW91dCcpO1xyXG4gICAgY29uc3QgdXNlck5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1uYW1lJyk7XHJcbiAgICBjb25zdCBsb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nSW5Gb3JtJyk7XHJcbiAgICBjb25zdCBpbnB1dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJyk7XHJcbiAgICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcblxyXG4gICAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gdXNlci5sb2dpbjtcclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHVzZXJOYW1lLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgIH07XHJcblxyXG4gICAgYnV0dG9uQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgLy8gICAgY29uc29sZS5kaXIobW9kYWxBdXRoKTtcclxuICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0pO1xyXG5cclxuICAgIGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgIGxvZ291dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gICAgY29uc29sZS5sb2coaW5wdXRMb2dpbi52YWx1ZSk7XHJcbiAgICAvLyAgICBjb25zb2xlLmxvZyhpbnB1dFBhc3N3b3JkLnZhbHVlKTtcclxuICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgbG9naW4gOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICAgIHBhc3N3b3JkIDogaW5wdXRQYXNzd29yZC52YWx1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKTtcclxuICAgIGxvZ2luKHVzZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpe1xyXG4gICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cardsMenu = document.querySelector('.cards-menu');\r\nconst menu = () => {\r\n    const restourant = 'food-band';\r\n    const renderItems = (data) =>{\r\n        console.log(data);\r\n        data.forEach((elem,index,array) => {\r\n            console.log(elem)});\r\n            const {description, id, image, name, price} = elem;\r\n    };\r\n    console.log(a.data);\r\n    // http://erol.qlihost.ru/db.json\r\n    fetch(`./db/${restourant}.json`)\r\n        .then((response) => response.json())\r\n        .then((data) => {\r\n            renderItems(data);\r\n        })\r\n        .catch((error)=>{\r\n            console.log(error)\r\n        });\r\n        // .finally()\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n/*\r\n<main class=\"main\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<section class=\"menu\">\r\n\t\t\t\t<div class=\"section-heading\">\r\n\t\t\t\t\t<h2 class=\"section-title restaurant-title\">Пицца Плюс</h2>\r\n\t\t\t\t\t<div class=\"card-info\">\r\n\t\t\t\t\t\t<div class=\"rating\">\r\n\t\t\t\t\t\t\t4.5\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"price\">От 900 ₽</div>\r\n\t\t\t\t\t\t<div class=\"category\">Пицца</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /.card-info -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"cards cards-menu\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<img src=\"img/pizza-plus/pizza-vesuvius.jpg\" alt=\"image\" class=\"card-image\" />\r\n\t\t\t\t\t\t<div class=\"card-text\">\r\n\t\t\t\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"card-title card-title-reg\">Пицца Везувий</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /.card-heading -->\r\n\t\t\t\t\t\t\t<div class=\"card-info\">\r\n\t\t\t\t\t\t\t\t<div class=\"ingredients\">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец\r\n\t\t\t\t\t\t\t\t\t«Халапенье», соус «Тобаско», томаты.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /.card-info -->\r\n\t\t\t\t\t\t\t<div class=\"card-buttons\">\r\n\t\t\t\t\t\t\t\t<button class=\"button button-primary button-add-cart\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"button-card-text\">В корзину</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"button-cart-svg\"></span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<strong class=\"card-price-bold\">545 ₽</strong>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- /.card-text -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- /.card --></div>*///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsbUJBQW1CLHFDQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsV0FBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUVBQWUsSUFBSSxFQUFDO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2xvLWludGVuc2l2Ly4vc3JjL21vZHVsZXMvbWVudS5qcz8yZmFkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcmRzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcy1tZW51Jyk7XHJcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXN0b3VyYW50ID0gJ2Zvb2QtYmFuZCc7XHJcbiAgICBjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goKGVsZW0saW5kZXgsYXJyYXkpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZWxlbSl9KTtcclxuICAgICAgICAgICAgY29uc3Qge2Rlc2NyaXB0aW9uLCBpZCwgaW1hZ2UsIG5hbWUsIHByaWNlfSA9IGVsZW07XHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coYS5kYXRhKTtcclxuICAgIC8vIGh0dHA6Ly9lcm9sLnFsaWhvc3QucnUvZGIuanNvblxyXG4gICAgZmV0Y2goYC4vZGIvJHtyZXN0b3VyYW50fS5qc29uYClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICByZW5kZXJJdGVtcyhkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpPT57XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIC5maW5hbGx5KClcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgbWVudTtcclxuLypcclxuPG1haW4gY2xhc3M9XCJtYWluXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdDxzZWN0aW9uIGNsYXNzPVwibWVudVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzZWN0aW9uLWhlYWRpbmdcIj5cclxuXHRcdFx0XHRcdDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGUgcmVzdGF1cmFudC10aXRsZVwiPtCf0LjRhtGG0LAg0J/Qu9GO0YE8L2gyPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmF0aW5nXCI+XHJcblx0XHRcdFx0XHRcdFx0NC41XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicHJpY2VcIj7QntGCIDkwMCDigr08L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhdGVnb3J5XCI+0J/QuNGG0YbQsDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8IS0tIC8uY2FyZC1pbmZvIC0tPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkcyBjYXJkcy1tZW51XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz1cImltZy9waXp6YS1wbHVzL3BpenphLXZlc3V2aXVzLmpwZ1wiIGFsdD1cImltYWdlXCIgY2xhc3M9XCJjYXJkLWltYWdlXCIgLz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWhlYWRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1yZWdcIj7Qn9C40YbRhtCwINCS0LXQt9GD0LLQuNC5PC9oMz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8IS0tIC8uY2FyZC1oZWFkaW5nIC0tPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50c1wiPtCh0L7Rg9GBINGC0L7QvNCw0YLQvdGL0LksINGB0YvRgCDCq9Cc0L7RhtCw0YDQtdC70LvQsMK7LCDQstC10YLRh9C40L3QsCwg0L/QtdC/0L/QtdGA0L7QvdC4LCDQv9C10YDQtdGGXHJcblx0XHRcdFx0XHRcdFx0XHRcdMKr0KXQsNC70LDQv9C10L3RjNC1wrssINGB0L7Rg9GBIMKr0KLQvtCx0LDRgdC60L7Cuywg0YLQvtC80LDRgtGLLlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PCEtLSAvLmNhcmQtaW5mbyAtLT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC1idXR0b25zXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5IGJ1dHRvbi1hZGQtY2FydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImJ1dHRvbi1jYXJkLXRleHRcIj7QkiDQutC+0YDQt9C40L3Rgzwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmcgY2xhc3M9XCJjYXJkLXByaWNlLWJvbGRcIj41NDUg4oK9PC9zdHJvbmc+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8IS0tIC8uY2FyZC10ZXh0IC0tPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8IS0tIC8uY2FyZCAtLT48L2Rpdj4qLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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