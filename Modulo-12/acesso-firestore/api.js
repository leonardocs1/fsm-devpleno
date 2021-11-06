const categories = require('./categories')
const products = require('./products')

const testes = async () => {
  // categories.create({
  //   category: 'Nova categoria organizada'
  // })
  // await categories.update('L92rxJEzF9zR2WPeiRRe', { category: 'Categoria atualizada' })
  // await categories.remove('rlhkbNqEdES5lNsBffVK')
  // await categories.remove('w4stDXjN6GWOwUXXXUs9')
  // const cats = 
  // await products.create({
  //   product: 'New product',
  //   price: 997,
  //   categories: ['SuwcQivlbDCfDJcxv2pe']
  // })
  // await products.update('htmWfWF47NG0ZJt3Uq6A', {
  //   product: 'New Name',
  //   categories: ['fDF1EMKRRf7wL8Pltdp3']
  // })
  // await products.remove('yYANppgLkQuzZU7p9z8q')
  // const cats = await categories.findAllPaginated({ pageSize: 1, startAfter: 'Categoria atualizada' })
  // console.log(cats)

  // await products.addImage('htmWfWF47NG0ZJt3Uq6A', { description: 'new image', url: 'url' })

  // const prods = await products.findAll()
  const prods2 = await products.findAllPaginated({ pageSize: 1, startAfter: '' })
  console.log(prods2.data[0].imgs)
}

testes()
