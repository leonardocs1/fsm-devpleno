// Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.
const vetor = [1, 2, 3, 4, 5]

const somar = (a, b) => a + b
const ehPar = item => item % 2 === 0
const paresSomados = vetor
  .filter(ehPar)
  .reduce(somar)
console.log('Soma dos pares ', paresSomados)
