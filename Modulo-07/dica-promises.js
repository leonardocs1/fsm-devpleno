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
const out = (contents) => {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(contents)
      resolve()
    }, 2000)

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
  .then(out)
  .then(() => console.log('final'))
  // .then(writeFile.bind(null, 'ts2,js'))
