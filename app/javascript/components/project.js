const projectShow = (i) => {
 if(i < 3){
   i = i +1 ;
  //let discovered = document.querySelector(`#discover${x}`) ;
  let producted = document.querySelector(`#project${i}`) ;

  producted.classList.add('active');
  projectTourne(i - 1);
  //if (x%2 == 0){
   // document.querySelector(`#backgroundl${x}`).classList.add('kenburns-top');
  //}
  //else{
  //  document.querySelector(`#backgroundr${x}`).classList.add('kenburns-top');
  //}
 }
 else {
  projectTourne(3);
  document.querySelector(`#project0`).classList.add('active');
 }
}

const projectDisplay = (i) => {

    if (i % 2 == 0){
      const anim = document.querySelector(`.projects > .animationr`)

      anim.addEventListener('animationend', () => {
        document.querySelector(`#project${i}`).classList.remove('animationr');
        document.querySelector(`#project${i}`).classList.remove('active');
      });
    }
    else{
      const animl = document.querySelector(`.projects > .animationl`)

      animl.addEventListener('animationend', () => {
      document.querySelector(`#project${i}`).classList.remove('animationl');
      document.querySelector(`#project${i}`).classList.remove('active');
      });
    }
  if (i < 3) {
    setTimeout(() => {
    projectShow(i + 1);
    }, 6000);
  }
  else{
    setTimeout(() => {
    projectShow(0);
    }, 6000);
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

const projectPlay = () => {
  let i = 0;
  document.querySelector(`#project${i}`).classList.add('active');
    //document.querySelector(`#backgroundr${i}`).classList.add('kenburns-top');
  setTimeout(() => {
    projectShow(i);
}, 6000);

}

export { projectPlay };
