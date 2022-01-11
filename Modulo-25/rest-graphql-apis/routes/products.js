const express = require('express')
const router = express.Router()
const productsController = require('../controllers/productsController')

//product
router.delete('/:id', productsController.remove)
router.patch('/:id', productsController.patch)
router.put('/:id', productsController.put)
router.get('/:id', productsController.getById)
router.get('/', productsController.getAll)
router.post('/', productsController.create)
router.post('/:id/images', productsController.createImage)
router.delete('/:productId/images/:id', productsController.removeImage)


module.exports = router