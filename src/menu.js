import { orderPageLoad } from "./order";
import { footerLoad } from "./footer";

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
            orderPageLoad();
            footerLoad();
            console.log('Order Page Loaded');
        })
    });
}

export {menuPageLoad};