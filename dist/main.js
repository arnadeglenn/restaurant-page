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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "./src/order.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





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
    description: "Click the button below<br>to view the menu!",
    button: "Menu"}
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
    paraDescription.innerHTML = "Shawnee's Homestyle is a kitchen out of Southern Califonia that specializes in homemade Filipino delicacies! Run by Elbi Balmaceda and Bryan Rapanut, they cater some of the most beloved foods out of the Northern Philippines in addition to the culture's quiessentials.<br><br>You might be wondering, who is Shawnee? Shawnee is the beloved golden retriver sous chef who is the main taster of all of Elbi and Bryan's creations! You will often find him in the kitchen waiting to try each batch with his elder sister, Layla!"
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

    const homeButton = document.querySelector('.button-0');
    const orderButton = document.querySelector('.button-1');
    const menuButton = document.querySelector('.button-2');
    
    homeButton.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();
        (0,_footer__WEBPACK_IMPORTED_MODULE_2__.footerLoad)();
        console.log('About Page Loaded');
    })

    orderButton.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';
        (0,_order__WEBPACK_IMPORTED_MODULE_1__.orderPageLoad)();
        (0,_footer__WEBPACK_IMPORTED_MODULE_2__.footerLoad)();
        console.log('Order Page Loaded');
    })

    menuButton.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';
        (0,_menu__WEBPACK_IMPORTED_MODULE_3__.menuPageLoad)();
        (0,_footer__WEBPACK_IMPORTED_MODULE_2__.footerLoad)();
        console.log('Menu Page Loaded');
    })
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
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order */ "./src/order.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





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
    const orderButton = document.querySelector('.button-1');
    const menuButton = document.querySelector('.button-2');
    
    aboutButton.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';
        (0,_about__WEBPACK_IMPORTED_MODULE_0__.aboutPageLoad)();
        (0,_footer__WEBPACK_IMPORTED_MODULE_2__.footerLoad)();
        console.log('About Page Loaded');
    })

    orderButton.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';
        (0,_order__WEBPACK_IMPORTED_MODULE_1__.orderPageLoad)();
        (0,_footer__WEBPACK_IMPORTED_MODULE_2__.footerLoad)();
        console.log('Order Page Loaded');
    })

    menuButton.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';
        (0,_menu__WEBPACK_IMPORTED_MODULE_3__.menuPageLoad)();
        (0,_footer__WEBPACK_IMPORTED_MODULE_2__.footerLoad)();
        console.log('Menu Page Loaded');
    })

}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuPageLoad: () => (/* binding */ menuPageLoad)
/* harmony export */ });
/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order */ "./src/order.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/footer.js");



const menuCard = [
    {imageCard: "./assets/mains.png",
    alt: "chicken adobo in a pot", 
    title: "MAINS", 
    description: "Adobo (Pork/Chicken) • Igado (Pork) • Menudo (Pork) • Dinakdakan (Pork) • Steak (Pork/Beef) • Sinigang (Pork) • Lechon Kawali • Inihaw (Chicken/Pork) • Kaderela (Pork/Beef) • Papitan (Beef) • Kare Kare (Beef)",
    button: "Order"},
    {imageCard: "./assets/classics.png",
    alt: "lumpia on a plate", 
    title: "CLASSICS", 
    description: "Pancit (Bihon/Solanghon/Canton) • Fresh Lumpia • Longanisa (Ilokano) • Barbeque (Pork/Chicken) • Egg Roll (Pork) • Spaghetti • Tocino • Atsara • Embutido",
    button: "Order"},
    {imageCard: "./assets/dessert.png",
    alt: "leche flan", 
    title: "DESSERTS", 
    description: "Biko • Suman • Leche Flan • Fruit Salad •<br>Palitaw• Cinalaang Bilo Bilo •<br>Buko Pandan • Barbeque (Banana/Camote) • Carioca",
    button: "Order"},
    {imageCard: "./assets/seafood.png",
    alt: "shrimp sinigang in a bowl", 
    title: "SEAFOOD", 
    description: "Sinigang (Fish/Shrimp) • Adobo Pusit • Ginataang Isda • Paksiw Na Isda • Escabeche Isda",
    button: "Order"},
    {imageCard: "./assets/vegetables.png",
    alt: "adobong sitaw in a bowl", 
    title: "VEGETABLES", 
    description: "Ginisang Sitaw • Adobong Sitaw • Chopsuey • Fruit Salad • Pakbet • Ginisang Kangkong",
    button: "Order"},
];

const menuListArr = ["Mains", "Classics", "Deseerts", "Seafood", "Vegetables"];

