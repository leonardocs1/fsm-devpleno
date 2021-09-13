/*
Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:

const soma = (num1, num2) => num1+num2

const calculadoraFn = (....) => ….

calculadoraFn(10, soma, 20)
* */

const somar = (a, b) => a + b
const subtrair = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b

const calculadoraFn = (a, fn, b) => {
  return fn(a, b)
}

console.log('Soma: ', calculadoraFn(10, somar, 20))
console.log('Subtração: ', calculadoraFn(10, subtrair, 20))
console.log('Multiplicação: ', calculadoraFn(10, multiplicar, 20))
console.log('Divisão: ', calculadoraFn(10, dividir, 20))
