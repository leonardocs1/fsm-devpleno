const falar = function (palavra) {
  console.log(palavra)
}
const somar = function (num1, num2) {
  return num1 + num2
}
const somar2 = (num1, num2) => num1 + num2
const mediaLouca = (soma, num) => {
  soma++
  num++
  return soma / num
}

const animal = (nome, grunido) => nome + ' ' + grunido()

console.log(animal('cachorro', () => 'latir'))
