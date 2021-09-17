const express = require('express')
const app = express()
const path = require('path')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send({ name: 'tulio' })
})
app.get('/users', (req, res) => {
  res.send([{ name: 'tulio' }])
})
app.get('/page', (req, res) => {
  res.render('page', { name: 'Tulio' })
})

app.listen(3000, err => {
  console.log(err)
})