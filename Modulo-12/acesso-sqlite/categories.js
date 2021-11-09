const db = require('./db')

const create = async (data) => {
  const dbConn = await db.init('./banco.sqlite3')
  await db.queryWithParams(dbConn, `insert into categories (id, category) values (?, ?)`, data)
}

const remove = async (id) => {
  const dbConn = await db.init('./banco.sqlite3')
  await db.queryWithParams(dbConn, `delete from categories where id = ?`, [id])
}

const update = async (id, data) => {
  const dbConn = await db.init('banco.sqlite3')
  await db.queryWithParams(dbConn, `update categories set category=? where id=?`, [...data, id])
}

const findAll = async () => {
  const dbConn = await db.init('./banco.sqlite3')
  return await db.query(dbConn, `select * from categories`)
}

const findAllPaginated = async ({ pageSize = 1, currentPage = 0 }) => {
  const dbConn = await db.init('./banco.sqlite3')
  const records = await db.query(dbConn, `select * from categories limit ${(currentPage * pageSize)}, ${pageSize + 1}`)
  if (records.length > pageSize) {
    records.pop()
  }
  return {
    data: records,
    hasNext: records.length > pageSize
  }
}

module.exports = {
  findAll,
  findAllPaginated,
  remove,
  create,
  update
}