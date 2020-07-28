require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { projectPlay } from '../components/projectnew';
import { library2 } from '../components/boutonbouton2';
import { slideleft } from '../components/slide';
import { model } from '../components/modal';
import { mobile } from '../components/mobilephone';
import { slideleftb } from '../components/slideleftb';
import { homecome } from '../components/homecome';




  let url = document.location.href;





  if (window.matchMedia("(min-width: 400px)").matches) {
      document.addEventListener('turbolinks:load', () => {
        console.log(url);
        if (document.querySelector('.projects')) {
          projectPlay();
        }
        if (document.querySelector('.product-banner')) {
          if (document.querySelector('.remoovemoi')) {
            slideleftb();
          } else {
            library2();
          }
        }
        if (document.querySelector('.modal')) {
          model();
        }
      });
      document.addEventListener('turbolinks:before-render', () => {
        if (event.data.newBody.querySelector('.product-banner')) {
          slideleft(url);
        }
        url = document.location.href;
      });

  /* the view port is at least 400 pixels wide */
  } else {
  document.addEventListener('turbolinks:load', () => {
    mobile();
  });
  }





