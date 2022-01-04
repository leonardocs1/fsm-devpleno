const db = require('../db')
const Product = require('../models/product')(db)

const remove = (req, res) => {
  res.send({
    sucess: true,
    data: 'id' + req.params.id
  })
}

const patch = (req, res) => {
  // alterar produtos - somente alguns campos
  console.log(req.body)
  res.send({
    sucess: true,
    data: req.body
  })
}

const put = (req, res) => {
  // alterar products
  console.log(req.body)
  res.send({
    sucess: true,
    data: req.body
  })
}

const create = async (req, res) => {
  const { product, price } = req.body
  await Product.create([product, price])
  console.log(req.body)
  res.send({
    sucess: true,
    data: req.body
  })
}

const getById = (req, res) => {
  res.send({
    name: 'Product 1'
  })
}

const getAll = async (req, res) => {
  const products = await Product.findAll()
  res.send({
    products
  })
}

module.exports = {
  remove, patch, put, create, getById, getAll
}