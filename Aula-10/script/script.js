'use strict';
//Demonstrando escopo de variável que foge do laço.
function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log(i);
}
function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  i = 20;
  console.log(i);
}
console.log('Com var:');
withVar();
console.log('Com let');
withLet();
