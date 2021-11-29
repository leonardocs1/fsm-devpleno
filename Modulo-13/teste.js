const Sequelize = require('sequelize')
const sequelize = new Sequelize('sequelize-teste', 'root', '', {
  dialect: 'mysql',
  host: '127.0.0.1'
})

const Usuario = sequelize.define('Usuario', {
  usuario: Sequelize.STRING,
  senha: Sequelize.STRING
})
const testDB = async() => {
  await sequelize.sync()
  console.log('synced')
  await Usuario.create({ 
    usuario: 'Tulio Faria',
    senha: '123456'
  })
}
testDB()
