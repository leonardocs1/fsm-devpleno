const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

router.delete('/:id', productsController.remove)

router.patch('/:id', productsController.patch)

router.put('/:id', productsController.put)

router.get('/:id', productsController.getById)

router.get('/', productsController.getAll)

router.post('/', productsController.post)

module.exports = router