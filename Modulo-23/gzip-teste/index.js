const express = require('express');
const { get } = require('express/lib/response');
const app = express()
const compression = require('compression')

const largeObject = []
for (let i = 0; i < 100000; i++) {
  largeObject.push({
    name: 'Tulio Faria',
    address: 'address',
    anotherField: 'aaaaaaaaa'
  })
}
app.use(compression({ level: 9 }))
app.get('/', (req, res) => res.send(largeObject))

app.listen(3000, () => console.log('listening...'))
