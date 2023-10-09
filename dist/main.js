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
    description: "Click the button below<br>to place an order!",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0U7QUFDQTtBQUNGO0FBQ0E7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBVTtBQUNkO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxxREFBYTtBQUNqQixJQUFJLG1EQUFVO0FBQ2Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHFEQUFhO0FBQ2pCLElBQUksbURBQVU7QUFDZDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksbURBQVk7QUFDaEIsSUFBSSxtREFBVTtBQUNkO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9vcmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgb3JkZXJQYWdlTG9hZCB9IGZyb20gXCIuL29yZGVyXCI7XG5pbXBvcnQgeyBmb290ZXJMb2FkIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IGNhcmRJdGVtID0gW1xuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvaG9tZS5wbmdcIixcbiAgICBhbHQ6IFwiZmlsaXBpbm8gYnVzXCIsIFxuICAgIHRpdGxlOiBcIkhvbWVwYWdlXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3cgdG8gZ28gYmFjazxicj50byB0aGUgaG9tZSBwYWdlIVwiLFxuICAgIGJ1dHRvbjogXCJXaG8ncyBTaGF3bmVlP1wifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL29yZGVyLnBuZ1wiLFxuICAgIGFsdDogXCJvcmRlciBoZXJlXCIsIFxuICAgIHRpdGxlOiBcIk9yZGVyXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3c8YnI+dG8gcGxhY2UgYW4gb3JkZXIhXCIsXG4gICAgYnV0dG9uOiBcIk9yZGVyXCJ9LFxuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvbWVudS5wbmdcIixcbiAgICBhbHQ6IFwibWVudSBncmFwaGljXCIsIFxuICAgIHRpdGxlOiBcIk1lbnVcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdzxicj50byBwbGFjZSBhbiBvcmRlciFcIixcbiAgICBidXR0b246IFwiTWVudVwifVxuXTtcblxuY29uc3QgYWJvdXRQYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGFib3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRCb3guY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGFib3V0Qm94KTtcblxuICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94Jyk7XG4gICAgY29uc3QgaDFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFUaXRsZS5pbm5lckhUTUwgPSBcIkFib3V0XCI7XG4gICAgYWJvdXRCb3guYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuICAgIHRpdGxlQm94LmFwcGVuZENoaWxkKGgxVGl0bGUpO1xuXG4gICAgY29uc3QgcG9ydHJhaXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3J0cmFpdEJveC5jbGFzc0xpc3QuYWRkKCdwb3J0cmFpdCcpO1xuICAgIGFib3V0Qm94LmFwcGVuZENoaWxkKHBvcnRyYWl0Qm94KTtcblxuICAgIGNvbnN0IHBvcnRyYWl0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcG9ydHJhaXRJbWcuY2xhc3NMaXN0LmFkZCgncG9ydHJhaXQtaW1nJyk7XG4gICAgcG9ydHJhaXRJbWcuc3JjID0gXCIuL2Fzc2V0cy9jaGVmcy5wbmdcIlxuICAgIHBvcnRyYWl0SW1nLmFsdCA9IFwiQ2hlZidzIG9mIHNoYXduZWUncyBob21lc3R5bGVcIlxuICAgIHBvcnRyYWl0Qm94LmFwcGVuZENoaWxkKHBvcnRyYWl0SW1nKTtcblxuICAgIGNvbnN0IGFib3V0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWRlc2NyaXB0aW9uJyk7XG4gICAgcG9ydHJhaXRCb3guYXBwZW5kQ2hpbGQoYWJvdXREZXNjcmlwdGlvbik7XG4gICAgY29uc3QgaDJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDJUaXRsZS5pbm5lckhUTUwgPSBcIldoYXQgaXMgU2hhd25lZSdzIEhvbWVzdHlsZT9cIjtcbiAgICBhYm91dERlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGgyVGl0bGUpO1xuICAgIGNvbnN0IHBhcmFEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYXJhRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gXCJTaGF3bmVlJ3MgSG9tZXN0eWxlIGlzIGEga2l0Y2hlbiBvdXQgb2YgU291aHRlcm4gQ2FsaWZvbmlhIHRoYXQgc3BlY2lhbGl6ZXMgaW4gaG9tZW1hZGUgRmlsaXBpbm8gZGVsaWNhY2llcyEgUnVuIGJ5IEVsYmkgQmFsbWFjZWRhIGFuZCBCcnlhbiBSYXBhbnV0LCB0aGV5IGNhdGVyIHNvbWUgb2YgdGhlIG1vc3QgYmVsb3ZlZCBmb29kcyBvdXQgb2YgdGhlIE5vcnRoZXJuIFBoaWxpcHBpbmVzIGluIGFkZGl0aW9uIHRvIHRoZSBjdWx0dXJlJ3MgcXVpZXNzZW50aWFscy48YnI+PGJyPllvdSBtaWdodCBiZSB3b25kZXJpbmcsIHdobyBpcyBTaGF3bmVlPyBTaGF3bmVlIGlzIHRoZSBiZWxvdmVkIGdvbGRlbiByZXRyaXZlciBzb3VzIGNoZWYgd2hvIGlzIHRoZSBtYWluIHRhc3RlciBvZiBhbGwgb2YgRWxiaSBhbmQgQnJ5YW4ncyBjcmVhdGlvbnMhIFlvdSB3aWxsIG9mdGVuIGZpbmQgaGltIGluIHRoZSBraXRjaGVuIHdhaXRpbmcgdG8gdHJ5IGVhY2ggYmF0Y2ggd2l0aCBoaXMgZWxkZXIgc2lzdGVyLCBMYXlsYSFcIlxuICAgIGFib3V0RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQocGFyYURlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmRzJyk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwzOyBpKyspIHtcbiAgICAgICAgbGV0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cbiAgICAgICAgbGV0IGNhcmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgY2FyZEltZy5jbGFzc0xpc3QuYWRkKCdjYXJkLWltZycpO1xuICAgICAgICBjYXJkSW1nLnNyYyA9IGAke2NhcmRJdGVtW2ldLmltYWdlQ2FyZH1gO1xuICAgICAgICBjYXJkSW1nLmFsdCA9IGAke2NhcmRJdGVtW2ldLmFsdH1gO1xuXG4gICAgICAgIGxldCBjYXJkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjYXJkVGl0bGUuaW5uZXJIVE1MID0gYCR7Y2FyZEl0ZW1baV0udGl0bGV9YDtcblxuICAgICAgICBsZXQgY2FyZERlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNhcmREZXNjcmlwLmlubmVySFRNTCA9IGAke2NhcmRJdGVtW2ldLmRlc2NyaXB0aW9ufWA7XG5cbiAgICAgICAgbGV0IGNhcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCdjYXJkLWJ0bicpO1xuICAgICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoYGJ1dHRvbi0ke2l9YCk7XG4gICAgICAgIGNhcmRCdG4uaW5uZXJIVE1MID0gYCR7Y2FyZEl0ZW1baV0uYnV0dG9ufWA7XG5cbiAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkSW1nKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREZXNjcmlwKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChjYXJkQnRuKTtcbiAgICB9XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkRGl2KTtcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLTAnKTtcbiAgICBjb25zdCBvcmRlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tMScpO1xuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLTInKTtcbiAgICBcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgaG9tZVBhZ2VMb2FkKCk7XG4gICAgICAgIGZvb3RlckxvYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Fib3V0IFBhZ2UgTG9hZGVkJyk7XG4gICAgfSlcblxuICAgIG9yZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgb3JkZXJQYWdlTG9hZCgpO1xuICAgICAgICBmb290ZXJMb2FkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPcmRlciBQYWdlIExvYWRlZCcpO1xuICAgIH0pXG5cbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbWVudVBhZ2VMb2FkKCk7XG4gICAgICAgIGZvb3RlckxvYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ01lbnUgUGFnZSBMb2FkZWQnKTtcbiAgICB9KVxufVxuXG5leHBvcnQge2Fib3V0UGFnZUxvYWR9OyIsImNvbnN0IGZvb3RlckxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBmb290ZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXJCb3guY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWJveCcpO1xuICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xuICAgICAgICBcbiAgICBjb25zdCBmb290ZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmb290ZXJJbWcuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxvZ28nKTtcbiAgICBmb290ZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgIGZvb3RlckltZy5hbHQgPSBcIlNoYXduZWUncyBIb21lc3R5bGVcIjtcbiAgICAgICAgXG4gICAgY29uc3QgZm9vdGVyQ3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmb290ZXJDcmVkaXRzLmlubmVySFRNTCA9IFwiV2Vic2l0ZSBieSBHbGVubiBBcm5hZGVcIjtcbiAgICAgICAgXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJCb3gpO1xuICAgIGZvb3RlckJveC5hcHBlbmRDaGlsZChmb290ZXJEaXYpO1xuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJJbWcpO1xuICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJDcmVkaXRzKTtcbn1cblxuZXhwb3J0IHtmb290ZXJMb2FkfTsiLCJpbXBvcnQgeyBhYm91dFBhZ2VMb2FkIH0gZnJvbSBcIi4vYWJvdXRcIjtcbmltcG9ydCB7IG9yZGVyUGFnZUxvYWQgfSBmcm9tIFwiLi9vcmRlclwiO1xuaW1wb3J0IHsgZm9vdGVyTG9hZCB9IGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IHsgbWVudVBhZ2VMb2FkIH0gZnJvbSBcIi4vbWVudVwiO1xuXG5jb25zdCBjYXJkSXRlbSA9IFtcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL2NoZWZzLnBuZ1wiLFxuICAgIGFsdDogXCJ0aGUgY2hlZnNcIiwgXG4gICAgdGl0bGU6IFwiTWVldCB0aGUgQ2hlZnNcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdyB0byBsZWFybiBtb3JlPGJyPmFib3V0IFNoYXduZWUncyBIb21lc3R5bGUhXCIsXG4gICAgYnV0dG9uOiBcIldobydzIFNoYXduZWU/XCJ9LFxuICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvb3JkZXIucG5nXCIsXG4gICAgYWx0OiBcIm9yZGVyIGhlcmVcIiwgXG4gICAgdGl0bGU6IFwiT3JkZXJcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQ2xpY2sgdGhlIGJ1dHRvbiBiZWxvdzxicj50byBwbGFjZSBhbiBvcmRlciFcIixcbiAgICBidXR0b246IFwiT3JkZXJcIn0sXG4gICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy9tZW51LnBuZ1wiLFxuICAgIGFsdDogXCJtZW51IGdyYXBoaWNcIiwgXG4gICAgdGl0bGU6IFwiTWVudVwiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJDbGljayB0aGUgYnV0dG9uIGJlbG93PGJyPnRvIHZpZXcgdGhlIG1lbnUhXCIsXG4gICAgYnV0dG9uOiBcIk1lbnVcIn1cbl07XG5cbmNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBob21lUGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9EaXYuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaGVyb0Rpdik7XG4gICAgXG4gICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhlcm9JbWcuY2xhc3NMaXN0LmFkZCgnaGVyby1pbWcnKTtcbiAgICBoZXJvSW1nLnNyYyA9ICcuL2Fzc2V0cy9oZXJvLnBuZyc7XG4gICAgaGVyb0ltZy5hbHQgPSAncGljdHVyZSBvZiBmaWxpcGlubyBmb29kJztcbiAgICBoZXJvRGl2LmFwcGVuZENoaWxkKGhlcm9JbWcpO1xuXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPDM7IGkrKykge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgICBsZXQgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYXJkSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gICAgICAgIGNhcmRJbWcuc3JjID0gYCR7Y2FyZEl0ZW1baV0uaW1hZ2VDYXJkfWA7XG4gICAgICAgIGNhcmRJbWcuYWx0ID0gYCR7Y2FyZEl0ZW1baV0uYWx0fWA7XG5cbiAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS50aXRsZX1gO1xuXG4gICAgICAgIGxldCBjYXJkRGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZERlc2NyaXAuaW5uZXJIVE1MID0gYCR7Y2FyZEl0ZW1baV0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICBsZXQgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYnRuJyk7XG4gICAgICAgIGNhcmRCdG4uY2xhc3NMaXN0LmFkZChgYnV0dG9uLSR7aX1gKTtcbiAgICAgICAgY2FyZEJ0bi5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS5idXR0b259YDtcblxuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbWcpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXApO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCdG4pO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xuICAgIFxuICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0wJyk7XG4gICAgY29uc3Qgb3JkZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLTEnKTtcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0yJyk7XG4gICAgXG4gICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgICAgICBhYm91dFBhZ2VMb2FkKCk7XG4gICAgICAgIGZvb3RlckxvYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Fib3V0IFBhZ2UgTG9hZGVkJyk7XG4gICAgfSlcblxuICAgIG9yZGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgb3JkZXJQYWdlTG9hZCgpO1xuICAgICAgICBmb290ZXJMb2FkKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdPcmRlciBQYWdlIExvYWRlZCcpO1xuICAgIH0pXG5cbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgbWVudVBhZ2VMb2FkKCk7XG4gICAgICAgIGZvb3RlckxvYWQoKTtcbiAgICAgICAgY29uc29sZS5sb2coJ01lbnUgUGFnZSBMb2FkZWQnKTtcbiAgICB9KVxuXG59XG5cbmV4cG9ydCB7aG9tZVBhZ2VMb2FkfTsiLCJpbXBvcnQgeyBvcmRlclBhZ2VMb2FkIH0gZnJvbSBcIi4vb3JkZXJcIjtcbmltcG9ydCB7IGZvb3RlckxvYWQgfSBmcm9tIFwiLi9mb290ZXJcIjtcblxuY29uc3QgbWVudUNhcmQgPSBbXG4gICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy9tYWlucy5wbmdcIixcbiAgICBhbHQ6IFwiY2hpY2tlbiBhZG9ibyBpbiBhIHBvdFwiLCBcbiAgICB0aXRsZTogXCJNQUlOU1wiLCBcbiAgICBkZXNjcmlwdGlvbjogXCJBZG9ibyAoUG9yay9DaGlja2VuKSDigKIgSWdhZG8gKFBvcmspIOKAoiBNZW51ZG8gKFBvcmspIOKAoiBEaW5ha2Rha2FuIChQb3JrKSDigKIgU3RlYWsgKFBvcmsvQmVlZikg4oCiIFNpbmlnYW5nIChQb3JrKSDigKIgTGVjaG9uIEthd2FsaSDigKIgSW5paGF3IChDaGlja2VuL1BvcmspIOKAoiBLYWRlcmVsYSAoUG9yay9CZWVmKSDigKIgUGFwaXRhbiAoQmVlZikg4oCiIEthcmUgS2FyZSAoQmVlZilcIixcbiAgICBidXR0b246IFwiT3JkZXJcIn0sXG4gICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy9jbGFzc2ljcy5wbmdcIixcbiAgICBhbHQ6IFwibHVtcGlhIG9uIGEgcGxhdGVcIiwgXG4gICAgdGl0bGU6IFwiQ0xBU1NJQ1NcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiUGFuY2l0IChCaWhvbi9Tb2xhbmdob24vQ2FudG9uKSDigKIgRnJlc2ggTHVtcGlhIOKAoiBMb25nYW5pc2EgKElsb2thbm8pIOKAoiBCYXJiZXF1ZSAoUG9yay9DaGlja2VuKSDigKIgRWdnIFJvbGwgKFBvcmspIOKAoiBTcGFnaGV0dGkg4oCiIFRvY2lubyDigKIgQXRzYXJhIOKAoiBFbWJ1dGlkb1wiLFxuICAgIGJ1dHRvbjogXCJPcmRlclwifSxcbiAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL2Rlc3NlcnQucG5nXCIsXG4gICAgYWx0OiBcImxlY2hlIGZsYW5cIiwgXG4gICAgdGl0bGU6IFwiREVTU0VSVFNcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiQmlrbyDigKIgU3VtYW4g4oCiIExlY2hlIEZsYW4g4oCiIEZydWl0IFNhbGFkIOKAojxicj5QYWxpdGF34oCiIENpbmFsYWFuZyBCaWxvIEJpbG8g4oCiPGJyPkJ1a28gUGFuZGFuIOKAoiBCYXJiZXF1ZSAoQmFuYW5hL0NhbW90ZSkg4oCiIENhcmlvY2FcIixcbiAgICBidXR0b246IFwiT3JkZXJcIn0sXG4gICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy9zZWFmb29kLnBuZ1wiLFxuICAgIGFsdDogXCJzaHJpbXAgc2luaWdhbmcgaW4gYSBib3dsXCIsIFxuICAgIHRpdGxlOiBcIlNFQUZPT0RcIiwgXG4gICAgZGVzY3JpcHRpb246IFwiU2luaWdhbmcgKEZpc2gvU2hyaW1wKSDigKIgQWRvYm8gUHVzaXQg4oCiIEdpbmF0YWFuZyBJc2RhIOKAoiBQYWtzaXcgTmEgSXNkYSDigKIgRXNjYWJlY2hlIElzZGFcIixcbiAgICBidXR0b246IFwiT3JkZXJcIn0sXG4gICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy92ZWdldGFibGVzLnBuZ1wiLFxuICAgIGFsdDogXCJhZG9ib25nIHNpdGF3IGluIGEgYm93bFwiLCBcbiAgICB0aXRsZTogXCJWRUdFVEFCTEVTXCIsIFxuICAgIGRlc2NyaXB0aW9uOiBcIkdpbmlzYW5nIFNpdGF3IOKAoiBBZG9ib25nIFNpdGF3IOKAoiBDaG9wc3VleSDigKIgRnJ1aXQgU2FsYWQg4oCiIFBha2JldCDigKIgR2luaXNhbmcgS2FuZ2tvbmdcIixcbiAgICBidXR0b246IFwiT3JkZXJcIn0sXG5dO1xuXG5jb25zdCBtZW51TGlzdEFyciA9IFtcIk1haW5zXCIsIFwiQ2xhc3NpY3NcIiwgXCJEZXNlZXJ0c1wiLCBcIlNlYWZvb2RcIiwgXCJWZWdldGFibGVzXCJdO1xuXG5jb25zdCBtZW51UGFnZUxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICBjb25zdCBtZW51Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUJveC5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51Qm94KTtcblxuICAgIGNvbnN0IHRpdGxlQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVCb3guY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94Jyk7XG4gICAgY29uc3QgaDFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDFUaXRsZS5pbm5lckhUTUwgPSBcIk1lbnVcIjtcbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKHRpdGxlQm94KTtcbiAgICB0aXRsZUJveC5hcHBlbmRDaGlsZChoMVRpdGxlKTtcblxuICAgIGNvbnN0IG1lbnVQb3J0cmFpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQb3J0cmFpdC5jbGFzc0xpc3QuYWRkKCdtZW51LXBvcnRyYWl0Jyk7XG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChtZW51UG9ydHJhaXQpO1xuXG4gICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1lbnVJbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1pbWcnKTtcbiAgICBtZW51SW1nLnNyYyA9IFwiLi9hc3NldHMvbWVudS5wbmdcIlxuICAgIG1lbnVJbWcuYWx0ID0gXCJDaGVmJ3Mgb2Ygc2hhd25lZSdzIGhvbWVzdHlsZVwiXG4gICAgbWVudVBvcnRyYWl0LmFwcGVuZENoaWxkKG1lbnVJbWcpO1xuXG4gICAgY29uc3QgbWVudURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudURlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUtZGVzY3JpcHRpb24nKTtcbiAgICBtZW51UG9ydHJhaXQuYXBwZW5kQ2hpbGQobWVudURlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBoMlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMlRpdGxlLmlubmVySFRNTCA9IFwiV2hhdCBEb2VzIFNoYXduZWUgSGF2ZT9cIjtcbiAgICBtZW51RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaDJUaXRsZSk7XG4gICAgXG4gICAgY29uc3QgbWVudURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51RGV0YWlscy5jbGFzc0xpc3QuYWRkKCdtZW51LWRldGFpbHMnKTtcbiAgICBtZW51RGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQobWVudURldGFpbHMpO1xuXG4gICAgY29uc3QgcGFyYURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhcmFEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBcIlNoYXduZWUncyBtZW51IGlzIGEgY2FyZWZ1bCBjdXJhcnRpb24gb2YgZm9vZHMgZnJvbSBhbGwgb3ZlciB0aGUgUGhpbGlwcGluZXMuIFdpdGggYSBmb2N1cyBvZiB0aGUgZmFtaWx5J3MgaG9tZSByZWdpb24gb2YgQWJyYSwgU2hhd25lZSBhbHNvIGxvdmVzIHNlcnZpbmcgdGhlIEZpbGlwaW5vIGNsYXNzaWNzITxicj48YnI+QmVsb3csIHlvdSB3aWxsIGZpbmQgZGlzaGVzIGluIHRoZSBmb2xsb3dpbmcgY2F0ZWdvcmllczpcIjtcbiAgICBtZW51RGV0YWlscy5hcHBlbmRDaGlsZChwYXJhRGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIG1lbnVMaXN0LmNsYXNzTGlzdC5hZGQoJ21lbnUtbGlzdCcpO1xuICAgIG1lbnVEZXRhaWxzLmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcblxuICAgIGZvciAobGV0IGk9MDsgaSA8NSA7IGkrKykge1xuICAgICAgICBsZXQgbWVudUNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbWVudUNhdGVnb3J5LmlubmVySFRNTCA9IGAke21lbnVMaXN0QXJyW2ldfWA7XG4gICAgICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVDYXRlZ29yeSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPDU7IGkrKykge1xuICAgICAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgICBsZXQgY2FyZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjYXJkSW1nLmNsYXNzTGlzdC5hZGQoJ2NhcmQtaW1nJyk7XG4gICAgICAgIGNhcmRJbWcuc3JjID0gYCR7bWVudUNhcmRbaV0uaW1hZ2VDYXJkfWA7XG4gICAgICAgIGNhcmRJbWcuYWx0ID0gYCR7bWVudUNhcmRbaV0uYWx0fWA7XG5cbiAgICAgICAgbGV0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHttZW51Q2FyZFtpXS50aXRsZX1gO1xuXG4gICAgICAgIGxldCBjYXJkRGVzY3JpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY2FyZERlc2NyaXAuaW5uZXJIVE1MID0gYCR7bWVudUNhcmRbaV0uZGVzY3JpcHRpb259YDtcblxuICAgICAgICBsZXQgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYXJkQnRuLmNsYXNzTGlzdC5hZGQoJ2NhcmQtYnRuJylcbiAgICAgICAgY2FyZEJ0bi5pbm5lckhUTUwgPSBgJHttZW51Q2FyZFtpXS5idXR0b259YDtcblxuICAgICAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGNhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRJbWcpO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZERlc2NyaXApO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRCdG4pO1xuICAgIH1cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNhcmREaXYpO1xuXG4gICAgY29uc3QgY2FyZEJ0bkNsaWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtYnRuJyk7XG5cbiAgICBjYXJkQnRuQ2xpY2suZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29udGVudERpdi5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIG9yZGVyUGFnZUxvYWQoKTtcbiAgICAgICAgICAgIGZvb3RlckxvYWQoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdPcmRlciBQYWdlIExvYWRlZCcpO1xuICAgICAgICB9KVxuICAgIH0pO1xufVxuXG5leHBvcnQge21lbnVQYWdlTG9hZH07IiwiaW1wb3J0IHsgZm9vdGVyTG9hZCB9IGZyb20gXCIuL2Zvb3RlclwiO1xuXG5jb25zdCBvcmRlckluc3RydWN0ID0gW1xuICAgIFwiUGxlYXNlIGdpdmUgMiBkYXlzIG5vdGljZSB3aGVuIHBsYWNpbmcgYW4gb3JkZXJcIixcbiAgICBcIkxldCB1cyBrbm93IGFsbCBkaXNoZXMgeW91IHdvdWxkIGxpa2UgdG8gcHVyY2hhc2UgaW4gYWRkaXRpb24gdG8gdGhlIHF1YW50aXR5LlwiLFxuICAgIFwiSWYgeW91IGFyZSBjYXRlcmluZyB0byBhIGxhcmdlIGdyb3VwLCBsZXQgdXMga25vdyBhbmQgd2UgY2FuIGhlbHAgeW91IGRldGVybWluZSB0aGUgYW1vdW50IG9mIGZvb2Qgd2UgcmVjb21tZW5kLlwiLFxuICAgIFwiUGxlYXNlIHRleHQgb3IgY2FsbCB0aGUgbnVtYmVyIGJlbG93IHRvIHBsYWNlIGFuIG9yZGVyXCJcbl1cblxuY29uc3Qgb3JkZXJQYWdlTG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgY29uc3Qgb3JkZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvcmRlckJveC5jbGFzc0xpc3QuYWRkKCdvcmRlcicpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQob3JkZXJCb3gpO1xuXG4gICAgY29uc3QgdGl0bGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUJveC5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ib3gnKTtcbiAgICBjb25zdCBoMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMVRpdGxlLmlubmVySFRNTCA9IFwiT3JkZXJcIjtcbiAgICBvcmRlckJveC5hcHBlbmRDaGlsZCh0aXRsZUJveCk7XG4gICAgdGl0bGVCb3guYXBwZW5kQ2hpbGQoaDFUaXRsZSk7XG5cbiAgICBjb25zdCBvcmRlclBvcnRyYWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3JkZXJQb3J0cmFpdC5jbGFzc0xpc3QuYWRkKCdvcmRlci1wb3J0cmFpdCcpO1xuICAgIG9yZGVyQm94LmFwcGVuZENoaWxkKG9yZGVyUG9ydHJhaXQpO1xuXG4gICAgY29uc3Qgb3JkZXJJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBvcmRlckltZy5jbGFzc0xpc3QuYWRkKCdvcmRlci1pbWcnKTtcbiAgICBvcmRlckltZy5zcmMgPSBcIi4vYXNzZXRzL29yZGVyLnBuZ1wiXG4gICAgb3JkZXJJbWcuYWx0ID0gXCJvcmRlciBmcm9tIGhlcmVcIlxuICAgIG9yZGVyUG9ydHJhaXQuYXBwZW5kQ2hpbGQob3JkZXJJbWcpO1xuXG4gICAgY29uc3Qgb3JkZXJEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9yZGVyRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnb3JkZXItZGVzY3JpcHRpb24nKTtcbiAgICBvcmRlclBvcnRyYWl0LmFwcGVuZENoaWxkKG9yZGVyRGVzY3JpcHRpb24pO1xuICAgIFxuICAgIGNvbnN0IGgyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyVGl0bGUuaW5uZXJIVE1MID0gXCJXYW50IHRvIE9yZGVyIGZyb20gU2hhd25lZT9cIjtcbiAgICBvcmRlckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGgyVGl0bGUpO1xuXG4gICAgY29uc3Qgb3JkZXJEZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3JkZXJEZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ29yZGVyLWRldGFpbHMnKTtcbiAgICBvcmRlckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKG9yZGVyRGV0YWlscyk7XG5cbiAgICBjb25zdCBvcmRlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgb3JkZXJQYXJhLmlubmVySFRNTCA9IFwiQXQgU2hhd25lZSdzIEhvbWVzdHlsZSwgd2UgY3JlYXRlIGFsbCBvZiBvdXIgZGlzaGVzIG1hZGUgdG8gb3JkZXIuIFBsZWFzZSBrZWVwIHRoZSBmb2xsb3dpbmcgaXRlbXMgaW4gbWluZCB3aGVuIG1ha2luZyBhIHJlcXVlc3Q6XCJcbiAgICBvcmRlckRldGFpbHMuYXBwZW5kQ2hpbGQob3JkZXJQYXJhKTtcblxuICAgIGNvbnN0IG9yZGVyTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgb3JkZXJMaXN0LmNsYXNzTGlzdC5hZGQoJ29yZGVyLWxpc3QnKTtcbiAgICBvcmRlckRldGFpbHMuYXBwZW5kQ2hpbGQob3JkZXJMaXN0KTtcblxuICAgIGZvciAobGV0IGk9MCA7IGk8NCA7IGkrKykge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgJHtvcmRlckluc3RydWN0W2ldfWA7XG4gICAgICAgIG9yZGVyTGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGFjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGNvbnRhY3ROYW1lLmlubmVySFRNTCA9IFwiPHN0cm9uZz5Db250YWN0IE5hbWU6PC9zdHJvbmc+IEVsYmkgQmFsbWFjZWRhXCI7XG4gICAgb3JkZXJEZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChjb250YWN0TmFtZSk7XG5cbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcGhvbmVOdW1iZXIuaW5uZXJIVE1MID0gXCI8c3Ryb25nPlBob25lIE51bWJlcjo8L3N0cm9uZz4gKDYyNikgOTkxLTg2NjVcIjtcbiAgICBvcmRlckRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbn1cblxuZXhwb3J0IHtvcmRlclBhZ2VMb2FkfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGhvbWVQYWdlTG9hZCB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IGFib3V0UGFnZUxvYWQgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgb3JkZXJQYWdlTG9hZCB9IGZyb20gXCIuL29yZGVyXCI7XG5pbXBvcnQgeyBmb290ZXJMb2FkIH0gZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgeyBtZW51UGFnZUxvYWQgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmNvbnN0IGFib3V0TmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0LW5hdicpO1xuY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LW5hdicpO1xuY29uc3Qgb3JkZXJOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3JkZXItbmF2Jyk7XG5jb25zdCBsb2dvQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ28tYm94Jyk7XG5jb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbigpIHtcbiAgICBob21lUGFnZUxvYWQoKTtcbiAgICBmb290ZXJMb2FkKCk7XG59KVxuXG5sb2dvQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIGhvbWVQYWdlTG9hZCgpO1xuICAgIGZvb3RlckxvYWQoKTtcbiAgICBjb25zb2xlLmxvZygnSG9tZSBQYWdlIGxvYWRlZCcpO1xufSlcblxuYWJvdXROYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gJyc7XG4gICAgYWJvdXRQYWdlTG9hZCgpO1xuICAgIGZvb3RlckxvYWQoKTtcbiAgICBjb25zb2xlLmxvZygnQWJvdXQgUGFnZSBMb2FkZWQnKTtcbn0pXG5cbm9yZGVyTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIG9yZGVyUGFnZUxvYWQoKTtcbiAgICBmb290ZXJMb2FkKCk7XG4gICAgY29uc29sZS5sb2coJ09yZGVyIFBhZ2UgTG9hZGVkJyk7XG59KVxuXG5tZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9ICcnO1xuICAgIG1lbnVQYWdlTG9hZCgpO1xuICAgIGZvb3RlckxvYWQoKTtcbiAgICBjb25zb2xlLmxvZygnTWVudSBQYWdlIExvYWRlZCcpXG59KVxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==