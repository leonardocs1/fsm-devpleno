const crypto = require('crypto')
const hash = crypto.createHash('md5').update('abc123abc').digest('hex')
console.log('abc123abc ', hash)
