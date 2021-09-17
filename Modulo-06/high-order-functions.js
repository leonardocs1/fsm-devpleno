// HOF

const valores = [1, 2, 3, 4]
const dobro = valor => valor * 2
const pares = valor => valor % 2 === 0
const soma = (num1, num2) => num1 + num2

const result = valores
  .filter(pares)
  .map(dobro)
  .reduce(soma, 0)

console.log(result)
