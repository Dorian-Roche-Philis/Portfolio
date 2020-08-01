const slideleft = (x) => {
console.log(x);
 {

        let truecontent = document.querySelector('.replace');
        hide(truecontent);
        textshow(x, truecontent);
        document.documentElement.scrollTop = document.documentElement.scrollHeight;
        document.querySelector('.replace').style.display = 'block';
        document.querySelector('.replace').scrollIntoView({behavior : 'smooth'});
        let timer = setTimeout(() => {
        document.querySelector('.remoovemoi').remove();
        }, 800);


      }


}
const textshow = (x, y) => {
  let textmaf = `<div class = "remoovemoi">
  <div class = "product-banner" id="title">
        <h1>Modern Art Family</h1>
        <p>Agence Artistique</p>
      </div>
<div id="slide13" class="product-banner">
    </div>
    <div id="slide14" class="product-banner">

      <div class="titleright" style="color:black; text-align: center">
        <h2>Agence artistaique de pur street artistes</h2>
        <a class="btn btn-flat-black over" href="https://modernartfamily.com/" target="blank" rel="noreferrer">Website</a>
      </div>
    </div>
    <div id="slide15" class="product-banner"></div>
    <div id="slide16" class="product-banner">
      <div class="title background-green">
        <div class="content">
          <h1>FranceFineArt</h1>
          <p>Revue culturelle sur l'actualité des Arts</p>
          <a class="btn btn-flat over" href="1">Discover</a>
        </div>
      </div>
    </div>
    </div>`;
    let textmon = `<div class = "remoovemoi">
    <div class = "product-banner" id="title">
        <h1>Monuremt</h1>
        <p>des monuments terribles</p>
      </div>
      <div id="slide9" class="product-banner">
    </div>
    <div id="slide10" class="product-banner">
      <div class="titleright" style="color:black; text-align: center">
        <h2>Un projet de clone Air'b'n'b un peu funky</h2>
        <a class="btn btn-flat-black over" href="https://monurent.herokuapp.com/" target="blank" rel="noreferrer">Website</a>
      </div>
    </div>
    <div id="slide11" class="product-banner"></div>
    <div id="slide12" class="product-banner">
      <div class="titleright background-pink">
        <div class="content">
          <h1>Modern art family</h1>
          <p>Agence artistique spécialisée dans le street art</p>
          <a class="btn btn-flat over" href="4">Discover</a>
        </div>
      </div>
    </div>
    </div>
`;
let textffa = `<div class = "remoovemoi">
<div class = "product-banner" id="title">
        <h1>FranceFineArt</h1>
        <p>actualité des arts</p>
      </div>
      <div id="slide1" class="product-banner">
      </div>
      <div id="slide2" class="product-banner">
        <div class="titleright">
          <div class="content" style="color:black;">
            <h4>Une encyclopédie des expositions avec un contenu exclusif</h4>
            <a class="btn btn-flat-black over" href="https://francefineart.com/" target="blank" rel="noreferrer">Website</a>
          </div>
        </div>
      </div>
      <div id="slide3" class="product-banner"></div>
      <div id="slide4" class="product-banner">
        <div class="titleright background-blue">
          <div class="content">
            <h1>Camea</h1>
            <p>Collaboration entre filmakers</p>
            <a class="btn btn-flat over" href="2">Discover</a>
          </div>
        </div>
      </div>
      </div>
`;
let textcam = `<div class = "remoovemoi">
                <div class = "product-banner" id="title">
                  <h1>Camea</h1>
                  <p>des superbes bleus</p>
                </div>
                <div id="slide5" class="product-banner">
                </div>
                <div id="slide6" class="product-banner">
                </div>
                <div id="slide7" class="product-banner">
                </div>
                <div id="slide8" class="product-banner">
                  <div class="title background-black">
                    <div class="content">
                      <h1>Monurent</h1>
                      <p>Locations de Monuments</p>
                      <a class="btn btn-flat over" href="3">Discover</a>
                    </div>
                  </div>
                </div>
              </div>`;
    const regffa = /.1$/;
     const regcam = /.2$/;
      const regmon = /.3$/;
       const regmaf = /.4$/;
  if (regffa.test(x)) {
  y.insertAdjacentHTML("beforebegin", `${textffa}`);
} else if (regcam.test(x)) {
  y.insertAdjacentHTML("beforebegin", `${textcam}`);
} else if (regmon.test(x)) {
  y.insertAdjacentHTML("beforebegin", `${textmon}`);
} else if (regmaf.test(x)) {
  y.insertAdjacentHTML("beforebegin", `${textmaf}`);
}

}

const hide = (elem) => {
  elem.style.display = 'none';
}
const show = (elem) => {
  elem.style.display = 'block';
}
export { slideleft };
