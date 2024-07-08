const team1Dom = document.querySelector('.team1');
const team2Dom = document.querySelector('.team2');
const buttonsDom = document.querySelectorAll('button');
const team1Plus1Btn = buttonsDom[0];
const team1Plus2Btn = buttonsDom[1];
const team1Plus3Btn = buttonsDom[2];

const team2Plus1Btn = buttonsDom[3];
const team2Plus2Btn = buttonsDom[4];
const team2Plus3Btn = buttonsDom[5];

const suvDom = document.querySelector('article > div');


let total = 0;
let suv = '';

function plusOne() {
    total++;
    suv = `<p>&bull; Team1 +1</p>`;
    team1Dom.textContent = total;
    suvDom.innerHTML += suv;

}
function plusTwo() {
    total += 2;
    suv = `<p>&bull; Team1 +2</p>`;
    team1Dom.textContent = total;
    suvDom.innerHTML += suv;
}
function plusThree() {
    total += 3;
    suv = `<p>&bull; Team1 +3</p>`;
    team1Dom.textContent = total;
    suvDom.innerHTML += suv;
}

let total2 = 0;
let suv2 = '';

function plusOneTeam2() {
    total2++;
    suv2 = `<p>&bull; Team2 +1</p>`;
    team2Dom.textContent = total2;
    suvDom.innerHTML += suv2;
}
function plusTwoTeam2() {
    total2 += 2;
    suv2 = `<p>&bull; Team2 +2</p>`;
    team2Dom.textContent = total2;
    suvDom.innerHTML += suv2;
}
function plusThreeTeam2() {
    total2 += 3;
    suv2 = `<p>&bull; Team2 +3</p>`;
    team2Dom.textContent = total2;
    suvDom.innerHTML += suv2;
}

team1Plus1Btn.addEventListener('click', plusOne);
team1Plus2Btn.addEventListener('click', plusTwo);
team1Plus3Btn.addEventListener('click', plusThree);

team2Plus1Btn.addEventListener('click', plusOneTeam2);
team2Plus2Btn.addEventListener('click', plusTwoTeam2);
team2Plus3Btn.addEventListener('click', plusThreeTeam2);