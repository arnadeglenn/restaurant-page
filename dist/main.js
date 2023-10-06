/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const homePage = (function() {
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
        description: "Click the button below<br>to place an order!",
        button: "Order"}
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
            cardBtn.innerHTML = `${cardItem[i].button}`;

            cardDiv.appendChild(card);
            card.appendChild(cardImg);
            card.appendChild(cardTitle);
            card.appendChild(cardDescrip);
            card.appendChild(cardBtn);
        }
        contentDiv.appendChild(cardDiv);
    }
    const footer = function() {
        const footerBox = document.createElement('footer');
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

    return {homePageLoad, footer}
})();

homePage.homePageLoad();
homePage.footer();




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLE1BQU07QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCLHNCQUFzQjtBQUNuRCw2QkFBNkIsZ0JBQWdCOztBQUU3QztBQUNBLHFDQUFxQyxrQkFBa0I7O0FBRXZEO0FBQ0EsdUNBQXVDLHdCQUF3Qjs7QUFFL0Q7QUFDQSxtQ0FBbUMsbUJBQW1COztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFlBQVk7QUFDWixDQUFDOztBQUVEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG9tZVBhZ2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2FyZEl0ZW0gPSBbXG4gICAgICAgIHtpbWFnZUNhcmQ6IFwiLi9hc3NldHMvY2hlZnMucG5nXCIsXG4gICAgICAgIGFsdDogXCJ0aGUgY2hlZnNcIiwgXG4gICAgICAgIHRpdGxlOiBcIk1lZXQgdGhlIENoZWZzXCIsIFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDbGljayB0aGUgYnV0dG9uIGJlbG93IHRvIGxlYXJuIG1vcmU8YnI+YWJvdXQgU2hhd25lZSdzIEhvbWVzdHlsZSFcIixcbiAgICAgICAgYnV0dG9uOiBcIldobydzIFNoYXduZWU/XCJ9LFxuICAgICAgICB7aW1hZ2VDYXJkOiBcIi4vYXNzZXRzL29yZGVyLnBuZ1wiLFxuICAgICAgICBhbHQ6IFwib3JkZXIgaGVyZVwiLCBcbiAgICAgICAgdGl0bGU6IFwiT3JkZXJcIiwgXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNsaWNrIHRoZSBidXR0b24gYmVsb3c8YnI+dG8gcGxhY2UgYW4gb3JkZXIhXCIsXG4gICAgICAgIGJ1dHRvbjogXCJPcmRlclwifSxcbiAgICAgICAge2ltYWdlQ2FyZDogXCIuL2Fzc2V0cy9tZW51LnBuZ1wiLFxuICAgICAgICBhbHQ6IFwibWVudSBncmFwaGljXCIsIFxuICAgICAgICB0aXRsZTogXCJNZW51XCIsIFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDbGljayB0aGUgYnV0dG9uIGJlbG93PGJyPnRvIHBsYWNlIGFuIG9yZGVyIVwiLFxuICAgICAgICBidXR0b246IFwiT3JkZXJcIn1cbiAgICBdO1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGhvbWVQYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChoZXJvRGl2KTtcblxuICAgICAgICBcbiAgICAgICAgY29uc3QgaGVyb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBoZXJvSW1nLmNsYXNzTGlzdC5hZGQoJ2hlcm8taW1nJyk7XG4gICAgICAgIGhlcm9JbWcuc3JjID0gJy4vYXNzZXRzL2hlcm8ucG5nJztcbiAgICAgICAgaGVyb0ltZy5hbHQgPSAncGljdHVyZSBvZiBmaWxpcGlubyBmb29kJztcbiAgICAgICAgaGVyb0Rpdi5hcHBlbmRDaGlsZChoZXJvSW1nKTtcblxuICAgICAgICBjb25zdCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZHMnKTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpIDwzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcblxuICAgICAgICAgICAgbGV0IGNhcmRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGNhcmRJbWcuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbWcnKTtcbiAgICAgICAgICAgIGNhcmRJbWcuc3JjID0gYCR7Y2FyZEl0ZW1baV0uaW1hZ2VDYXJkfWA7XG4gICAgICAgICAgICBjYXJkSW1nLmFsdCA9IGAke2NhcmRJdGVtW2ldLmFsdH1gO1xuXG4gICAgICAgICAgICBsZXQgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGNhcmRUaXRsZS5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS50aXRsZX1gO1xuXG4gICAgICAgICAgICBsZXQgY2FyZERlc2NyaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBjYXJkRGVzY3JpcC5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgICAgICAgICBsZXQgY2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY2FyZEJ0bi5pbm5lckhUTUwgPSBgJHtjYXJkSXRlbVtpXS5idXR0b259YDtcblxuICAgICAgICAgICAgY2FyZERpdi5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEltZyk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGNhcmREZXNjcmlwKTtcbiAgICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoY2FyZEJ0bik7XG4gICAgICAgIH1cbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChjYXJkRGl2KTtcbiAgICB9XG4gICAgY29uc3QgZm9vdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGZvb3RlckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgICAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9vdGVyQm94LmFwcGVuZENoaWxkKGZvb3RlckRpdik7XG5cbiAgICAgICAgY29uc3QgZm9vdGVySW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGZvb3RlckltZy5jbGFzc0xpc3QuYWRkKCdmb290ZXItbG9nbycpO1xuICAgICAgICBmb290ZXJJbWcuc3JjID0gXCIuL2Fzc2V0cy9sb2dvLnBuZ1wiO1xuICAgICAgICBmb290ZXJJbWcuYWx0ID0gXCJTaGF3bmVlJ3MgSG9tZXN0eWxlXCI7XG5cbiAgICAgICAgY29uc3QgZm9vdGVyQ3JlZGl0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgZm9vdGVyQ3JlZGl0cy5pbm5lckhUTUwgPSBcIldlYnNpdGUgYnkgR2xlbm4gQXJuYWRlXCI7XG5cbiAgICAgICAgY29udGVudERpdi5hcHBlbmRDaGlsZChmb290ZXJCb3gpO1xuICAgICAgICBmb290ZXJCb3guYXBwZW5kQ2hpbGQoZm9vdGVyRGl2KTtcbiAgICAgICAgZm9vdGVyRGl2LmFwcGVuZENoaWxkKGZvb3RlckltZyk7XG4gICAgICAgIGZvb3RlckRpdi5hcHBlbmRDaGlsZChmb290ZXJDcmVkaXRzKTtcbiAgICAgICAgXG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2hvbWVQYWdlTG9hZCwgZm9vdGVyfVxufSkoKTtcblxuaG9tZVBhZ2UuaG9tZVBhZ2VMb2FkKCk7XG5ob21lUGFnZS5mb290ZXIoKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==