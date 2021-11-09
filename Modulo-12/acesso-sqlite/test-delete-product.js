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
  db.run(query, values, err => {
    if (err) {
      reject(err)
    } else {
      resolve()
    }
  })
})

const deleteProducts = async () => {
  const db = await initDB('banco.sqlite3')
  await run(db, `delete from categories_products where product_id=?`, [8])
  await run(db, `delete from products where id=?`, [8])
  console.log('Products deleted!')
}
deleteProducts().catch(err => {
  console.log(err)
})
