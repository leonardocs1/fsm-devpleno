const fs = require('fs')

const readFile = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, content) => {
      if (!err) {
        resolve(content.toString())
      } else {
        reject(err)
      }
    })
  })
}

const run = async () => {
  const content = await readFile('05-hof.js')
  return content
}

run().then(value => {
  console.log(value)
})