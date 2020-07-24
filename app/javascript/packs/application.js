require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { projectPlay } from '../components/projectnew';
import { library } from '../components/boubouton';
import { slideleft } from '../components/slide';


let url = "bobo";
const reg = /.projects./;


document.addEventListener('turbolinks:load', () => {
if (document.querySelector('.projects')) {
    library();
    projectPlay();


  }
  if (document.querySelector('.product-banner')) {
    slideleft(url);
  }


});
document.addEventListener('turbolinks:visit', () => {
  url = document.location.href;
});

