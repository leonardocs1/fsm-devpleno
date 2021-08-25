const num = 10.10
const str = `Meu numero é: ${num + 1}`
console.log(str)

const obj = {
  name: 'Tulio Faria',
  cidade: {
    nome: 'Pouso Alegre',
    uf: 'MG'
  }
}

const key = 'name'
console.log(obj[key])

const arr = [1, 2, 3]
console.log(arr[0])

// functions: first-class citizens
const toInt = parseInt
console.log(toInt('10') + 1)