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

const run = (db, query) => new Promise((resolve, reject) => {
  db.all(query, (err, rows) => {
    if (err) {
      reject(err)
    } else {
      resolve(rows)
    }
  })
})

const listCategories = async () => {
  const db = await initDB('banco.sqlite3')
  const categories = await run(db, `select * from categories`)
  console.log('Ctegories read', categories)
}
listCategories().catch(err => {
  console.log(err)
})
