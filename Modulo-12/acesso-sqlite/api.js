const categories = require('./categories')('./banco.sqlite3')

const test = async () => {
  // categories.create([1, 'cat 1'])
  // categories.create([2, 'cat 2'])
  // categories.create([3, 'cat 3'])
  // categories.create([4, 'cat 4'])
  // categories.create([8, 'nova cat'])
  // await categories.remove(2)
  // await categories.update(8, ['Categoria atualizada'])
  console.log(await categories.findAll())
  console.log('cp: 0', await categories.findAllPaginated({ pageSize: 2, currentPage: 0 }))
  console.log('cp: 1', await categories.findAllPaginated({ pageSize: 2, currentPage: 1 }))
  console.log('cp: 2', await categories.findAllPaginated({ pageSize: 2, currentPage: 2 }))
}
test()
