/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homePageLoad: () => (/* binding */ homePageLoad)
/* harmony export */ });
const cardItem = [
    {imageCard: "./assets/chefs.png",
    alt: "the chefs", 
    title: "Meet the Chefs", 
    description: "Click the button below to learn more<br>about Shawnee's Homestyle!",
    button: "Who's Shawnee?"},
    {imageCard: "./assets/order.png",
    alt: "order here", 
    title: "Order", 
    description: "Click the button below<br>to place an order!",
    button: "Order"},
    {imageCard: "./assets/menu.png",
    alt: "menu graphic", 
    title: "Menu", 
    description: "Click the button below<br>to view the menu!",
    button: "Menu"}
];

const contentDiv = document.getElementById('content');

const homePageLoad = function () {
    //header
    const headerBox = document.createElement('header');
    const navList = document.createElement('ul');
    navList.classList.add('nav');

    navList.innerHTML = "<li class='logo-box' href ='./indexedDB.html'><img class='logo' src='./assets/logo.png' alt='Shawnee Homestyle'></li>\
                <li id='about-nav'>About</li>\
                <li id='menu-nav'>Menu</li>\
                <li id='order-nav'>Order</li>";

    headerBox.appendChild(navList);
    contentDiv.appendChild(headerBox);
    
    //body
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero');
    contentDiv.appendChild(heroDiv);
    
    const heroImg = document.createElement('img');
    heroImg.classList.add('hero-img');
    heroImg.src = './assets/hero.png';
    heroImg.alt = 'picture of filipino food';
    heroDiv.appendChild(heroImg);

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cards');
    for (let i=0; i <3; i++) {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardImg = document.createElement('img');
        cardImg.classList.add('card-img');
        cardImg.src = `${cardItem[i].imageCard}`;
        cardImg.alt = `${cardItem[i].alt}`;

        let cardTitle = document.createElement('h2');
        cardTitle.innerHTML = `${cardItem[i].title}`;

        let cardDescrip = document.createElement('p');
        cardDescrip.innerHTML = `${cardItem[i].description}`;

        let cardBtn = document.createElement('button');
        cardBtn.classList.add('card-btn');
        cardBtn.classList.add(`button-${i}`);
        cardBtn.innerHTML = `${cardItem[i].button}`;

        cardDiv.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardDescrip);
        card.appendChild(cardBtn);
    }
    contentDiv.appendChild(cardDiv);
    const aboutButton = document.querySelector('.button-0');
    aboutButton.addEventListener('click', (e) => {
        contentDiv.removeChild(heroDiv);
        contentDiv.removeChild(cardDiv);
        const footerBox = document.querySelector('.footer-box');
        contentDiv.removeChild(footerBox);
    })

    //footer
    const footerBox = document.createElement('footer');
    footerBox.classList.add('footer-box');
    const footerDiv = document.createElement('div');
    footerBox.appendChild(footerDiv);
    
    const footerImg = document.createElement('img');
    footerImg.classList.add('footer-logo');
    footerImg.src = "./assets/logo.png";
    footerImg.alt = "Shawnee's Homestyle";
    
    const footerCredits = document.createElement('p');
    footerCredits.innerHTML = "Website by Glenn Arnade";
    
    contentDiv.appendChild(footerBox);
    footerBox.appendChild(footerDiv);
    footerDiv.appendChild(footerImg);
    footerDiv.appendChild(footerCredits);
}



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");




