import { takeRightWhile } from "lodash";

export function contactLoad() {

    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren();

    const contactMessage = document.createElement('div');
    content.appendChild(contactMessage);
    contactMessage.textContent = 'HELLO CONTACT';

}