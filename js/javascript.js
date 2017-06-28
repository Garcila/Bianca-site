/* eslint-env browser */

const nav = document.querySelector('nav');
const waypoint = document.querySelector('.waypoint');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
        waypoint.style.paddingTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);
window.onscroll = function() { alert("Scrolled"); };

// const start = () => {
//set up selections
const photoContainer = document.querySelector('.hero').offsetHeight;
const logo = document.querySelector('.logo');
const title = document.querySelector('.title');
const letters = document.querySelector('.letters');
// const nav = document.querySelector('nav');

// //sticky navigation
// const waypoint = new Waypoint({
//     element: document.querySelector('.waypoint'),
//     handler: (direction) => {
//         if (direction === 'down') {
//             nav.className = 'sticky';
//             document.body.style.paddingTop = nav.offsetHeight + 'px';
//         } else {
//             nav.className = 'hidden_menu';
//             document.body.style.paddingTop = 0;
//         }
//     },

//     offset: `${nav.offsetHeight}px`,
// });

// //parallax the logo and name in the hero image
function parallax() {
    const verticalScroll = window.scrollY;

    if ((verticalScroll <= photoContainer)) {
        letters.style.transform = `translate(0%, ${verticalScroll / 8}% )`;
        // title.style.transform = `translate(0%, ${verticalScroll / 1.6}% )`;
        // title.style.transform = `translate(${verticalScroll * 0.2}%, ${verticalScroll * -0.1}%)`;
    }
}

window.addEventListener('scroll', parallax);
// };

// start();