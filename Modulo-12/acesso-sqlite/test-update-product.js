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

const updateProducts = async () => {
  const db = await initDB('banco.sqlite3')
  await run(db, `update products set product=? where id=?`, ['prod atualizada', 8])
  console.log('Products updated!')
}
updateProducts().catch(err => {
  console.log(err)
})
