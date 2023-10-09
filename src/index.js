import { homePageLoad } from "./home";
import { aboutPageLoad } from "./about";
import { orderPageLoad } from "./order";
import { footerLoad } from "./footer";
import { menuPageLoad } from "./menu";

const aboutNav = document.getElementById('about-nav');
const menuNav = document.getElementById('menu-nav');
const orderNav = document.getElementById('order-nav');
const logoBox = document.querySelector('.logo-box');
const contentDiv = document.getElementById('content');



window.addEventListener("load", function() {
    homePageLoad();
    footerLoad();
})

logoBox.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    homePageLoad();
    footerLoad();
    console.log('Home Page loaded');
})

aboutNav.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    aboutPageLoad();
    footerLoad();
    console.log('About Page Loaded');
})

orderNav.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    orderPageLoad();
    footerLoad();
    console.log('Order Page Loaded');
})

menuNav.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    menuPageLoad();
    footerLoad();
    console.log('Menu Page Loaded')
})











