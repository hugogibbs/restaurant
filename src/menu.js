import { takeRightWhile } from "lodash";

export function menuLoad() {

    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const menu1 = document.createElement('div');
    content.appendChild(menu1);
    menu1.textContent = 'This is the Menu 1';

    const menu2 = document.createElement('div');
    content.appendChild(menu2);
    menu2.textContent = 'This is the Menu 2';


    const menu3 = document.createElement('div');
    content.appendChild(menu3);
    menu3.textContent = 'This is the Menu 3';

    const menu4 = document.createElement('div');
    content.appendChild(menu4);
    menu4.textContent = 'This is the Menu 4';
    menu4.className = 'menuItem';


}