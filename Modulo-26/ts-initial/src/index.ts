interface Point {
  x: number;
  y: number;
}

interface Point {
  z: number;
}

// const pontoA: Point = { x: 1, y: 0 }

interface Pessoa {
  nome: string,
  sexo: "m" | "f",
  [key: string]: string | number;
}

const tulio: Pessoa = {
  nome: 'Tulio',
  sexo: 'm',
  idade: '10',
  teste: 10
}

function ola(pessoa: Pessoa) {
  console.log('ola', pessoa.nome)
}
ola({ nome: 'teste', sexo: 'm', idade: 10 })