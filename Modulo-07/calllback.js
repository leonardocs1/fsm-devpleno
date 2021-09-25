const fs = require('fs')

console.log('inicio')

// console.log(fs.readdirSync('./'))

fs.readdir('./', function (err, lista) {
  if (err) {
    console.log('err', err)
  } else {
    console.log(lista)
  }
})

console.log('fim')