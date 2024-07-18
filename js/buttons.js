import { headerAuto, headerData } from "./header.js";

const headerDOM = document.querySelector('header');
headerDOM.innerHTML = headerAuto(headerData);

const divDom = document.getElementById('log');
const buttonsDom = document.querySelectorAll('button');
const btnJonas = buttonsDom[0];
const btnPetras = buttonsDom[1];
const btnOna = buttonsDom[2];
const btnMaryte = buttonsDom[3];

let name = '';

function intro(string = '') {
    name = string;
    divDom.innerHTML += `<p>&bull; Sveiki, mano vardas ${name}</p>`

}

btnJonas.addEventListener('click', () => intro('Jonas'));
btnPetras.addEventListener('click', () => intro('Petras'));
btnOna.addEventListener('click', () => intro('Ona'));
btnMaryte.addEventListener('click', () => intro('Maryte'));
