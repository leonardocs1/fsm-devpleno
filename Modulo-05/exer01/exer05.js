// Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor (aqueles que ocorrem apenas 1 vez dentro do vetor) (Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) e veja como ele poderá te ajudar neste exercício)
const vetor = [1, 2, 2, 3, 4, 5, 5, 'leonardo', 'leonardo', 'devpleno']
const howManyTimes = (agg, val) => {
  if (!agg[val]) {
    agg[val] = {
      value: val,
      occur: 0
    }
  }
  agg[val].occur = agg[val].occur + 1
  return agg
}

const contagem = vetor.reduce(howManyTimes, {})
const keys = Object.keys(contagem)
const unique = keys.filter(key => contagem[key].occur === 1)
const uniqueValues = unique.map(val => contagem[val].value)
console.log(uniqueValues)
