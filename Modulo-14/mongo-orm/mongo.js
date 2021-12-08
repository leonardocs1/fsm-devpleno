const mongoose = require('mongoose')
mongoose.Promise = global.Promise

mongoose
  .connect('mongodb://localhost/mongo-orm')
  .then(() => {
    const PessoaSchema = mongoose.Schema({
      nome: String,
      cargo: String
    })
    const Pessoa = mongoose.model('Pessoa', PessoaSchema)
    const tulio = new Pessoa({nome: 'Tulio Faria', cargo: 'CTO'})
    tulio.save(() => console.log('salvo'))
  })