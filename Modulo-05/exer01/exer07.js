// Dado um vetor com números, retorne somente os números ímpares;
const vetor = [1, 2, 3, 4, 5, 6]

const impar = item => item % 2 !== 0
const somenteImpares = vetor.filter(impar)
console.log(somenteImpares)
