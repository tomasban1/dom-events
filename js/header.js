
const titleDom = document.querySelector('title');

export const headerData = [
    { name: 'Scoreboard', dir: './' },
    { name: 'Buttons', dir: './buttons' }
];

export function headerAuto(headerData) {
    let headerHTML = '';

    for (const data of headerData) {
        if (titleDom.innerText === 'Home') {
            headerHTML += `<a href="${data.dir}">${data.name}</a>`
        } else {
            headerHTML += `<a href=".${data.dir}">${data.name}</a>`
        }

    }

    return `<nav>${headerHTML}</nav>`
}
