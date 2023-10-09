import { aboutPageLoad } from "./about";
import { orderPageLoad } from "./order";
import { footerLoad } from "./footer";
import { menuPageLoad } from "./menu";

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
        aboutPageLoad();
        footerLoad();
        console.log('About Page Loaded');
    })

    orderButton.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';
        orderPageLoad();
        footerLoad();
        console.log('Order Page Loaded');
    })

    menuButton.addEventListener('click', (e) => {
        contentDiv.innerHTML = '';
        menuPageLoad();
        footerLoad();
        console.log('Menu Page Loaded');
    })

}

export {homePageLoad};