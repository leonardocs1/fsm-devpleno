/*
2) Qual o resultado?

var a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a
  }

  a = 5

  return otherFunction;
}

var firstResult = someFunction(9)
var result = firstResult(2)
**/

// R: 5
// 'var a' é uma variavél global e na mesma é atribuido o valor '5' quando 'someFunction()' é invocada.