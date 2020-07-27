require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { projectPlay } from '../components/projectnew';
import { library } from '../components/boubouton';
import { slideleft } from '../components/slide';
import { model } from '../components/modal';


let url = "bobo";



document.addEventListener('turbolinks:load', () => {

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

});

document.addEventListener('turbolinks:visit', () => {
  url = document.location.href;
});

