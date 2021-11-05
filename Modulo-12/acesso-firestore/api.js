const categories = require('./categories')

const testes = async () => {
  // categories.create({
  //   category: 'Nova categoria organizada'
  // })
  await categories.update('L92rxJEzF9zR2WPeiRRe', { category: 'Categoria atualizada' })
  // await categories.remove('rlhkbNqEdES5lNsBffVK')
  // await categories.remove('w4stDXjN6GWOwUXXXUs9')
  // const cats = await categories.findAll()
  // console.log(cats)
  const cats = await categories.findAllPaginated({ pageSize: 1, startAfter: 'Categoria atualizada' })
  console.log(cats)
}

testes()
