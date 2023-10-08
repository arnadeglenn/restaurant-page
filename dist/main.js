/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutPageLoad: () => (/* binding */ aboutPageLoad)
/* harmony export */ });
const cardItem = [
    {imageCard: "./assets/home.png",
    alt: "filipino bus", 
    title: "Homepage", 
    description: "Click the button below to go back<br>to the home page!",
    button: "Who's Shawnee?"},
    {imageCard: "./assets/order.png",
    alt: "order here", 
    title: "Order", 
    description: "Click the button below<br>to place an order!",
    button: "Order"},
    {imageCard: "./assets/menu.png",
    alt: "menu graphic", 
    title: "Menu", 
    description: "Click the button below<br>to place an order!",
    button: "Order"}
];

const aboutPageLoad = function () {
    const contentDiv = document.getElementById('content');

    const aboutBox = document.createElement('div');
    aboutBox.classList.add('about');
    contentDiv.appendChild(aboutBox);

    const titleBox = document.createElement('div');
    titleBox.classList.add('title-box');
    const h1Title = document.createElement('h1');
    h1Title.innerHTML = "About";
    aboutBox.appendChild(titleBox);
    titleBox.appendChild(h1Title);

    const portraitBox = document.createElement('div');
    portraitBox.classList.add('portrait');
    aboutBox.appendChild(portraitBox);

    const portraitImg = document.createElement('img');
    portraitImg.classList.add('portrait-img');
    portraitImg.src = "./assets/chefs.png"
    portraitImg.alt = "Chef's of shawnee's homestyle"
    portraitBox.appendChild(portraitImg);

    const aboutDescription = document.createElement('div');
    aboutDescription.classList.add('about-description');
    portraitBox.appendChild(aboutDescription);
    const h2Title = document.createElement('h2');
    h2Title.innerHTML = "What is Shawnee's Homestyle?";
    aboutDescription.appendChild(h2Title);
    const paraDescription = document.createElement('p');
    paraDescription.innerHTML = "Shawnee's Homestyle is a kitchen out of Souhtern Califonia that specializes in homemade Filipino delicacies! Run by Elbi Balmaceda and Bryan Rapanut, they cater some of the most beloved foods out of the Northern Philippines in addition to the culture's quiessentials.<br><br>You might be wondering, who is Shawnee? Shawnee is the beloved golden retriver sous chef who is the main taster of all of Elbi and Bryan's creations! You will often find him in the kitchen waiting to try each batch with his elder sister, Layla!"
    aboutDescription.appendChild(paraDescription);

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
        cardBtn.innerHTML = `${cardItem[i].button}`;

        cardDiv.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardDescrip);
        card.appendChild(cardBtn);
    }
    contentDiv.appendChild(cardDiv);
}



/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   footerLoad: () => (/* binding */ footerLoad)
/* harmony export */ });
const footerLoad = function() {
    const contentDiv = document.getElementById('content');
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



/***/ }),

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
    // const headerBox = document.createElement('header');
    // const navList = document.createElement('ul');
    // navList.classList.add('nav');

    // navList.innerHTML = "";

    // headerBox.appendChild(navList);
    // contentDiv.appendChild(headerBox);
    
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

    // //footer
    // const footerBox = document.createElement('footer');
    // footerBox.classList.add('footer-box');
    // const footerDiv = document.createElement('div');
    // footerBox.appendChild(footerDiv);
    
    // const footerImg = document.createElement('img');
    // footerImg.classList.add('footer-logo');
    // footerImg.src = "./assets/logo.png";
    // footerImg.alt = "Shawnee's Homestyle";
    
    // const footerCredits = document.createElement('p');
    // footerCredits.innerHTML = "Website by Glenn Arnade";
    
    // contentDiv.appendChild(footerBox);
    // footerBox.appendChild(footerDiv);
    // footerDiv.appendChild(footerImg);
    // footerDiv.appendChild(footerCredits);
}



/***/ }),

/***/ "./src/order.js":
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orderPageLoad: () => (/* binding */ orderPageLoad)
/* harmony export */ });
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ "./src/footer.js");


const orderInstruct = [
    "Please give 2 days notice when placing an order",
    "Let us know all dishes you would like to purchase in addition to the quantity.",
    "If you are catering to a large group, let us know and we can help you determine the amount of food we recommend.",
    "Please text or call the number below to place an order"
]

