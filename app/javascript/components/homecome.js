const homecome = () => {
  document.body.style.overflowY = 'hidden';
    document.querySelector('.left').classList.add('anim-trans-reverse');
    document.querySelector('.anim-trans-reverse').addEventListener('animationend', () => {
    document.body.style.overflowY = 'visible';

    });

}
export { homecome };
