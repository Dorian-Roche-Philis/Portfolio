require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap";
import { projectPlay } from '../components/project';

document.addEventListener('turbolinks:load', () => {

if (document.querySelector('.project')) {

    projectPlay();
  }
});
