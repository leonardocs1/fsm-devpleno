const db = require('../db')
const Category = require('../models/categories')(db)

const findAll = async (req, res) => {
  const results = await Category.findAll()
  res.send({
    results
  })
}

const create = async (req, res) => {
  const { category } = req.body
  if (category) {
    await Category.create(category)
    return res.send({
      sucess: true,
      data: req.body
    })
  }
}

const remove = async (req, res) => {
  if (req.params.id) {
    await Category.remove(req.params.id)
    return res.send({
      sucess: true
    })
  }
}

const update = async (req, res) => {
  await Category.update(req.params.id, [req.body.category])
  return res.send({
    sucess: true
  })
}

module.exports = {
  create, remove, findAll, update
}