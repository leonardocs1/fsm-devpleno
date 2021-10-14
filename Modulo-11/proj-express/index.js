const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const indexRouter = require('./routes/index')
const clientRouter = require('./routes/clients')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// app.use((req, res, next) => {
//   console.log('passou por aqui')
//   next()
// })
app.use('/', indexRouter)
app.use('/clients', clientRouter)

app.listen(port, () => console.log('Listening on port: ' + port))
