const clickbuton = (text) => {


    let action = document.querySelector('#frame');
    action.insertAdjacentHTML("afterbegin", `${text}`);
    endanim();
}

const endanim = () => {
  const ffa = /.1$/;
     const cam = /.2$/;
      const mon = /.3$/;
       const maf = /.4$/;
  if (ffa.test(document.location.href)) {

      document.querySelector('.right').classList.add('anim-trans-rev');

  } else if (cam.test(document.location.href)) {

          document.querySelector('.right').classList.add('anim-trans-rev');

  } else if (mon.test(document.location.href)) {

          document.querySelector('.right').classList.add('anim-trans-rev');
  } else if (maf.test(document.location.href)) {
          document.querySelector('.right').classList.add('anim-trans-rev');

    }

}
const library2 = () => {

const ffa = /.1$/;
     const cam = /.2$/;
      const mon = /.3$/;
       const maf = /.4$/;
  let textffa = `<article class="project-banner" id="ModernArtFamily">
  <div class="project-panel right background-green h-100 w-50">
    <div class="discover visi animated fadeInUp" id="discover0" >
      <h2>FranceFineArt</h2>
      <p>Revue culturelle des Arts</p>
      <a class="btn btn-flat over btn-ffa" href="projects/1" >Discover</a>
    </div>
  </div>
  <div class="project-panel project-content background0 kenburns-top h-100 w-50"></div>
</article>`;
let textmaf = `<article class="project-banner" id="Monurent">
  <div class="project-panel background3 kenburns-top h-100 w-50"></div>
  <div class="project-panel right project-content background-pink h-100 w-50">
    <div class="discover" id="discover3">
      <h2>Modern Art Family</h2>
      <p>Agence Artistique</p>
      <a class="btn btn-flat over btn-maf" href="projects/4" >Discover</a>
    </div>
  </div>
</article>
`;
let textcam = `<article class="project-banner" id="FranceFineArt">
  <div class="project-panel background1 kenburns-top h-100 w-50"></div>
  <div class="project-panel right project-content background-blue h-100 w-50">
    <div class="discover" id="discover1">
      <h2>Camea</h2>
      <p>Collaboration entre filmakers</p>
      <a class="btn btn-flat over btn-cam" href="projects/2" >Discover</a>
    </div>
  </div>
</article>
`;
let textmon = `<article class="project-banner" id="Camea">
  <div class="project-panel right background-black h-100 w-50">
    <div class="discover" id="discover2">
      <h2>Monurent</h2>
      <p>Site de location de Monuments!</p>
      <a class="btn btn-flat over btn-mon" href="projects/3">Discover</a>
    </div>
  </div>
  <div class="project-panel project-content background2 kenburns-top h-100 w-50"></div>
</article>
`;
if (ffa.test(document.location.href)) {

      clickbuton(textffa);

  } else if (cam.test(document.location.href)) {

clickbuton(textcam);
  } else if (mon.test(document.location.href)) {

  clickbuton(textmon);
  } else if (maf.test(document.location.href)) {
  clickbuton(textmaf);

    }





}
export { library2 };
