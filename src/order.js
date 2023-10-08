import { footerLoad } from "./footer";

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

export {orderPageLoad};