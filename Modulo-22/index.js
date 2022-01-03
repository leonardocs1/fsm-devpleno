const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/index')

app.use(bodyParser.json())

app.use(routes)

app.listen(3000, (err) => {
  if (err) {
    console.log('Not possible to listen on port 3000')
  } else {
    console.log('Server runing on port 3000')
  }
})