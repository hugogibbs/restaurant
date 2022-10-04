import { takeRightWhile } from "lodash";

export function contactLoad() {

    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();


    const contactContainer = document.createElement('div');
    content.appendChild(contactContainer);
    contactContainer.className = 'contactContainer';

    const contactImage = document.createElement('img');
    contactContainer.appendChild(contactImage);
    contactImage.src = '../dist/location.png';
    contactImage.className = 'contactImage';
    

    const contactMessage = document.createElement('div');
    contactContainer.appendChild(contactMessage);
    contactMessage.textContent = 'Find us on 601 Biscayne Blvd, Miami, FL 33132, USA';
    contactMessage.className = 'contactMessage'


    //map 

    const mapContainer = document.createElement('div');
    content.appendChild(mapContainer);
    mapContainer.className = 'mapContainer';

    const mapImage = document.createElement('img');
    mapContainer.appendChild(mapImage);
    mapImage.src = '../dist/map.png';
    mapImage.className = 'mapImage';





    //page footer


    const pageFooter = document.createElement('div');
    content.appendChild(pageFooter);
    pageFooter.className = 'footer';
    pageFooter.textContent = ('Copyright © Hugo Gibbs 2022. All rights reserved.');



}