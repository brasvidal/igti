document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM completamente carregado e analisado');
  //refatorado com função anônima
  let changeColor = () => {
    let corred = document.querySelector('#corRed').value;
    let corgreen = document.querySelector('#corGreen').value;
    let corblue = document.querySelector('#corBlue').value;
    let rgb = 'rgb(' + corred + ',' + corgreen + ',' + corblue + ')';
    document.getElementById('resultColor').style.background = rgb;
    console.log(rgb);
  };
  //tentei refatorar os listeners, só funciona solto..
  document.getElementById('corRed').addEventListener('input', changeColor);
  document.getElementById('corGreen').addEventListener('input', changeColor);
  document.getElementById('corBlue').addEventListener('input', changeColor);
});
