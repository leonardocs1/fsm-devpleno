// Dado um vetor com números, retorne somente os números pares;
const vetor = [1, 2, 3, 4, 5, 6]

const par = item => item % 2 === 0
const somentePares = vetor.filter(par)
console.log(somentePares)
