const projectShow = (i) => {
 if(i < 3){
   i = i +1 ;
  //let discovered = document.querySelector(`#discover${x}`) ;
  let producted = document.querySelector(`#project${i}`) ;

  producted.classList.add('active');
  projectTourne(i - 1);
  //discovered.classList.add('animated','delay-5s','fadeInUp');
  //if (x%2 == 0){
   // document.querySelector(`#backgroundl${x}`).classList.add('kenburns-top');
  //}
  //else{
  //  document.querySelector(`#backgroundr${x}`).classList.add('kenburns-top');
  //}
 }
 else {
  document.querySelector(`#project0`).classList.add('active');
  projectTourne(3);
 }
}

const projectDisplay = (i) => {
  let discovered = document.querySelector(`#discover${i}`)

    if (i % 2 == 0){
      const anim = document.querySelector(`.projects > .animationr`)

      anim.addEventListener('animationend', () => {
        document.querySelector(`#project${i}`).classList.remove('animationr');
        document.querySelector(`#project${i}`).classList.remove('active');
        discovered.classList.remove('visi','animated','delay-5s','fadeInUp');
        textShow(i + 1);
      });
    }
    else{
      const animl = document.querySelector(`.projects > .animationl`)

      animl.addEventListener('animationend', () => {
      document.querySelector(`#project${i}`).classList.remove('animationl');
      document.querySelector(`#project${i}`).classList.remove('active');
      discovered.classList.add('visi','animated','delay-5s','fadeInUp');
      textShow(i + 1);
      });
      projectShow(i)
    }
}

const projectTourne = (i) => {
  const pro = document.querySelector(`#project${i}`);
  if (i % 2 == 0){
    pro.classList.add('animationr');
  }
  else{
    pro.classList.add('animationl');
  }

    projectDisplay(i);

}
const textShow = (i) => {
 if (i < 4){
  document.querySelector(`#discover${i}`).classList.add('visi','animated','delay-5s','fadeInUp');
 }
 else{
  document.querySelector(`#discover0`).classList.add('visi','animated','delay-5s','fadeInUp');
 }
}

const projectPlay = () => {
  let i = 0;
  document.querySelector(`#project${i}`).classList.add('active');
  textShow(0);
    //document.querySelector(`#backgroundr${i}`).classList.add('kenburns-top');
  setTimeout(() => {
    projectShow(i);
}, 6000);

}

export { projectPlay };
