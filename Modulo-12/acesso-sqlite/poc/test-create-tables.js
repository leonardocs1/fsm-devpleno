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
  db.run(query, err => {
    if (err) {
      reject(err)
    } else {
      resolve()
    }
  })
})

const createTables = async () => {
  const db = await initDB('banco.sqlite3')
  await run(db, `
      CREATE TABLE categories (
        id INTEGER PRIMARY KEY NOT NULL,
        category TEXT
      );
    `)
  await run(db, `
  CREATE TABLE products (
    id INTEGER PRIMARY KEY NOT NULL,
    product TEXT,
    price REAL
  );
  `)
  await run(db, `
  CREATE TABLE images (
    id INTEGER PRIMARY KEY NOT NULL,
    description TEXT,
    url TEXT,
    product_id INTEGER REFERENCES products(id)
  );
  `)
  await run(db, `
  CREATE TABLE categories_products (
    product_id INTEGER REFERENCES products(id),
    category_id INTEGER REFERENCES categories(id)
  );
  `)
  console.log('table created!')
}
createTables().catch(err => {
  console.log(err)
})