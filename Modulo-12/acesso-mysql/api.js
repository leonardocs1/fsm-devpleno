const db = require('./db')
const categories = require('./categories')(db)

const test = async () => {
  // await categories.create(['New category from api'])
  // await categories.remove(4)
  // await categories.update(1, ['Update from API'])
  const cats = await categories.findAll()
  console.log(cats)
}
test()