const orderPageLoad = function() {
    const contentDiv = document.getElementById('content');

    const orderBox = document.createElement('div');
    orderBox.classList.add('order');
    contentDiv.appendChild(orderBox);

    const titleBox = document.createElement('div');
    titleBox.classList.add('title-box');
    const h1Title = document.createElement('h1');
    h1Title.innerHTML = "Order";
    orderBox.appendChild(titleBox);
    titleBox.appendChild(h1Title);

    const orderPortrait = document.createElement('div');
    orderPortrait.classList.add('order-portrait');
    orderBox.appendChild(orderPortrait);

    const orderImg = document.createElement('img');
    orderImg.classList.add('order-img');
    orderImg.src = "./assets/order.png"
    orderImg.alt = "order from here"
    orderPortrait.appendChild(orderImg);

    const orderDescription = document.createElement('div');
    orderDescription.classList.add('order-description');
    orderPortrait.appendChild(orderDescription);
    
    const h2Title = document.createElement('h2');
    h2Title.innerHTML = "Want to Order from Shawnee?";
    orderDescription.appendChild(h2Title);

    const orderDetails = document.createElement('div');
    orderDetails.classList.add('order-details');
    orderDescription.appendChild(orderDetails);

    const orderPara = document.createElement('p');
    orderPara.innerHTML = "At Shawnee's Homestyle, we create all of our dishes made to order. Please keep the following items in mind when making a request:"
    orderDetails.appendChild(orderPara);

    const orderList = document.createElement('ul');
    orderList.classList.add('order-list');
    orderDetails.appendChild(orderList);

    for (let i=0 ; i<4 ; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `${orderInstruct[i]}`;
        orderList.appendChild(listItem);
    }

    const contactName = document.createElement('h4');
    contactName.innerHTML = "<strong>Contact Name:</strong> Elbi Balmaceda";
    orderDescription.appendChild(contactName);

    const phoneNumber = document.createElement('h4');
    phoneNumber.innerHTML = "<strong>Phone Number:</strong> (626) 991-8665";
    orderDescription.appendChild(phoneNumber);
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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order */ "./src/order.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/footer.js");





const aboutNav = document.getElementById('about-nav');
const menuNav = document.getElementById('menu-nav');
const orderNav = document.getElementById('order-nav');
const logoBox = document.querySelector('.logo-box');
const contentDiv = document.getElementById('content');



window.addEventListener("load", function() {
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.footerLoad)();
})

logoBox.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.footerLoad)();
    console.log('Home Page loaded');
})

aboutNav.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    (0,_about__WEBPACK_IMPORTED_MODULE_1__.aboutPageLoad)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.footerLoad)();
    console.log('About Page Loaded');
})

