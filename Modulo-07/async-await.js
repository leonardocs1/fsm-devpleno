function tempo(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(ms), ms)
  })
}

const fs = require('fs')

function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, list) => {
      if (err) {
        reject(err)
      } else {
        resolve(list)
      }
    })
  })
}

async function arquivo() {
  const lista = await readdir('./')
  console.log(lista)
}

arquivo()
