require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { projectPlay } from '../components/projectnew';
import { library } from '../components/boubouton';
import { slideleft } from '../components/slide';
import { model } from '../components/modal';
import { mobile } from '../components/mobilephone';


let url = "bobo";



document.addEventListener('turbolinks:load', () => {
  if (window.matchMedia("(min-width: 400px)").matches) {
    mobile();
  /* the view port is at least 400 pixels wide */
} else {
  /* the view port is less than 400 pixels wide */


if (document.querySelector('.projects')) {
    library();
    projectPlay();


  }
  if (document.querySelector('.product-banner')) {
    slideleft(url);
  }
if (document.querySelector('.modal')) {
  model();
 }
}

});

document.addEventListener('turbolinks:visit', () => {
  url = document.location.href;
});