const menuPageLoad = function () {
    const contentDiv = document.getElementById('content');

    const menuBox = document.createElement('div');
    menuBox.classList.add('menu');
    contentDiv.appendChild(menuBox);

    const titleBox = document.createElement('div');
    titleBox.classList.add('title-box');
    const h1Title = document.createElement('h1');
    h1Title.innerHTML = "Menu";
    menuBox.appendChild(titleBox);
    titleBox.appendChild(h1Title);

    const menuPortrait = document.createElement('div');
    menuPortrait.classList.add('menu-portrait');
    menuBox.appendChild(menuPortrait);

    const menuImg = document.createElement('img');
    menuImg.classList.add('menu-img');
    menuImg.src = "./assets/menu.png"
    menuImg.alt = "Chef's of shawnee's homestyle"
    menuPortrait.appendChild(menuImg);

    const menuDescription = document.createElement('div');
    menuDescription.classList.add('menu-description');
    menuPortrait.appendChild(menuDescription);
    const h2Title = document.createElement('h2');
    h2Title.innerHTML = "What Does Shawnee Have?";
    menuDescription.appendChild(h2Title);
    
    const menuDetails = document.createElement('div');
    menuDetails.classList.add('menu-details');
    menuDescription.appendChild(menuDetails);

    const paraDescription = document.createElement('p');
    paraDescription.innerHTML = "Shawnee's menu is a careful curartion of foods from all over the Philippines. With a focus of the family's home region of Abra, Shawnee also loves serving the Filipino classics!<br><br>Below, you will find dishes in the following categories:";
    menuDetails.appendChild(paraDescription);

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');
    menuDetails.appendChild(menuList);

    for (let i=0; i <5 ; i++) {
        let menuCategory = document.createElement('li');
        menuCategory.innerHTML = `${menuListArr[i]}`;
        menuList.appendChild(menuCategory);
    }

    const cardDiv = document.createElement('div');
    cardDiv.classList.add('cards');
    for (let i=0; i <5; i++) {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardImg = document.createElement('img');
        cardImg.classList.add('card-img');
        cardImg.src = `${menuCard[i].imageCard}`;
        cardImg.alt = `${menuCard[i].alt}`;

        let cardTitle = document.createElement('h2');
        cardTitle.innerHTML = `${menuCard[i].title}`;

        let cardDescrip = document.createElement('p');
        cardDescrip.innerHTML = `${menuCard[i].description}`;

        let cardBtn = document.createElement('button');
        cardBtn.classList.add('card-btn')
        cardBtn.innerHTML = `${menuCard[i].button}`;

        cardDiv.appendChild(card);
        card.appendChild(cardImg);
        card.appendChild(cardTitle);
        card.appendChild(cardDescrip);
        card.appendChild(cardBtn);
    }
    contentDiv.appendChild(cardDiv);

    const cardBtnClick = document.querySelectorAll('.card-btn');

    cardBtnClick.forEach(button => {
        button.addEventListener('click', (e) => {
            contentDiv.innerHTML = '';
            (0,_order__WEBPACK_IMPORTED_MODULE_0__.orderPageLoad)();
            (0,_footer__WEBPACK_IMPORTED_MODULE_1__.footerLoad)();
            console.log('Order Page Loaded');
        })
    });
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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");






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

menuNav.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    (0,_menu__WEBPACK_IMPORTED_MODULE_4__.menuPageLoad)();
    (0,_footer__WEBPACK_IMPORTED_MODULE_3__.footerLoad)();
    console.log('Menu Page Loaded')
})












})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0U7QUFDQTtBQUNGO0FBQ0E7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBVTtBQUNkO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxxREFBYTtBQUNqQixJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHFEQUFhO0FBQ2pCLElBQUksbURBQVU7QUFDZDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBVTtBQUNkO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9vcmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgb3JkZXJQYWdlTG9hZCB9IGZyb20gXCIuL29yZGVyXCI7XG5pbXBvcnQgeyBmb290ZXJMb2FkIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IGNhcmRJdGVtID0gW1xuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvaG9tZS5wbmdcIixcbiAgICBhbHQ6IFwiZmlsaXBpbm8gYnVzXCIsIFxuICAgIHRpdGxlOiBcIkhvbWVwYWdlXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gZ28gYmFjazxicj50byB0aGUgaG9tZSBwYWdlIVwiLFxuICAgIGJ1dHRvbjogXCJXaG8ncyBTaGF3bmVlP1wifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL29yZGVyLnBuZ1wiLFxuICAgIGFsdDogXCJvcmRlciBoZXJlXCIsIFxuICAgIHRpdGxlOiBcIk9yZGVyXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3c8YnI+dG8gcGxhY2UgYW4gb3JkZXIhXCIsXG4gICAgYnV0dG9uOiBcIk9yZGVyXCJ9LFxuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvbWVudS5wbmdcIixcbiAgICBhbHQ6IFwibWVudSBncmFwaGljXCIsIFxuICAgIHRpdGxlOiBcIk1lbnVcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdzxicj50byB2aWV3IHRoZSBtZW51IVwiLFxuICAgIGJ1dHRvbjogXCJNZW51XCJ9XG5dO1xuXG5jb25zdCBhYm91dFBhZ2VMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3QgYWJvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dEJveC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoYWJvdXRCb3gpO1xuXG4gICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ib3gnKTtcbiAgICBjb25zdCBoMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMVRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXRcIjtcbiAgICBhYm91dEJveC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG5cbiAgICBjb25zdCBwb3J0cmFpdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcnRyYWl0Qm94LmNsYXNzTGlzdC5hZGQoJ3BvcnRyYWl0Jyk7XG4gICAgYWJvdXRCb3guYXBwZW5kQ2hpbGQocG9ydHJhaXRCb3gpO1xuXG4gICAgY29uc3QgcG9ydHJhaXRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwb3J0cmFpdEltZy5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdC1pbWcnKTtcbiAgICBwb3J0cmFpdEltZy5zcmMgPSBcIi4vYXNzZXRzL2NoZWZzLnBuZ1wiXG4gICAgcG9ydHJhaXRJbWcuYWx0ID0gXCJDaGVmJ3Mgb2Ygc2hhd25lZSdzIGhvbWVzdHlsZVwiXG4gICAgcG9ydHJhaXRCb3guYXBwZW5kQ2hpbGQocG9ydHJhaXRJbWcpO1xuXG4gICAgY29uc3QgYWJvdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnYWJvdXQtZGVzY3JpcHRpb24nKTtcbiAgICBwb3J0cmFpdEJveC5hcHBlbmRDaGlsZChhYm91dERlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBoMlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMlRpdGxlLmlubmVySFRNTCA9IFwiV2hhdCBpcyBTaGF3bmVlJ3MgSG9tZXN0eWxlP1wiO1xuICAgIGFib3V0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaDJUaXRsZSk7XG4gICAgY29uc3QgcGFyYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlNoYXduZWUncyBIb21lc3R5bGUgaXMgYSBraXRjaGVuIG91dCBvZiBTb3V0aGVybiBDYWxpZm9uaWEgdGhhdCBzcGVjaWFsaXplcyBpbiBob21lbWFkZSBGaWxpcGlubyBkZWxpY2FjaWVzISBSdW4gYnkgRWxiaSBCYWxtYWNlZGEgYW5kIEJyeWFuIFJhcGFudXQsIHRoZXkgY2F0ZXIgc29tZSBvZiB0aGUgbW9zdCBiZWxvdmVkIGZvb2RzIG91dCBvZiB0aGUgTm9ydGhlcm4gUGhpbGlwcGluZXMgaW4gYWRkaXRpb24gdG8gdGhlIGN1bHR1cmUncyBxdWllc3NlbnRpYWxzLjxicj48YnI+WW91IG1pZ2h0IGJlIHdvbmRlcmluZywgd2hvIGlzIFNoYXduZWU/IFNoYXduZWUgaXMgdGhlIGJlbG92ZWQgZ29sZGVuIHJldHJpdmVyIHNvdXMgY2hlZiB3aG8gaXMgdGhlIG1haW4gdGFzdGVyIG9mIGFsbCBvZiBFbGJpIGFuZCBCcnlhbidzIGNyZWF0aW9ucyEgWW91IHdpbGwgb2Z0ZW4gZmluZCBoaW0gaW4gdGhlIGtpdGNoZW4gd2FpdGluZyB0byB0cnkgZWFjaCBiYXRjaCB3aXRoIGhpcyBlbGRlciBzaXN0ZXIsIExheWxhIVwiXG4gICAgYWJvdXREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChwYXJhRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPDM7IGkrKykge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgICBsZXQgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYXJkSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gICAgICAgIGNhcmRJbWcuc3JjID0gYCR7Y2FyZEl0ZW1baV0uaW1hZ2VDYXJkfWA7XG4gICAgICAgIGNhcmRJbWcuYWx0ID0gYCR7Y2FyZEl0ZW1baV0uYWx0fWA7XG5cbiAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS50aXRsZX1gO1xuXG4gICAgICAgIGxldCBjYXJkRGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZERlc2NyaXAuaW5uZXJIVE1MID0gYCR7Y2FyZEl0ZW1baV0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICBsZXQgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYnRuJyk7XG4gICAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZChgYnV0dG9uLSR7aX1gKTtcbiAgICAgICAgY2FyZEJ0bi5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS5idXR0b259YDtcblxuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbWcpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXApO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCdG4pO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tMCcpO1xuICAgIGNvbnN0IG9yZGVyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0xJyk7XG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tMicpO1xuICAgIFxuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBob21lUGFnZUxvYWQoKTtcbiAgICAgICAgZm9vdGVyTG9hZCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnQWJvdXQgUGFnZSBMb2FkZWQnKTtcbiAgICB9KVxuXG4gICAgb3JkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBvcmRlclBhZ2VMb2FkKCk7XG4gICAgICAgIGZvb3RlckxvYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ09yZGVyIFBhZ2UgTG9hZGVkJyk7XG4gICAgfSlcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBtZW51UGFnZUxvYWQoKTtcbiAgICAgICAgZm9vdGVyTG9hZCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnTWVudSBQYWdlIExvYWRlZCcpO1xuICAgIH0pXG59XG5cbmV4cG9ydCB7YWJvdXRQYWdlTG9hZH07IiwiY29uc3QgZm9vdGVyTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGZvb3RlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3RlckJveC5jbGFzc0xpc3QuYWRkKCdmb290ZXItYm94Jyk7XG4gICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG4gICAgICAgIFxuICAgIGNvbnN0IGZvb3RlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZvb3RlckltZy5jbGFzc0xpc3QuYWRkKCdmb290ZXItbG9nbycpO1xuICAgIGZvb3RlckltZy5zcmMgPSBcIi4vYXNzZXRzL2xvZ28ucG5nXCI7XG4gICAgZm9vdGVySW1nLmFsdCA9IFwiU2hhd25lZSdzIEhvbWVzdHlsZVwiO1xuICAgICAgICBcbiAgICBjb25zdCBmb290ZXJDcmVkaXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZvb3RlckNyZWRpdHMuaW5uZXJIVE1MID0gXCJXZWJzaXRlIGJ5IEdsZW5uIEFybmFkZVwiO1xuICAgICAgICBcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGZvb3RlckJveCk7XG4gICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3RlckltZyk7XG4gICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3RlckNyZWRpdHMpO1xufVxuXG5leHBvcnQge2Zvb3RlckxvYWR9OyIsImltcG9ydCB7IGFib3V0UGFnZUxvYWQgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgb3JkZXJQYWdlTG9hZCB9IGZyb20gXCIuL29yZGVyXCI7XG5pbXBvcnQgeyBmb290ZXJMb2FkIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IGNhcmRJdGVtID0gW1xuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvY2hlZnMucG5nXCIsXG4gICAgYWx0OiBcInRoZSBjaGVmc1wiLCBcbiAgICB0aXRsZTogXCJNZWV0IHRoZSBDaGVmc1wiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJDbGljayB0aGUgYnV0dG9uIGJlbG93IHRvIGxlYXJuIG1vcmU8YnI+YWJvdXQgU2hhd25lZSdzIEhvbWVzdHlsZSFcIixcbiAgICBidXR0b246IFwiV2hvJ3MgU2hhd25lZT9cIn0sXG4gICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy9vcmRlci5wbmdcIixcbiAgICBhbHQ6IFwib3JkZXIgaGVyZVwiLCBcbiAgICB0aXRsZTogXCJPcmRlclwiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJDbGljayB0aGUgYnV0dG9uIGJlbG93PGJyPnRvIHBsYWNlIGFuIG9yZGVyIVwiLFxuICAgIGJ1dHRvbjogXCJPcmRlclwifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL21lbnUucG5nXCIsXG4gICAgYWx0OiBcIm1lbnUgZ3JhcGhpY1wiLCBcbiAgICB0aXRsZTogXCJNZW51XCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3c8YnI+dG8gdmlldyB0aGUgbWVudSFcIixcbiAgICBidXR0b246IFwiTWVudVwifVxuXTtcblxuY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IGhvbWVQYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBoZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyb0Rpdi5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcbiAgICBcbiAgICBjb25zdCBoZXJvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGVyb0ltZy5jbGFzc0xpc3QuYWRkKCdoZXJvLWltZycpO1xuICAgIGhlcm9JbWcuc3JjID0gJy4vYXNzZXRzL2hlcm8ucG5nJztcbiAgICBoZXJvSW1nLmFsdCA9ICdwaWN0dXJlIG9mIGZpbGlwaW5vIGZvb2QnO1xuICAgIGhlcm9EaXYuYXBwZW5kQ2hpbGQoaGVyb0ltZyk7XG5cbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8MzsgaSsrKSB7XG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgICAgIGxldCBjYXJkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNhcmRJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgICAgICAgY2FyZEltZy5zcmMgPSBgJHtjYXJkSXRlbVtpXS5pbWFnZUNhcmR9YDtcbiAgICAgICAgY2FyZEltZy5hbHQgPSBgJHtjYXJkSXRlbVtpXS5hbHR9YDtcblxuICAgICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IGAke2NhcmRJdGVtW2ldLnRpdGxlfWA7XG5cbiAgICAgICAgbGV0IGNhcmREZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkRGVzY3JpcC5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgIGxldCBjYXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZCgnY2FyZC1idG4nKTtcbiAgICAgICAgY2FyZEJ0bi5jbGFzc0xpc3QuYWRkKGBidXR0b24tJHtpfWApO1xuICAgICAgICBjYXJkQnRuLmlubmVySFRNTCA9IGAke2NhcmRJdGVtW2ldLmJ1dHRvbn1gO1xuXG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEltZyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzY3JpcCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJ0bik7XG4gICAgfVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgXG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLTAnKTtcbiAgICBjb25zdCBvcmRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tMScpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLTInKTtcbiAgICBcbiAgICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGFib3V0UGFnZUxvYWQoKTtcbiAgICAgICAgZm9vdGVyTG9hZCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnQWJvdXQgUGFnZSBMb2FkZWQnKTtcbiAgICB9KVxuXG4gICAgb3JkZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBvcmRlclBhZ2VMb2FkKCk7XG4gICAgICAgIGZvb3RlckxvYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ09yZGVyIFBhZ2UgTG9hZGVkJyk7XG4gICAgfSlcblxuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBtZW51UGFnZUxvYWQoKTtcbiAgICAgICAgZm9vdGVyTG9hZCgpO1xuICAgICAgICBjb25zb2xlLmxvZygnTWVudSBQYWdlIExvYWRlZCcpO1xuICAgIH0pXG5cbn1cblxuZXhwb3J0IHtob21lUGFnZUxvYWR9OyIsImltcG9ydCB7IG9yZGVyUGFnZUxvYWQgfSBmcm9tIFwiLi9vcmRlclwiO1xuaW1wb3J0IHsgZm9vdGVyTG9hZCB9IGZyb20gXCIuL2Zvb3RlclwiO1xuXG5jb25zdCBtZW51Q2FyZCA9IFtcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL21haW5zLnBuZ1wiLFxuICAgIGFsdDogXCJjaGlja2VuIGFkb2JvIGluIGEgcG90XCIsIFxuICAgIHRpdGxlOiBcIk1BSU5TXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkFkb2JvIChQb3JrL0NoaWNrZW4pIOKAoiBJZ2FkbyAoUG9yaykg4oCiIE1lbnVkbyAoUG9yaykg4oCiIERpbmFrZGFrYW4gKFBvcmspIOKAoiBTdGVhayAoUG9yay9CZWVmKSDigKIgU2luaWdhbmcgKFBvcmspIOKAoiBMZWNob24gS2F3YWxpIOKAoiBJbmloYXcgKENoaWNrZW4vUG9yaykg4oCiIEthZGVyZWxhIChQb3JrL0JlZWYpIOKAoiBQYXBpdGFuIChCZWVmKSDigKIgS2FyZSBLYXJlIChCZWVmKVwiLFxuICAgIGJ1dHRvbjogXCJPcmRlclwifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL2NsYXNzaWNzLnBuZ1wiLFxuICAgIGFsdDogXCJsdW1waWEgb24gYSBwbGF0ZVwiLCBcbiAgICB0aXRsZTogXCJDTEFTU0lDU1wiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJQYW5jaXQgKEJpaG9uL1NvbGFuZ2hvbi9DYW50b24pIOKAoiBGcmVzaCBMdW1waWEg4oCiIExvbmdhbmlzYSAoSWxva2Fubykg4oCiIEJhcmJlcXVlIChQb3JrL0NoaWNrZW4pIOKAoiBFZ2cgUm9sbCAoUG9yaykg4oCiIFNwYWdoZXR0aSDigKIgVG9jaW5vIOKAoiBBdHNhcmEg4oCiIEVtYnV0aWRvXCIsXG4gICAgYnV0dG9uOiBcIk9yZGVyXCJ9LFxuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvZGVzc2VydC5wbmdcIixcbiAgICBhbHQ6IFwibGVjaGUgZmxhblwiLCBcbiAgICB0aXRsZTogXCJERVNTRVJUU1wiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJCaWtvIOKAoiBTdW1hbiDigKIgTGVjaGUgRmxhbiDigKIgRnJ1aXQgU2FsYWQg4oCiPGJyPlBhbGl0YXfigKIgQ2luYWxhYW5nIEJpbG8gQmlsbyDigKI8YnI+QnVrbyBQYW5kYW4g4oCiIEJhcmJlcXVlIChCYW5hbmEvQ2Ftb3RlKSDigKIgQ2FyaW9jYVwiLFxuICAgIGJ1dHRvbjogXCJPcmRlclwifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL3NlYWZvb2QucG5nXCIsXG4gICAgYWx0OiBcInNocmltcCBzaW5pZ2FuZyBpbiBhIGJvd2xcIiwgXG4gICAgdGl0bGU6IFwiU0VBRk9PRFwiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJTaW5pZ2FuZyAoRmlzaC9TaHJpbXApIOKAoiBBZG9ibyBQdXNpdCDigKIgR2luYXRhYW5nIElzZGEg4oCiIFBha3NpdyBOYSBJc2RhIOKAoiBFc2NhYmVjaGUgSXNkYVwiLFxuICAgIGJ1dHRvbjogXCJPcmRlclwifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL3ZlZ2V0YWJsZXMucG5nXCIsXG4gICAgYWx0OiBcImFkb2Jvbmcgc2l0YXcgaW4gYSBib3dsXCIsIFxuICAgIHRpdGxlOiBcIlZFR0VUQUJMRVNcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiR2luaXNhbmcgU2l0YXcg4oCiIEFkb2JvbmcgU2l0YXcg4oCiIENob3BzdWV5IOKAoiBGcnVpdCBTYWxhZCDigKIgUGFrYmV0IOKAoiBHaW5pc2FuZyBLYW5na29uZ1wiLFxuICAgIGJ1dHRvbjogXCJPcmRlclwifSxcbl07XG5cbmNvbnN0IG1lbnVMaXN0QXJyID0gW1wiTWFpbnNcIiwgXCJDbGFzc2ljc1wiLCBcIkRlc2VlcnRzXCIsIFwiU2VhZm9vZFwiLCBcIlZlZ2V0YWJsZXNcIl07XG5cbmNvbnN0IG1lbnVQYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IG1lbnVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51Qm94LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVCb3gpO1xuXG4gICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ib3gnKTtcbiAgICBjb25zdCBoMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMVRpdGxlLmlubmVySFRNTCA9IFwiTWVudVwiO1xuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuICAgIHRpdGxlQm94LmFwcGVuZENoaWxkKGgxVGl0bGUpO1xuXG4gICAgY29uc3QgbWVudVBvcnRyYWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVBvcnRyYWl0LmNsYXNzTGlzdC5hZGQoJ21lbnUtcG9ydHJhaXQnKTtcbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKG1lbnVQb3J0cmFpdCk7XG5cbiAgICBjb25zdCBtZW51SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWVudUltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWltZycpO1xuICAgIG1lbnVJbWcuc3JjID0gXCIuL2Fzc2V0cy9tZW51LnBuZ1wiXG4gICAgbWVudUltZy5hbHQgPSBcIkNoZWYncyBvZiBzaGF3bmVlJ3MgaG9tZXN0eWxlXCJcbiAgICBtZW51UG9ydHJhaXQuYXBwZW5kQ2hpbGQobWVudUltZyk7XG5cbiAgICBjb25zdCBtZW51RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudS1kZXNjcmlwdGlvbicpO1xuICAgIG1lbnVQb3J0cmFpdC5hcHBlbmRDaGlsZChtZW51RGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IGgyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyVGl0bGUuaW5uZXJIVE1MID0gXCJXaGF0IERvZXMgU2hhd25lZSBIYXZlP1wiO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChoMlRpdGxlKTtcbiAgICBcbiAgICBjb25zdCBtZW51RGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGV0YWlscycpO1xuICAgIG1lbnVEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChtZW51RGV0YWlscyk7XG5cbiAgICBjb25zdCBwYXJhRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcGFyYURlc2NyaXB0aW9uLmlubmVySFRNTCA9IFwiU2hhd25lZSdzIG1lbnUgaXMgYSBjYXJlZnVsIGN1cmFydGlvbiBvZiBmb29kcyBmcm9tIGFsbCBvdmVyIHRoZSBQaGlsaXBwaW5lcy4gV2l0aCBhIGZvY3VzIG9mIHRoZSBmYW1pbHkncyBob21lIHJlZ2lvbiBvZiBBYnJhLCBTaGF3bmVlIGFsc28gbG92ZXMgc2VydmluZyB0aGUgRmlsaXBpbm8gY2xhc3NpY3MhPGJyPjxicj5CZWxvdywgeW91IHdpbGwgZmluZCBkaXNoZXMgaW4gdGhlIGZvbGxvd2luZyBjYXRlZ29yaWVzOlwiO1xuICAgIG1lbnVEZXRhaWxzLmFwcGVuZENoaWxkKHBhcmFEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbWVudUxpc3QuY2xhc3NMaXN0LmFkZCgnbWVudS1saXN0Jyk7XG4gICAgbWVudURldGFpbHMuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpIDw1IDsgaSsrKSB7XG4gICAgICAgIGxldCBtZW51Q2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBtZW51Q2F0ZWdvcnkuaW5uZXJIVE1MID0gYCR7bWVudUxpc3RBcnJbaV19YDtcbiAgICAgICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUNhdGVnb3J5KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkcycpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8NTsgaSsrKSB7XG4gICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgICAgIGxldCBjYXJkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNhcmRJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgICAgICAgY2FyZEltZy5zcmMgPSBgJHttZW51Q2FyZFtpXS5pbWFnZUNhcmR9YDtcbiAgICAgICAgY2FyZEltZy5hbHQgPSBgJHttZW51Q2FyZFtpXS5hbHR9YDtcblxuICAgICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY2FyZFRpdGxlLmlubmVySFRNTCA9IGAke21lbnVDYXJkW2ldLnRpdGxlfWA7XG5cbiAgICAgICAgbGV0IGNhcmREZXNjcmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjYXJkRGVzY3JpcC5pbm5lckhUTUwgPSBgJHttZW51Q2FyZFtpXS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgIGxldCBjYXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZCgnY2FyZC1idG4nKVxuICAgICAgICBjYXJkQnRuLmlubmVySFRNTCA9IGAke21lbnVDYXJkW2ldLmJ1dHRvbn1gO1xuXG4gICAgICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEltZyk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZFRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkRGVzY3JpcCk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJ0bik7XG4gICAgfVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG5cbiAgICBjb25zdCBjYXJkQnRuQ2xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1idG4nKTtcblxuICAgIGNhcmRCdG5DbGljay5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgb3JkZXJQYWdlTG9hZCgpO1xuICAgICAgICAgICAgZm9vdGVyTG9hZCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ09yZGVyIFBhZ2UgTG9hZGVkJyk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59XG5cbmV4cG9ydCB7bWVudVBhZ2VMb2FkfTsiLCJpbXBvcnQgeyBmb290ZXJMb2FkIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IG9yZGVySW5zdHJ1Y3QgPSBbXG4gICAgXCJQbGVhc2UgZ2l2ZSAyIGRheXMgbm90aWNlIHdoZW4gcGxhY2luZyBhbiBvcmRlclwiLFxuICAgIFwiTGV0IHVzIGtub3cgYWxsIGRpc2hlcyB5b3Ugd291bGQgbGlrZSB0byBwdXJjaGFzZSBpbiBhZGRpdGlvbiB0byB0aGUgcXVhbnRpdHkuXCIsXG4gICAgXCJJZiB5b3UgYXJlIGNhdGVyaW5nIHRvIGEgbGFyZ2UgZ3JvdXAsIGxldCB1cyBrbm93IGFuZCB3ZSBjYW4gaGVscCB5b3UgZGV0ZXJtaW5lIHRoZSBhbW91bnQgb2YgZm9vZCB3ZSByZWNvbW1lbmQuXCIsXG4gICAgXCJQbGVhc2UgdGV4dCBvciBjYWxsIHRoZSBudW1iZXIgYmVsb3cgdG8gcGxhY2UgYW4gb3JkZXJcIlxuXVxuXG5jb25zdCBvcmRlclBhZ2VMb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBvcmRlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9yZGVyQm94LmNsYXNzTGlzdC5hZGQoJ29yZGVyJyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChvcmRlckJveCk7XG5cbiAgICBjb25zdCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQm94LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWJveCcpO1xuICAgIGNvbnN0IGgxVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxVGl0bGUuaW5uZXJIVE1MID0gXCJPcmRlclwiO1xuICAgIG9yZGVyQm94LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZChoMVRpdGxlKTtcblxuICAgIGNvbnN0IG9yZGVyUG9ydHJhaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcmRlclBvcnRyYWl0LmNsYXNzTGlzdC5hZGQoJ29yZGVyLXBvcnRyYWl0Jyk7XG4gICAgb3JkZXJCb3guYXBwZW5kQ2hpbGQob3JkZXJQb3J0cmFpdCk7XG5cbiAgICBjb25zdCBvcmRlckltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG9yZGVySW1nLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWltZycpO1xuICAgIG9yZGVySW1nLnNyYyA9IFwiLi9hc3NldHMvb3JkZXIucG5nXCJcbiAgICBvcmRlckltZy5hbHQgPSBcIm9yZGVyIGZyb20gaGVyZVwiXG4gICAgb3JkZXJQb3J0cmFpdC5hcHBlbmRDaGlsZChvcmRlckltZyk7XG5cbiAgICBjb25zdCBvcmRlckRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3JkZXJEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdvcmRlci1kZXNjcmlwdGlvbicpO1xuICAgIG9yZGVyUG9ydHJhaXQuYXBwZW5kQ2hpbGQob3JkZXJEZXNjcmlwdGlvbik7XG4gICAgXG4gICAgY29uc3QgaDJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDJUaXRsZS5pbm5lckhUTUwgPSBcIldhbnQgdG8gT3JkZXIgZnJvbSBTaGF3bmVlP1wiO1xuICAgIG9yZGVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaDJUaXRsZSk7XG5cbiAgICBjb25zdCBvcmRlckRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcmRlckRldGFpbHMuY2xhc3NMaXN0LmFkZCgnb3JkZXItZGV0YWlscycpO1xuICAgIG9yZGVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQob3JkZXJEZXRhaWxzKTtcblxuICAgIGNvbnN0IG9yZGVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBvcmRlclBhcmEuaW5uZXJIVE1MID0gXCJBdCBTaGF3bmVlJ3MgSG9tZXN0eWxlLCB3ZSBjcmVhdGUgYWxsIG9mIG91ciBkaXNoZXMgbWFkZSB0byBvcmRlci4gUGxlYXNlIGtlZXAgdGhlIGZvbGxvd2luZyBpdGVtcyBpbiBtaW5kIHdoZW4gbWFraW5nIGEgcmVxdWVzdDpcIlxuICAgIG9yZGVyRGV0YWlscy5hcHBlbmRDaGlsZChvcmRlclBhcmEpO1xuXG4gICAgY29uc3Qgb3JkZXJMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBvcmRlckxpc3QuY2xhc3NMaXN0LmFkZCgnb3JkZXItbGlzdCcpO1xuICAgIG9yZGVyRGV0YWlscy5hcHBlbmRDaGlsZChvcmRlckxpc3QpO1xuXG4gICAgZm9yIChsZXQgaT0wIDsgaTw0IDsgaSsrKSB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGAke29yZGVySW5zdHJ1Y3RbaV19YDtcbiAgICAgICAgb3JkZXJMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250YWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29udGFjdE5hbWUuaW5uZXJIVE1MID0gXCI8c3Ryb25nPkNvbnRhY3QgTmFtZTo8L3N0cm9uZz4gRWxiaSBCYWxtYWNlZGFcIjtcbiAgICBvcmRlckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGNvbnRhY3ROYW1lKTtcblxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSBcIjxzdHJvbmc+UGhvbmUgTnVtYmVyOjwvc3Ryb25nPiAoNjI2KSA5OTEtODY2NVwiO1xuICAgIG9yZGVyRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xufVxuXG5leHBvcnQge29yZGVyUGFnZUxvYWR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgYWJvdXRQYWdlTG9hZCB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBvcmRlclBhZ2VMb2FkIH0gZnJvbSBcIi4vb3JkZXJcIjtcbmltcG9ydCB7IGZvb3RlckxvYWQgfSBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCB7IG1lbnVQYWdlTG9hZCB9IGZyb20gXCIuL21lbnVcIjtcblxuY29uc3QgYWJvdXROYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQtbmF2Jyk7XG5jb25zdCBtZW51TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtbmF2Jyk7XG5jb25zdCBvcmRlck5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmRlci1uYXYnKTtcbmNvbnN0IGxvZ29Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9nby1ib3gnKTtcbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGhvbWVQYWdlTG9hZCgpO1xuICAgIGZvb3RlckxvYWQoKTtcbn0pXG5cbmxvZ29Cb3guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgaG9tZVBhZ2VMb2FkKCk7XG4gICAgZm9vdGVyTG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKCdIb21lIFBhZ2UgbG9hZGVkJyk7XG59KVxuXG5hYm91dE5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICBhYm91dFBhZ2VMb2FkKCk7XG4gICAgZm9vdGVyTG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKCdBYm91dCBQYWdlIExvYWRlZCcpO1xufSlcblxub3JkZXJOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgb3JkZXJQYWdlTG9hZCgpO1xuICAgIGZvb3RlckxvYWQoKTtcbiAgICBjb25zb2xlLmxvZygnT3JkZXIgUGFnZSBMb2FkZWQnKTtcbn0pXG5cbm1lbnVOYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgbWVudVBhZ2VMb2FkKCk7XG4gICAgZm9vdGVyTG9hZCgpO1xuICAgIGNvbnNvbGUubG9nKCdNZW51IFBhZ2UgTG9hZGVkJylcbn0pXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9