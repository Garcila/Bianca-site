/* eslint-env browser */

const nav = document.querySelector('.menu');
const waypoint = document.querySelector('.waypoint');
// let topOfNav = nav.offsetTop;

function fixNav() {
    const verticalScroll = window.scrollY;

    // if (window.scrollY >= topOfNav) {
    if (verticalScroll >= photoContainer) {
        document.body.classList.add('fixed-nav');
        waypoint.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);
window.addEventListener('touchmove', fixNav, false);

//set up selections
const photoContainer = document.querySelector('.hero').offsetHeight;
const logo = document.querySelector('.logo');
const title = document.querySelector('.title');
const letters = document.querySelector('.letters');

// //parallax the logo and name in the hero image
function parallax() {
    const verticalScroll = window.scrollY;

    if ((verticalScroll <= photoContainer)) {
        letters.style.transform = `translate(0%, ${verticalScroll / 8}% )`;
    }
}

window.addEventListener('touchmove', parallax, false);
window.addEventListener('scroll', parallax, false);