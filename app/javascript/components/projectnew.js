const projectPlay = () => {
    //document.querySelector(`#backgroundr${i}`).classList.add('kenburns-top');
  let liste = document.querySelector('.active > .project-panel > .discover > h2');
  let textbuttonne = liste.innerText.split(" ").join("");
  setTimeout(() => {
      projectTourne(textbuttonne);
    }, 8000);

}
const projectTourne = (textbutton) => {
 document.querySelector(`#${textbutton}`).classList.add('active');
 document.querySelector(`#${textbutton} > .project-panel > .discover`).classList.add('visi','animated','delay-5','fadeInUp');
 if (textbutton == "ModernArtFamily" || textbutton == "Camea"){
   document.querySelector(`#${textbutton}`).classList.add('animationr');
   projectDisplayr(textbutton);
  } else if (textbutton == "FranceFineArt" || textbutton == "Monurent") {
    document.querySelector(`#${textbutton}`).classList.add('animationl');
    projectDisplayl(textbutton);
  }
}
const projectDisplayr = (i) => {
      const anim = document.querySelector(`.projects > .animationr`);

      anim.addEventListener('animationend', () => {
        document.querySelector(`#${i}`).classList.remove('animationr');
        if ( i == "ModernArtFamily") {
          document.querySelector(`#Monurent > .project-panel > .discover`).classList.remove('visi','animated','delay-5','fadeInUp');
          document.querySelector(`#Monurent`).classList.remove('active');
        } else if ( i == "Camea") {
          document.querySelector(`#FranceFineArt > .project-panel > .discover`).classList.remove('visi','animated','delay-5','fadeInUp');
          document.querySelector(`#FranceFineArt`).classList.remove('active');

          }
          projectPlay();
      });
    }
    const projectDisplayl = (i) => {
      const animl = document.querySelector(`.projects > .animationl`);

      animl.addEventListener('animationend', () => {
        document.querySelector(`#${i}`).classList.remove('animationl');
        if ( i == "FranceFineArt") {
          document.querySelector(`#ModernArtFamily > .project-panel >.discover`).classList.remove('visi','animated','delay-5','fadeInUp');
          document.querySelector(`#ModernArtFamily`).classList.remove('active');
        } else if ( i == "Monurent") {
          document.querySelector(`#Camea > .project-panel >.discover`).classList.remove('visi','animated','delay-5','fadeInUp');
          document.querySelector(`#Camea`).classList.remove('active');

          }
          projectPlay();
      });

    }


export { projectPlay };
