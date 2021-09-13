// c-like

const valor = 10
if (valor === 10) {

}

let valor2 = 20
valor2 = 30
console.log(valor, valor2)
const objeto = {
  chave: 'valor1',
  chave2: 'valor2'
}
console.log(objeto)

const str = 'Tulio Faria - DevPleno'

// functions are first class citizens
const soma = function (a, b) {
  return a + b
}
const calculadora = function (op, a, b) {
  return op(a, b)
}
console.log(calculadora(soma, 1, 2))

const vetor = [1, 2, 3, 4, 5]
const dobrado = vetor.map(function (item) {
  return { original: item, dobrado: item * 2 }
})
console.log(vetor, dobrado)

// arrow function
const dobrar = item => item * 2
const somentePares = item => item % 2 === 0

const paresDobrado = vetor.filter(somentePares).map(dobrar)
console.log('Pares dobrado: ', paresDobrado)

const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrado.reduce(somar, 0)
console.log('Somar com reduce: ', somatorio)
