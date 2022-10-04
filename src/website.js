import { takeRightWhile } from "lodash";

import coverImage from '../dist/burger.png';

export function homePageLoad() {

    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const header1 = document.createElement('h1');
    content.appendChild(header1);
    header1.textContent = 'We Serve The Best Burger in Miami';

    const imageContainer = document.createElement('div');
    content.appendChild(imageContainer);
    imageContainer.className = 'restaurantImage';

    const burgerImage = document.createElement('img');
    imageContainer.appendChild(burgerImage);
    burgerImage.src = coverImage;
    burgerImage.className = 'image';

    const paragraph1 = document.createElement('p');
    content.appendChild(paragraph1);
    paragraph1.textContent = ('This website is dedicated to the best burger in the world');

    const paragraph2 = document.createElement('p');
    content.appendChild(paragraph2);
    paragraph2.textContent = ('Our burgers are prepared with the best ingredients');

    const paragraph3 = document.createElement('p');
    content.appendChild(paragraph3);
    paragraph3.textContent = ('Find our restaurant in downtown Miami');

    const pageFooter = document.createElement('div');
    content.appendChild(pageFooter);
    pageFooter.className = 'footer';
    pageFooter.textContent = ('Copyright © Hugo Gibbs 2022. All rights reserved.');

}