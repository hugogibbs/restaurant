// import all the modules of the website

import {homePageLoad} from './website.js';
import {menuLoad} from './menu.js';
import {contactLoad} from './contact.js';

//import the CSS file

import './style.css';   

//import the images

import '../dist/doubleCheeseburger.png';
import '../dist/classic.png';
import '../dist/deluxe.png';

homePageLoad();


// module to swith tabs between home, menu and contact

let switchModule = (function () {

    const homeTab = document.getElementById('home');
    homeTab.addEventListener("click", homePageLoad);

    const menuTab = document.getElementById('menu');
    menuTab.addEventListener("click", menuLoad);

    const contactTab = document.getElementById('contact');
    contactTab.addEventListener("click", contactLoad);

})();

