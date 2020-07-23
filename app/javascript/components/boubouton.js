const clickbuton = (button,text) => {

    button.addEventListener('click', () =>{
    let action = document.querySelector('#frame');
    action.insertAdjacentHTML("afterbegin", `${text}`);
    endanim(button);
  });
}

const endanim = (x) => {
  if (x == document.querySelector('.btn-ffa')) {

      document.querySelector('.anim-trans').addEventListener('animationend', () => {
      document.querySelector('.left').classList.add('animated','delay-5','slideOutRight');
      Turbolinks.visit('projects/1');
      });
  } else if (x == document.querySelector('.btn-cam')) {

          document.querySelector('.anim-trans-rev').addEventListener('animationend', () => {
        document.querySelector('.left').classList.add('animated','delay-5','slideOutRight');
        Turbolinks.visit('projects/2');
      });

  } else if (x == document.querySelector('.btn-mon')) {

          document.querySelector('.anim-trans').addEventListener('animationend', () => {
        document.querySelector('.left').classList.add('animated','delay-5','slideOutRight');
        Turbolinks.visit('projects/3');
      });
  } else if (x == document.querySelector('.btn-maf')) {

          document.querySelector('.anim-trans-rev').addEventListener('animationend', () => {
        document.querySelector('.left').classList.add('animated','delay-5','slideOutRight');
        Turbolinks.visit('projects/4');
      });
    }

}
const library = () => {
  let maf = document.querySelector('.btn-maf');
  let ffa = document.querySelector('.btn-ffa');
  let mon = document.querySelector('.btn-mon');
  let cam = document.querySelector('.btn-cam');
  let textffa = `<div class="project-banner left  anim-trans background-green h-100 w-100">
  <div class="discover visi" id="discover1">
          <h2>FranceFineArt</h2>
          <p>Revue culturelle des Arts</p>
          <a class="btn btn-flat over" >Discover</a>
        </div>
</div>`;
let textmaf = `<div class="project-banner left  anim-trans-rev background-pink h-100 w-100">
  <div class="discover-right visi" id="discover4">
          <h2>Modern Art Family</h2>
          <p>Agence Artistique</p>
          <a class="btn btn-flat over" >Discover</a>
        </div>
</div>`;
let textcam = `<div class="project-banner left  anim-trans-rev background-blue h-100 w-100">
  <div class="discover-right visi" id="discover2">
          <h2>Camea</h2>
          <p>Collaboration entre filmakers</p>
          <a class="btn btn-flat over" >Discover</a>
        </div>
</div>`;
let textmon = `<div class="project-banner left  anim-trans background-black h-100 w-100">
  <div class="discover visi" id="discover3">
          <h2>Monurent</h2>
          <p>Site de location de Monuments!</p>
          <a class="btn btn-flat over" >Discover</a>
        </div>
</div>`;

  clickbuton(maf, textmaf);
  clickbuton(ffa, textffa);
  clickbuton(mon, textmon);
  clickbuton(cam, textcam);



}
export { library };
