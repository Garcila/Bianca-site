/* eslint-env browser */
const start = () => {

  //set up selections
  const photoContainer = document.querySelector('.big-photo').offsetHeight;
  const square = document.querySelector('.square');
  const title = document.querySelector('.title');
  const nav = document.querySelector('nav');

  //sticky navigation
  const waypoint = new Waypoint({
    element: document.querySelector('.point'),
    handler: (direction) => {
      direction === 'down' ? nav.className = 'sticky' : nav.className = 'hidden_menu';
    },

    offset: '80px',
  });

  //parallax the logo and name in the hero image
  function parallax() {
    const verticalScroll = window.scrollY;

    if (verticalScroll <= photoContainer && verticalScroll < 300) {
      square.style.transform = `translate(0%, ${verticalScroll / 1.4}% )`;
      title.style.transform = `translate(${verticalScroll / 8}%, ${verticalScroll / 4.9}%)`;
    }
  }

  window.addEventListener('scroll', parallax);
};

start();
