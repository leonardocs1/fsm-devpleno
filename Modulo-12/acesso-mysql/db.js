const mysql = require('mysql2/promise')

// without connection pool
// module.exports = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'cat-products'
// })

// with connection pool
module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'cat-products',
  // waitForConnection: true,
  connectionLimit: 20,
  queueLimit: 0
})
