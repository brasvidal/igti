document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM completamente carregado e analisado');
  function changeColor() {
    let corred = document.querySelector('#corRed').value;
    let corgreen = document.querySelector('#corGreen').value;
    let corblue = document.querySelector('#corBlue').value;
    let rgb = 'rgb(' + corred + ',' + corgreen + ',' + corblue + ')';
    document.getElementById('resultColor').style.background = rgb;
    console.log(rgb);
  }

  document.getElementById('corRed').addEventListener('input', changeColor);
  document.getElementById('corGreen').addEventListener('input', changeColor);
  document.getElementById('corBlue').addEventListener('input', changeColor);
});