orderNav.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    (0,_order__WEBPACK_IMPORTED_MODULE_2__.orderPageLoad)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.footerLoad)();
    console.log('Order Page Loaded');
})













})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOc0M7QUFDRTtBQUNBO0FBQ0Y7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBVTtBQUNkO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxxREFBYTtBQUNqQixJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHFEQUFhO0FBQ2pCLElBQUksbURBQVU7QUFDZDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvb3JkZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcmRJdGVtID0gW1xuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvaG9tZS5wbmdcIixcbiAgICBhbHQ6IFwiZmlsaXBpbm8gYnVzXCIsIFxuICAgIHRpdGxlOiBcIkhvbWVwYWdlXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gZ28gYmFjazxicj50byB0aGUgaG9tZSBwYWdlIVwiLFxuICAgIGJ1dHRvbjogXCJXaG8ncyBTaGF3bmVlP1wifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL29yZGVyLnBuZ1wiLFxuICAgIGFsdDogXCJvcmRlciBoZXJlXCIsIFxuICAgIHRpdGxlOiBcIk9yZGVyXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3c8YnI+dG8gcGxhY2UgYW4gb3JkZXIhXCIsXG4gICAgYnV0dG9uOiBcIk9yZGVyXCJ9LFxuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvbWVudS5wbmdcIixcbiAgICBhbHQ6IFwibWVudSBncmFwaGljXCIsIFxuICAgIHRpdGxlOiBcIk1lbnVcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdzxicj50byBwbGFjZSBhbiBvcmRlciFcIixcbiAgICBidXR0b246IFwiT3JkZXJcIn1cbl07XG5cbmNvbnN0IGFib3V0UGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBhYm91dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0Qm94LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChhYm91dEJveCk7XG5cbiAgICBjb25zdCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveCcpO1xuICAgIGNvbnN0IGgxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxVGl0bGUuaW5uZXJIVE1MID0gXCJBYm91dFwiO1xuICAgIGFib3V0Qm94LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZChoMVRpdGxlKTtcblxuICAgIGNvbnN0IHBvcnRyYWl0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9ydHJhaXRCb3guY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQnKTtcbiAgICBhYm91dEJveC5hcHBlbmRDaGlsZChwb3J0cmFpdEJveCk7XG5cbiAgICBjb25zdCBwb3J0cmFpdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBvcnRyYWl0SW1nLmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0LWltZycpO1xuICAgIHBvcnRyYWl0SW1nLnNyYyA9IFwiLi9hc3NldHMvY2hlZnMucG5nXCJcbiAgICBwb3J0cmFpdEltZy5hbHQgPSBcIkNoZWYncyBvZiBzaGF3bmVlJ3MgaG9tZXN0eWxlXCJcbiAgICBwb3J0cmFpdEJveC5hcHBlbmRDaGlsZChwb3J0cmFpdEltZyk7XG5cbiAgICBjb25zdCBhYm91dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdhYm91dC1kZXNjcmlwdGlvbicpO1xuICAgIHBvcnRyYWl0Qm94LmFwcGVuZENoaWxkKGFib3V0RGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IGgyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyVGl0bGUuaW5uZXJIVE1MID0gXCJXaGF0IGlzIFNoYXduZWUncyBIb21lc3R5bGU/XCI7XG4gICAgYWJvdXREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChoMlRpdGxlKTtcbiAgICBjb25zdCBwYXJhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYURlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiU2hhd25lZSdzIEhvbWVzdHlsZSBpcyBhIGtpdGNoZW4gb3V0IG9mIFNvdWh0ZXJuIENhbGlmb25pYSB0aGF0IHNwZWNpYWxpemVzIGluIGhvbWVtYWRlIEZpbGlwaW5vIGRlbGljYWNpZXMhIFJ1biBieSBFbGJpIEJhbG1hY2VkYSBhbmQgQnJ5YW4gUmFwYW51dCwgdGhleSBjYXRlciBzb21lIG9mIHRoZSBtb3N0IGJlbG92ZWQgZm9vZHMgb3V0IG9mIHRoZSBOb3J0aGVybiBQaGlsaXBwaW5lcyBpbiBhZGRpdGlvbiB0byB0aGUgY3VsdHVyZSdzIHF1aWVzc2VudGlhbHMuPGJyPjxicj5Zb3UgbWlnaHQgYmUgd29uZGVyaW5nLCB3aG8gaXMgU2hhd25lZT8gU2hhd25lZSBpcyB0aGUgYmVsb3ZlZCBnb2xkZW4gcmV0cml2ZXIgc291cyBjaGVmIHdobyBpcyB0aGUgbWFpbiB0YXN0ZXIgb2YgYWxsIG9mIEVsYmkgYW5kIEJyeWFuJ3MgY3JlYXRpb25zISBZb3Ugd2lsbCBvZnRlbiBmaW5kIGhpbSBpbiB0aGUga2l0Y2hlbiB3YWl0aW5nIHRvIHRyeSBlYWNoIGJhdGNoIHdpdGggaGlzIGVsZGVyIHNpc3RlciwgTGF5bGEhXCJcbiAgICBhYm91dERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHBhcmFEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8MzsgaSsrKSB7XG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgICAgIGxldCBjYXJkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNhcmRJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgICAgICAgY2FyZEltZy5zcmMgPSBgJHtjYXJkSXRlbVtpXS5pbWFnZUNhcmR9YDtcbiAgICAgICAgY2FyZEltZy5hbHQgPSBgJHtjYXJkSXRlbVtpXS5hbHR9YDtcblxuICAgICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IGAke2NhcmRJdGVtW2ldLnRpdGxlfWA7XG5cbiAgICAgICAgbGV0IGNhcmREZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkRGVzY3JpcC5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgIGxldCBjYXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhcmRCdG4uaW5uZXJIVE1MID0gYCR7Y2FyZEl0ZW1baV0uYnV0dG9ufWA7XG5cbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1nKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREZXNjcmlwKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQnRuKTtcbiAgICB9XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbn1cblxuZXhwb3J0IHthYm91dFBhZ2VMb2FkfTsiLCJjb25zdCBmb290ZXJMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgZm9vdGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyQm94LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1ib3gnKTtcbiAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICAgICAgXG4gICAgY29uc3QgZm9vdGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZm9vdGVySW1nLmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1sb2dvJyk7XG4gICAgZm9vdGVySW1nLnNyYyA9IFwiLi9hc3NldHMvbG9nby5wbmdcIjtcbiAgICBmb290ZXJJbWcuYWx0ID0gXCJTaGF3bmVlJ3MgSG9tZXN0eWxlXCI7XG4gICAgICAgIFxuICAgIGNvbnN0IGZvb3RlckNyZWRpdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZm9vdGVyQ3JlZGl0cy5pbm5lckhUTUwgPSBcIldlYnNpdGUgYnkgR2xlbm4gQXJuYWRlXCI7XG4gICAgICAgIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyQm94KTtcbiAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVySW1nKTtcbiAgICBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyQ3JlZGl0cyk7XG59XG5cbmV4cG9ydCB7Zm9vdGVyTG9hZH07IiwiY29uc3QgY2FyZEl0ZW0gPSBbXG4gICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy9jaGVmcy5wbmdcIixcbiAgICBhbHQ6IFwidGhlIGNoZWZzXCIsIFxuICAgIHRpdGxlOiBcIk1lZXQgdGhlIENoZWZzXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gbGVhcm4gbW9yZTxicj5hYm91dCBTaGF3bmVlJ3MgSG9tZXN0eWxlIVwiLFxuICAgIGJ1dHRvbjogXCJXaG8ncyBTaGF3bmVlP1wifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL29yZGVyLnBuZ1wiLFxuICAgIGFsdDogXCJvcmRlciBoZXJlXCIsIFxuICAgIHRpdGxlOiBcIk9yZGVyXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3c8YnI+dG8gcGxhY2UgYW4gb3JkZXIhXCIsXG4gICAgYnV0dG9uOiBcIk9yZGVyXCJ9LFxuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvbWVudS5wbmdcIixcbiAgICBhbHQ6IFwibWVudSBncmFwaGljXCIsIFxuICAgIHRpdGxlOiBcIk1lbnVcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdzxicj50byB2aWV3IHRoZSBtZW51IVwiLFxuICAgIGJ1dHRvbjogXCJNZW51XCJ9XG5dO1xuXG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgaG9tZVBhZ2VMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vaGVhZGVyXG4gICAgLy8gY29uc3QgaGVhZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgLy8gY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgLy8gbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCduYXYnKTtcblxuICAgIC8vIG5hdkxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vIGhlYWRlckJveC5hcHBlbmRDaGlsZChuYXZMaXN0KTtcbiAgICAvLyBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhlYWRlckJveCk7XG4gICAgXG4gICAgLy9ib2R5XG4gICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG4gICAgXG4gICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWcnKTtcbiAgICBoZXJvSW1nLnNyYyA9ICcuL2Fzc2V0cy9oZXJvLnBuZyc7XG4gICAgaGVyb0ltZy5hbHQgPSAncGljdHVyZSBvZiBmaWxpcGlubyBmb29kJztcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9JbWcpO1xuXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPDM7IGkrKykge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgICBsZXQgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYXJkSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gICAgICAgIGNhcmRJbWcuc3JjID0gYCR7Y2FyZEl0ZW1baV0uaW1hZ2VDYXJkfWA7XG4gICAgICAgIGNhcmRJbWcuYWx0ID0gYCR7Y2FyZEl0ZW1baV0uYWx0fWA7XG5cbiAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS50aXRsZX1gO1xuXG4gICAgICAgIGxldCBjYXJkRGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZERlc2NyaXAuaW5uZXJIVE1MID0gYCR7Y2FyZEl0ZW1baV0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICBsZXQgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYnRuJyk7XG4gICAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZChgYnV0dG9uLSR7aX1gKTtcbiAgICAgICAgY2FyZEJ0bi5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS5idXR0b259YDtcblxuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbWcpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXApO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCdG4pO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0wJyk7XG4gICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGhlcm9EaXYpO1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGNhcmREaXYpO1xuICAgICAgICBjb25zdCBmb290ZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLWJveCcpO1xuICAgICAgICBjb250ZW50RGl2LnJlbW92ZUNoaWxkKGZvb3RlckJveCk7XG4gICAgfSlcblxuICAgIC8vIC8vZm9vdGVyXG4gICAgLy8gY29uc3QgZm9vdGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgLy8gZm9vdGVyQm94LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1ib3gnKTtcbiAgICAvLyBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICBcbiAgICAvLyBjb25zdCBmb290ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyBmb290ZXJJbWcuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxvZ28nKTtcbiAgICAvLyBmb290ZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgIC8vIGZvb3RlckltZy5hbHQgPSBcIlNoYXduZWUncyBIb21lc3R5bGVcIjtcbiAgICBcbiAgICAvLyBjb25zdCBmb290ZXJDcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIGZvb3RlckNyZWRpdHMuaW5uZXJIVE1MID0gXCJXZWJzaXRlIGJ5IEdsZW5uIEFybmFkZVwiO1xuICAgIFxuICAgIC8vIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZm9vdGVyQm94KTtcbiAgICAvLyBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICAvLyBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVySW1nKTtcbiAgICAvLyBmb290ZXJEaXYuYXBwZW5kQ2hpbGQoZm9vdGVyQ3JlZGl0cyk7XG59XG5cbmV4cG9ydCB7aG9tZVBhZ2VMb2FkfTsiLCJpbXBvcnQgeyBmb290ZXJMb2FkIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IG9yZGVySW5zdHJ1Y3QgPSBbXG4gICAgXCJQbGVhc2UgZ2l2ZSAyIGRheXMgbm90aWNlIHdoZW4gcGxhY2luZyBhbiBvcmRlclwiLFxuICAgIFwiTGV0IHVzIGtub3cgYWxsIGRpc2hlcyB5b3Ugd291bGQgbGlrZSB0byBwdXJjaGFzZSBpbiBhZGRpdGlvbiB0byB0aGUgcXVhbnRpdHkuXCIsXG4gICAgXCJJZiB5b3UgYXJlIGNhdGVyaW5nIHRvIGEgbGFyZ2UgZ3JvdXAsIGxldCB1cyBrbm93IGFuZCB3ZSBjYW4gaGVscCB5b3UgZGV0ZXJtaW5lIHRoZSBhbW91bnQgb2YgZm9vZCB3ZSByZWNvbW1lbmQuXCIsXG4gICAgXCJQbGVhc2UgdGV4dCBvciBjYWxsIHRoZSBudW1iZXIgYmVsb3cgdG8gcGxhY2UgYW4gb3JkZXJcIlxuXVxuXG5jb25zdCBvcmRlclBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBvcmRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9yZGVyQm94LmNsYXNzTGlzdC5hZGQoJ29yZGVyJyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChvcmRlckJveCk7XG5cbiAgICBjb25zdCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveCcpO1xuICAgIGNvbnN0IGgxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxVGl0bGUuaW5uZXJIVE1MID0gXCJPcmRlclwiO1xuICAgIG9yZGVyQm94LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZChoMVRpdGxlKTtcblxuICAgIGNvbnN0IG9yZGVyUG9ydHJhaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcmRlclBvcnRyYWl0LmNsYXNzTGlzdC5hZGQoJ29yZGVyLXBvcnRyYWl0Jyk7XG4gICAgb3JkZXJCb3guYXBwZW5kQ2hpbGQob3JkZXJQb3J0cmFpdCk7XG5cbiAgICBjb25zdCBvcmRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG9yZGVySW1nLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWltZycpO1xuICAgIG9yZGVySW1nLnNyYyA9IFwiLi9hc3NldHMvb3JkZXIucG5nXCJcbiAgICBvcmRlckltZy5hbHQgPSBcIm9yZGVyIGZyb20gaGVyZVwiXG4gICAgb3JkZXJQb3J0cmFpdC5hcHBlbmRDaGlsZChvcmRlckltZyk7XG5cbiAgICBjb25zdCBvcmRlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3JkZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdvcmRlci1kZXNjcmlwdGlvbicpO1xuICAgIG9yZGVyUG9ydHJhaXQuYXBwZW5kQ2hpbGQob3JkZXJEZXNjcmlwdGlvbik7XG4gICAgXG4gICAgY29uc3QgaDJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDJUaXRsZS5pbm5lckhUTUwgPSBcIldhbnQgdG8gT3JkZXIgZnJvbSBTaGF3bmVlP1wiO1xuICAgIG9yZGVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaDJUaXRsZSk7XG5cbiAgICBjb25zdCBvcmRlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcmRlckRldGFpbHMuY2xhc3NMaXN0LmFkZCgnb3JkZXItZGV0YWlscycpO1xuICAgIG9yZGVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQob3JkZXJEZXRhaWxzKTtcblxuICAgIGNvbnN0IG9yZGVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvcmRlclBhcmEuaW5uZXJIVE1MID0gXCJBdCBTaGF3bmVlJ3MgSG9tZXN0eWxlLCB3ZSBjcmVhdGUgYWxsIG9mIG91ciBkaXNoZXMgbWFkZSB0byBvcmRlci4gUGxlYXNlIGtlZXAgdGhlIGZvbGxvd2luZyBpdGVtcyBpbiBtaW5kIHdoZW4gbWFraW5nIGEgcmVxdWVzdDpcIlxuICAgIG9yZGVyRGV0YWlscy5hcHBlbmRDaGlsZChvcmRlclBhcmEpO1xuXG4gICAgY29uc3Qgb3JkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBvcmRlckxpc3QuY2xhc3NMaXN0LmFkZCgnb3JkZXItbGlzdCcpO1xuICAgIG9yZGVyRGV0YWlscy5hcHBlbmRDaGlsZChvcmRlckxpc3QpO1xuXG4gICAgZm9yIChsZXQgaT0wIDsgaTw0IDsgaSsrKSB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGAke29yZGVySW5zdHJ1Y3RbaV19YDtcbiAgICAgICAgb3JkZXJMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29udGFjdE5hbWUuaW5uZXJIVE1MID0gXCI8c3Ryb25nPkNvbnRhY3QgTmFtZTo8L3N0cm9uZz4gRWxiaSBCYWxtYWNlZGFcIjtcbiAgICBvcmRlckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKTtcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSBcIjxzdHJvbmc+UGhvbmUgTnVtYmVyOjwvc3Ryb25nPiAoNjI2KSA5OTEtODY2NVwiO1xuICAgIG9yZGVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xufVxuXG5leHBvcnQge29yZGVyUGFnZUxvYWR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgYWJvdXRQYWdlTG9hZCB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBvcmRlclBhZ2VMb2FkIH0gZnJvbSBcIi4vb3JkZXJcIjtcbmltcG9ydCB7IGZvb3RlckxvYWQgfSBmcm9tIFwiLi9mb290ZXJcIjtcblxuY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtbmF2Jyk7XG5jb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbmF2Jyk7XG5jb25zdCBvcmRlck5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlci1uYXYnKTtcbmNvbnN0IGxvZ29Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1ib3gnKTtcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGhvbWVQYWdlTG9hZCgpO1xuICAgIGZvb3RlckxvYWQoKTtcbn0pXG5cbmxvZ29Cb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgaG9tZVBhZ2VMb2FkKCk7XG4gICAgZm9vdGVyTG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKCdIb21lIFBhZ2UgbG9hZGVkJyk7XG59KVxuXG5hYm91dE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICBhYm91dFBhZ2VMb2FkKCk7XG4gICAgZm9vdGVyTG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKCdBYm91dCBQYWdlIExvYWRlZCcpO1xufSlcblxub3JkZXJOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgb3JkZXJQYWdlTG9hZCgpO1xuICAgIGZvb3RlckxvYWQoKTtcbiAgICBjb25zb2xlLmxvZygnT3JkZXIgUGFnZSBMb2FkZWQnKTtcbn0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=