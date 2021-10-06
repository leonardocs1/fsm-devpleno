const fs = require('fs')

const readFile = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, contents) => {
      if (err) {
        reject(err)
      } else {
        resolve(contents.toString())
      }
    })
  })
}
const writeFile = (file, contents) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, contents, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

readFile('dica-promises.js')
  .then((contents) => writeFile('tst.js', contents))