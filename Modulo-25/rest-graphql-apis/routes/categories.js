const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categoriesController')

router.get('/', categoriesController.findAll)
router.post('/', categoriesController.create)
router.delete('/:id', categoriesController.remove)
router.put('/:id', categoriesController.update)

module.exports = router