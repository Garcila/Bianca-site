/* eslint-env browser */
const start = () => {
    //set up selections
    const photoContainer = document.querySelector('.hero').offsetHeight;
    const square = document.querySelector('.logo');
    const title = document.querySelector('.title');
    const nav = document.querySelector('nav');

    //sticky navigation
    const waypoint = new Waypoint({
        element: document.querySelector('.waypoint'),
        handler: (direction) => {
            if (direction === 'down') {
                nav.className = 'sticky';
                document.body.style.paddingTop = nav.offsetHeight + 'px';
            } else {
                nav.className = 'hidden_menu';
                document.body.style.paddingTop = 0;
            }
        },

        offset: `${nav.offsetHeight}px`,
    });

    //parallax the logo and name in the hero image
    function parallax() {
        const verticalScroll = window.scrollY;

        if ((verticalScroll <= photoContainer) && (verticalScroll < 250)) {
            square.style.transform = `translate(0%, ${verticalScroll / 1.4}% )`;
            title.style.transform = `translate(0%, ${verticalScroll * 1.3}% )`;
            // title.style.transform = `translate(${verticalScroll * 0.2}%, ${verticalScroll * -0.1}%)`;
        }
    }

    window.addEventListener('scroll', parallax);
};

start();