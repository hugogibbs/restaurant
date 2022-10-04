import { takeRightWhile } from "lodash";

export function menuLoad() {

    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const menuContainer = document.createElement('div');
    content.appendChild(menuContainer);
    menuContainer.className = 'menuContainer';


    // ALL elements from menu 1
    const menu1 = document.createElement('div');
    menu1.className = 'menuItem';
    menuContainer.appendChild(menu1);

    const menu1Image = document.createElement('img');
    menu1Image.src = "../dist/classic.png";
    menu1Image.className = 'menuImage';
    menu1.appendChild(menu1Image);

    const menu1Title = document.createElement('div');
    menu1.appendChild(menu1Title);
    menu1Title.className = 'menuTitle';
    menu1Title.textContent = 'CLASSIC BURGER';

    const menu1Description = document.createElement('div');
    menu1.appendChild(menu1Description);
    menu1Description.className = 'menuDescription';
    menu1Description.textContent = 'This is our classic burger, tomatoe, lettuce, pickles, onions and our secret sauce';

    //ALL elements from menu 2

    const menu2 = document.createElement('div');
    menu2.className = 'menuItem';
    menuContainer.appendChild(menu2);

    const menu2Image = document.createElement('img');
    menu2Image.src = "../dist/cheeseburger.png";
    menu2Image.className = 'menuImage';
    menu2.appendChild(menu2Image);

    const menu2Title = document.createElement('div');
    menu2.appendChild(menu2Title);
    menu2Title.className = 'menuTitle';
    menu2Title.textContent = 'CHEESEBURGER';

    const menu2Description = document.createElement('div');
    menu2.appendChild(menu2Description);
    menu2Description.className = 'menuDescription';
    menu2Description.textContent = 'This is Cheeseburger, tomatoe, lettuce, pickles, cheese and our secret sauce';

    // ALL Elements from menu 3
    const menu3 = document.createElement('div');
    menu3.className = 'menuItem';
    menuContainer.appendChild(menu3);

    const menu3Image = document.createElement('img');
    menu3Image.src = "../dist/doubleCheeseburger.png";
    menu3Image.className = 'menuImage';
    menu3.appendChild(menu3Image);

    const menu3Title = document.createElement('div');
    menu3.appendChild(menu3Title);
    menu3Title.className = 'menuTitle';
    menu3Title.textContent = 'DOUBLE CHEESEBURGER';

    const menu3Description = document.createElement('div');
    menu3.appendChild(menu3Description);
    menu3Description.className = 'menuDescription';
    menu3Description.textContent = 'This is Double Cheeseburger with our secret sauce';

    //ALL Elements from menu4
    const menu4 = document.createElement('div');
    menu4.className = 'menuItem';
    menuContainer.appendChild(menu4);

    const menu4Image = document.createElement('img');
    menu4Image.src = "../dist/deluxe.png";
    menu4Image.className = 'menuImage';
    menu4.appendChild(menu4Image);

    const menu4Title = document.createElement('div');
    menu4.appendChild(menu4Title);
    menu4Title.className = 'menuTitle';
    menu4Title.textContent = 'DELUXE';

    const menu4Description = document.createElement('div');
    menu4.appendChild(menu4Description);
    menu4Description.className = 'menuDescription';
    menu4Description.textContent = 'This is our Deluxe Burger, tomatoes, lettuce, pickles, bacon, cheese and our secret sauce';




// Page footer

    const pageFooter = document.createElement('div');
    content.appendChild(pageFooter);
    pageFooter.className = 'footer';
    pageFooter.textContent = ('Copyright © Hugo Gibbs 2022. All rights reserved.');


}