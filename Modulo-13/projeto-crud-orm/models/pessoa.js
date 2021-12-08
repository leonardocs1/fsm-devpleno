const PessoaModel = (sequelize, DataTypes) => {
  const Pessoa = sequelize.define('Pessoa', {
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING,
    nascimento: DataTypes.DATE
  })
  Pessoa.associate = (models) => {
    Pessoa.hasOne(models.Usuario)
  }
  return Pessoa
}

module.exports = PessoaModel
