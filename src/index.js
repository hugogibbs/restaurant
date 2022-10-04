import {homePageLoad} from './website.js';
import {menuLoad} from './menu.js';
import {contactLoad} from './contact.js';


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

