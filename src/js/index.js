/* ----- Import External Plugins ----- */

import '../scss/app.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './app.js';
require.context('../images', false);
require.context('../fonts', false);

// Animation Using GASP Library
let tl = gsap.timeline({ defaults: { duration: 1 } });
tl.from('#js--header-section .navbar-brand img', {
  opacity: 0,
  x: -20,
  stagger: 0.3,
});
tl.from('#js--header-section .navbar-nav', { opacity: 0, x: 20, stagger: 0.3 });
tl.from('#js--header-section .title', { opacity: 0, y: -20, stagger: 0.3 });
tl.from('#js--header-section .sub-title', { opacity: 0, x: -20, stagger: 0.3 });
tl.from('#js--header-section .btn-hire-us', {
  opacity: 0,
  y: 20,
  stagger: 0.3,
});

function animateFrom(elem, direction) {
  direction = direction | 1;
  let x = 0,
    y = direction * 100;
  if (elem.classList.contains('js--anime-left')) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains('js--anime-right')) {
    x = 100;
    y = 0;
  }
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 5,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray('.js--anime-item').forEach(function (elem) {
    hide(elem);
    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
  });
});
