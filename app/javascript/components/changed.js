const projectChange = () => {
  let buttons = document.querySelectorAll('btn');
  console.log(buttons);
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let slider = document.querySelector('.active > .slidy');
      slider.classList.add('changes');
    });

  });
}

export { projectChange };
