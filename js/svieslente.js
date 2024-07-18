import { headerAuto, headerData } from "./header.js";

const headerDOM = document.querySelector('header');
headerDOM.innerHTML = headerAuto(headerData);

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




let boardData = [];
const localBoardData = localStorage.getItem('data');
if (localBoardData !== null) {
    boardData = JSON.parse(localBoardData);
    pointCount();
    scoreHistory();
}



team1Plus1Btn.addEventListener('click', () => {
    pushData('Team 1', 1);
    pointCount();
    scoreHistory();
});
team1Plus2Btn.addEventListener('click', () => {
    pushData('Team 1', 2);
    pointCount();
    scoreHistory();
});
team1Plus3Btn.addEventListener('click', () => {
    pushData('Team 1', 3);
    pointCount();
    scoreHistory();
})
team2Plus1Btn.addEventListener('click', () => {
    pushData('Team 2', 1);
    pointCount();
    scoreHistory();
});
team2Plus2Btn.addEventListener('click', () => {
    pushData('Team 2', 2);
    pointCount();
    scoreHistory();
});
team2Plus3Btn.addEventListener('click', () => {
    pushData('Team 2', 3);
    pointCount();
    scoreHistory();
});

function pointCount() {
    let team1 = 0;
    let team2 = 0;
    for (const data of boardData) {
        if (data.team === 'Team 1') {
            team1 += data.points
        } else {
            team2 += data.points
        }
    }
    team1Dom.textContent = team1;
    team2Dom.textContent = team2;
}

function scoreHistory() {
    localStorage.setItem('data', JSON.stringify(boardData));
    let HTML = ``;
    for (const data of boardData) {
        HTML += `
        <div class="box">
            <p>${formatTime(data.scoreTime)}</p>
            <p>${data.team} + ${data.points} points</p>
            <button class="deleteBtn">Delete</button>
        </div>`
    }
    suvDom.innerHTML = HTML;
    const boxDom = document.querySelectorAll('.box');
    for (let i = 0; i < boxDom.length; i++) {
        const deleteButton = boxDom[i].querySelector('button')
        deleteButton.addEventListener('click', () => {
            boardData.splice(i, 1);
            localStorage.setItem('data', JSON.stringify(boardData));
            pointCount();
            scoreHistory();
        })
    }

}

function formatTime(timeInMs) {
    const now = new Date(timeInMs);
    const currentDate = new Date().toJSON().slice(0, 10);
    let hours = now.getHours();
    let minutes = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    let seconds = (now.getSeconds() < 10 ? '0' : '') + now.getSeconds();
    let mili = now.getMilliseconds();

    return `${hours}h : ${minutes}min, ${seconds}sec ${mili}ms.`
}

function pushData(teamName, points) {
    boardData.push({
        team: teamName,
        points: points,
        scoreTime: Date.now(),
    });
}