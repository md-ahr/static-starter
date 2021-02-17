// Fixed top header section

const navElement = document.getElementById('js--top-navbar');

window.onscroll = () => {
  const positionY = window.scrollY;
  if (positionY >= 40) {
    navElement.style.backgroundColor = '#0063d9';
    navElement.classList.add('shadow');
  } else {
    navElement.style.backgroundColor = 'transparent';
    navElement.classList.remove('shadow');
  }
};
