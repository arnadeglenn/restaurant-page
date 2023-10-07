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

export {homePageLoad};