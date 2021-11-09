const sqlite3 = require('sqlite3').verbose()

const initDB = databaseFile => new Promise((resolve, reject) => {
  const db = new sqlite3.Database(databaseFile, (err) => {
    if (err) {
      reject(err)
    } else {
      resolve(db)
    }
  })
})

const run = (db, query, values) => new Promise((resolve, reject) => {
  db.all(query, values, (err, rows) => {
    if (err) {
      reject(err)
    } else {
      resolve(rows)
    }
  })
})

const listProducts = async () => {
  const db = await initDB('banco.sqlite3')
  const catId = 8
  const products = await run(db, `select * from products where id in (select product_id from categories_products where category_id = ? )`, [catId])
  console.log('Categories read', products)
}
listProducts().catch(err => {
  console.log(err)
})
