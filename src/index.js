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



