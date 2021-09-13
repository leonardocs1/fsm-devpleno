// Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.
const vetor = [1, 2, 3, 4, 5]

const somar = (a, b) => a + b
const ehImpar = item => item % 2 !== 0
const imparesSomados = vetor
  .filter(ehImpar)
  .reduce(somar)
console.log('Soma dos impares ', imparesSomados)
