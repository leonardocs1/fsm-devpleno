const Jimp = require('jimp')

const empresas = [
  { id: 1, nome: 'Empresa A', telefone: '1234' },
  { id: 2, nome: 'Empresa B', telefone: '5678' },
  { id: 3, nome: 'Empresa C', telefone: '7889' },
  { id: 4, nome: 'Empresa D', telefone: '8798' },
]

const genImage = async (text) => {
  const image = await new Jimp(200, 40)
  const font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK)
  image.print(font, 0, 0, text)
  return image
}
// genImage()

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('index', { empresas }))
app.get('/image/:indice', async (req, res) => {
  const image = await genImage(empresas[req.params.indice].telefone)
  image.getBuffer(Jimp.MIME_PNG, (err, data) => {
    res.header('Content-type', 'image/png')
    res.send(data)
  })
})

app.listen(3000, () => console.log('listening'))