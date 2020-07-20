const projectChange = () => {
  let buttons = document.querySelectorAll('btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let slider = document.querySelector('.active > .slidy');
      slider.classList.add('changes');
    });

  });
}

export { projectChange };
