/*
Uma função é chamada da seguinte forma:

calculadora(10, '+', 20)

crie o corpo da função de forma que ela realize as 4 operações aritméticas
* */

const somar = (a, b) => a + b
const subtrair = (a, b) => a - b
const multiplicar = (a, b) => a * b
const dividir = (a, b) => a / b

const calculadora = (a, op, b) => {
  const ops = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }
  return ops[op](a, b)
}

console.log('Soma: ', calculadora(10, '+', 20))
console.log('Subtração: ', calculadora(10, '-', 20))
console.log('Multiplicação: ', calculadora(10, '*', 20))
console.log('Divisão: ', calculadora(10, '/', 20))
