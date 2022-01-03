const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.delete('/products/:id', (req, res) => {
  res.send({
    sucess: true,
    data: 'id' + req.params.id
  })
})

app.patch('/products/:id', (req, res) => {
  // alterar produtos - somente alguns campos
  console.log(req.body)
  res.send({
    sucess: true,
    data: req.body
  })
})

app.put('/products/:id', (req, res) => {
  // alterar products
  console.log(req.body)
  res.send({
    sucess: true,
    data: req.body
  })
})

app.get('/products/:id', (req, res) => {
  res.send({
    name: 'Product 1'
  })
})

app.get('/products', (req, res) => {
  res.send({
    products: ['all products']
  })
})

app.post('/products', (req, res) => {
  console.log(req.body)
  res.send({
    sucess: true,
    data: req.body
  })
})
app.listen(3000, (err) => {
  if (err) {
    console.log('Not possible to listen on port 3000')
  } else {
    console.log('Server runing on port 3000')
  }
})