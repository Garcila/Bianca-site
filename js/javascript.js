/* eslint-env browser */
const start = () => {

  //set up selections
  const photoContainer = document.querySelector('.big-photo').offsetHeight;
  const bigPhoto = document.querySelector('.big-photo');
  const square = document.querySelector('.square');
  const title = document.querySelector('.title');
  const nav = document.querySelector('nav');

  //sticky navigation
  const waypoint = new Waypoint({
    element: document.querySelector('.point'),
    handler: (direction) => {
      direction === 'down' ? nav.className = 'sticky' : nav.className = 'hidden_menu';
      // nav.className='sticky';
    },

    offset: 10,
  });

  //parallax the logo and name in the hero image
  function parallax() {
    const wScroll = window.scrollY;

    // console.log(wScroll);
    if (wScroll <= photoContainer && wScroll < 475) {
      square.style.transform = `translate(0%, ${wScroll / 1.6}% )`;
      title.style.transform = `translate(${wScroll / 10}%, ${wScroll / 3.7}%)`;
    }

    // else if (wScroll >= 476) {
    //   // bigPhoto.className = 'big-photo-sm';
    //   // square.style.transform = 'translate(0, 0)';
    // }

    if (wScroll === 0) {
      // console.log('zero');
      bigPhoto.className = 'big-photo';
    }
  }

  window.addEventListener('scroll', parallax);
};

start();
