require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { projectPlay } from '../components/projectnew';
import { slideleft } from '../components/slide';

import { mobile } from '../components/mobilephone';
import { slideleftb } from '../components/slideleftb';
import { homecome } from '../components/homecome';
import { loadDynamicBannerText } from '../components/banner';




  //let url = null;








      document.addEventListener('turbolinks:load', () => {
        if (window.matchMedia("(min-width: 400px)").matches) {
       // console.log(url);
        if (document.querySelector('.projects')) {
           projectPlay();
        }
        //if (document.querySelector('.product-banner')) {
//const reg = /.projects./
          //if  (reg.test(url) ) {
            //document.documentElement.scrollTop = document.documentElement.scrollHeight;
            //slideleft(url);
          //}
       // }

        //url = document.location.href;



  /* the view port is at least 400 pixels wide */
  } else {

    mobile();
  }if (document.querySelector('.about')) {
          loadDynamicBannerText();
        }

  });






