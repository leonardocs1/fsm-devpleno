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

const post = (req, res) => {
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

const getAll = (req, res) => {
  res.send({
    products: ['all products']
  })
}

module.exports = {
  remove, patch, put, post, getById, getAll
}