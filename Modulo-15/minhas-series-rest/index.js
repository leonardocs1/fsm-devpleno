const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongo = process.env.MONGO || 'mongodb://localhost/minhas-series-rest'

// bodyParser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const series = require('./routes/series')

app.use('/series', series)

mongoose
  .connect(mongo, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log('listening on port: ' + port))
  })
  .catch(err => console.log(err))
