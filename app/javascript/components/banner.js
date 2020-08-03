import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Dorian Roche-Philis", "Creative Developer"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
