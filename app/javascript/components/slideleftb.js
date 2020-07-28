const slideleftb = () => {

  document.body.scrollTop = document.body.scrollHeight;
  document.querySelector('.replace').style.display = 'block';
document.querySelector('.replace').scrollIntoView({behavior : 'smooth'});
        let timer = setTimeout(() => {
      document.querySelector('.remoovemoi').remove();
    }, 800);
      }
      export { slideleftb };