window.addEventListener("load", function() {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();

    const aboutNav = document.getElementById('about-nav');
    const menuNav = document.getElementById('menu-nav');
    const orderNav = document.getElementById('order-nav');

})















})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0MseUJBQXlCLGdCQUFnQjs7QUFFekM7QUFDQSxpQ0FBaUMsa0JBQWtCOztBQUVuRDtBQUNBLG1DQUFtQyx3QkFBd0I7O0FBRTNEO0FBQ0E7QUFDQSx3Q0FBd0MsRUFBRTtBQUMxQywrQkFBK0IsbUJBQW1COztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDcEdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0M7Ozs7QUFJdEM7QUFDQSxJQUFJLG1EQUFZOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkSXRlbSA9IFtcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL2NoZWZzLnBuZ1wiLFxuICAgIGFsdDogXCJ0aGUgY2hlZnNcIiwgXG4gICAgdGl0bGU6IFwiTWVldCB0aGUgQ2hlZnNcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdyB0byBsZWFybiBtb3JlPGJyPmFib3V0IFNoYXduZWUncyBIb21lc3R5bGUhXCIsXG4gICAgYnV0dG9uOiBcIldobydzIFNoYXduZWU/XCJ9LFxuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvb3JkZXIucG5nXCIsXG4gICAgYWx0OiBcIm9yZGVyIGhlcmVcIiwgXG4gICAgdGl0bGU6IFwiT3JkZXJcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdzxicj50byBwbGFjZSBhbiBvcmRlciFcIixcbiAgICBidXR0b246IFwiT3JkZXJcIn0sXG4gICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy9tZW51LnBuZ1wiLFxuICAgIGFsdDogXCJtZW51IGdyYXBoaWNcIiwgXG4gICAgdGl0bGU6IFwiTWVudVwiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJDbGljayB0aGUgYnV0dG9uIGJlbG93PGJyPnRvIHZpZXcgdGhlIG1lbnUhXCIsXG4gICAgYnV0dG9uOiBcIk1lbnVcIn1cbl07XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBob21lUGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy9oZWFkZXJcbiAgICBjb25zdCBoZWFkZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gICAgbmF2TGlzdC5pbm5lckhUTUwgPSBcIjxsaSBjbGFzcz0nbG9nby1ib3gnIGhyZWYgPScuL2luZGV4ZWREQi5odG1sJz48aW1nIGNsYXNzPSdsb2dvJyBzcmM9Jy4vYXNzZXRzL2xvZ28ucG5nJyBhbHQ9J1NoYXduZWUgSG9tZXN0eWxlJz48L2xpPlxcXG4gICAgICAgICAgICAgICAgPGxpIGlkPSdhYm91dC1uYXYnPkFib3V0PC9saT5cXFxuICAgICAgICAgICAgICAgIDxsaSBpZD0nbWVudS1uYXYnPk1lbnU8L2xpPlxcXG4gICAgICAgICAgICAgICAgPGxpIGlkPSdvcmRlci1uYXYnPk9yZGVyPC9saT5cIjtcblxuICAgIGhlYWRlckJveC5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckJveCk7XG4gICAgXG4gICAgLy9ib2R5XG4gICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG4gICAgXG4gICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWcnKTtcbiAgICBoZXJvSW1nLnNyYyA9ICcuL2Fzc2V0cy9oZXJvLnBuZyc7XG4gICAgaGVyb0ltZy5hbHQgPSAncGljdHVyZSBvZiBmaWxpcGlubyBmb29kJztcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9JbWcpO1xuXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPDM7IGkrKykge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgICBsZXQgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYXJkSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gICAgICAgIGNhcmRJbWcuc3JjID0gYCR7Y2FyZEl0ZW1baV0uaW1hZ2VDYXJkfWA7XG4gICAgICAgIGNhcmRJbWcuYWx0ID0gYCR7Y2FyZEl0ZW1baV0uYWx0fWA7XG5cbiAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS50aXRsZX1gO1xuXG4gICAgICAgIGxldCBjYXJkRGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZERlc2NyaXAuaW5uZXJIVE1MID0gYCR7Y2FyZEl0ZW1baV0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICBsZXQgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYnRuJyk7XG4gICAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZChgYnV0dG9uLSR7aX1gKTtcbiAgICAgICAgY2FyZEJ0bi5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS5idXR0b259YDtcblxuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbWcpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXApO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCdG4pO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0wJyk7XG4gICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGhlcm9EaXYpO1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNhcmREaXYpO1xuICAgICAgICBjb25zdCBmb290ZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWJveCcpO1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGZvb3RlckJveCk7XG4gICAgfSlcblxuICAgIC8vZm9vdGVyXG4gICAgY29uc3QgZm9vdGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyQm94LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1ib3gnKTtcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICBcbiAgICBjb25zdCBmb290ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmb290ZXJJbWcuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxvZ28nKTtcbiAgICBmb290ZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgIGZvb3RlckltZy5hbHQgPSBcIlNoYXduZWUncyBIb21lc3R5bGVcIjtcbiAgICBcbiAgICBjb25zdCBmb290ZXJDcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlckNyZWRpdHMuaW5uZXJIVE1MID0gXCJXZWJzaXRlIGJ5IEdsZW5uIEFybmFkZVwiO1xuICAgIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyQm94KTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVySW1nKTtcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyQ3JlZGl0cyk7XG59XG5cbmV4cG9ydCB7aG9tZVBhZ2VMb2FkfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWVQYWdlTG9hZCB9IGZyb20gXCIuL2hvbWVcIjtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICBob21lUGFnZUxvYWQoKTtcblxuICAgIGNvbnN0IGFib3V0TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LW5hdicpO1xuICAgIGNvbnN0IG1lbnVOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1uYXYnKTtcbiAgICBjb25zdCBvcmRlck5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlci1uYXYnKTtcblxufSlcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=