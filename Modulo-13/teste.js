const Sequelize = require('sequelize')
const sequelize = new Sequelize('sequelize-teste', 'root', '', {
  dialect: 'mysql',
  host: '127.0.0.1'
})

const Pessoa = sequelize.define('Pessoa', {
  nome: Sequelize.STRING,
  nascimento: Sequelize.DATE
})

const Projeto = sequelize.define('Projeto', {
  nome: Sequelize.STRING
})

const Usuario = sequelize.define('Usuario', {
  usuario: Sequelize.STRING,
  senha: Sequelize.STRING
})

Pessoa.hasOne(Usuario)
Usuario.belongsTo(Pessoa)
Pessoa.hasMany(Projeto)
Projeto.belongsTo(Pessoa)

const testDB = async() => {
  await sequelize.sync({force: true})
  const pessoa = await Pessoa.create({
    nome: 'Tulio Faria',
    nascimento: '1985-08-04'
  })
  const user = await Usuario.create({
    usuario: 'tuliofaria',
    senha: '123456'
  })
  user.setPessoa(pessoa)
  // await Usuario.create({ 
  //   usuario: 'Tulio Faria',
  //   senha: '123456'
  // })
}
testDB()
