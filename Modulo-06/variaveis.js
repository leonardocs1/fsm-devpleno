let b = 20
b = 1.0
let name = 'Tulio'

let obj = {
  name: 10,
  obj: {
    a: 1
  }
}
let c = obj.obj.a
let key = 'obj'
let d = obj[key]['a']

let vetor = [1, 2, 3, 4]
console.log(vetor[1])

let funcao = function (func) {
  func('de dentro da função')
}
let funcaoCopia = funcao
funcaoCopia(console.log)
