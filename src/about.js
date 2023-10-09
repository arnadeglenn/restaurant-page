import { homePageLoad } from "./home";
import { orderPageLoad } from "./order";
import { footerLoad } from "./footer";
import { menuPageLoad } from "./menu";

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
        homePageLoad();
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

export {aboutPageLoad};