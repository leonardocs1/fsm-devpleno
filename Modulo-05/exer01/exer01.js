// Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.
const vetor = [1, 2, 3, 4, 5]

const somar = (a, b) => a + b
const valoresSomados = vetor.reduce(somar)
console.log(valoresSomados)
