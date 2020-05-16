var slider = document.getElementsByClassName('Slider');
var txtred = document.getElementById('txtred');
var txtgreen = document.getElementById('txtgreen');
var txtblue = document.getElementById('txtblue');
if (slider. {
  txtred.value = document.getElementById('slider-red').value;
  txtgreen.value = document.getElementById('slider-green').value;
  txtblue.value = document.getElementById('slider-blue').value;
}
console.log(txtred.value);
