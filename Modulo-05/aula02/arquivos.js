const { readFile, writeFile } = require('./fs-promise')

// fs.readFile('temporizador.js', (err, data) => {
//   fs.writeFile('temporizador-copy.js', data, (err) => {
//     console.log('Arquivo copiado')
//   })
// })

// promises + async/await

// readFile('temporizador.js')
//   .then(data => writeFile('copia-promise.js', data))
//   .then(() => console.log('arquivo copiado'))
//   .catch(err => console.log(err))

// async/wait

const copyFile = async () => {
  console.log('ola async/await')
  try {
    const data = await readFile('temporizador.js')
    await writeFile('copy-async-await.js', data)
    console.log('Arquivo lido e escrito')
  } catch (err) {
    console.log('erro', err)
  }
}
copyFile().then(() => console.log('fim do async/await'))
