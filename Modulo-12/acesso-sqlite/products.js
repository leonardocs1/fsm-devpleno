const db = require('./db')

const init = database => {

  const create = async (data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `insert into products (id, product, price) values (?, ?, ?)`, data)
  }

  const remove = async (id) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `delete from products where id = ?`, [id])
    await db.queryWithParams(dbConn, `delete from images where product_id = ?`, [id])
  }

  const update = async (id, data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `update products set product=?, price=? where id=?`, [...data, id])
  }

  const addImage = async (productId, data) => {
    const dbConn = await db.init(database)
    await db.queryWithParams(dbConn, `insert into images (id, url, description, product_id) values (?, ?, ?, ?)`, [...data, productId])
  }

  const findAll = async () => {
    const dbConn = await db.init(database)
    // return await db.query(dbConn, `select * from products left join images on products.id = images.product_id group by images.product_id`)
    const products = await db.query(dbConn, `select * from products`)
    const condition = products.map(produto => produto.id).join(',')
    const images = await db.query(dbConn, 'select * from images where product_id in (' + condition + ') group by product_id')
    const mapImages = images.reduce((antigo, atual) => {
      return {
        ...antigo,
        [atual.product_id]: atual
      }
    }, {})
    return products.map(product => {
      return {
        ...product,
        image: mapImages[product.id]
      }
    })
  }

  const findAllPaginated = async ({ pageSize = 1, currentPage = 0 }) => {
    const dbConn = await db.init(database)
    const records = await db.query(dbConn, `select * from products limit ${(currentPage * pageSize)}, ${pageSize + 1}`)
    const hasNext = records.length > pageSize
    if (records.length > pageSize) {
      records.pop()
    }
    const condition = records.map(produto => produto.id).join(',')
    const images = await db.query(dbConn, 'select * from images where product_id in (' + condition + ') group by product_id')
    const mapImages = images.reduce((antigo, atual) => {
      return {
        ...antigo,
        [atual.product_id]: atual
      }
    }, {})
    return {
      data: records.map(product => {
        return {
          ...product,
          image: mapImages[product.id]
        }
      }),
      hasNext
    }
  }
  return {
    findAll,
    findAllPaginated,
    remove,
    create,
    update,
    addImage
  }
}

module.exports = init