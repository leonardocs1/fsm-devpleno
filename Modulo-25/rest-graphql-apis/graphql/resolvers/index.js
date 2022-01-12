const { AuthenticationError } = require('apollo-server-express')
const { getAllCategories, createCategory, deleteCategory, updateCategory } = require('./category')
const { getAllProducts, createProduct, deleteProduct, updateProduct, createImageOnProduct, deleteImageOnProduct } = require('./products')

const needsAuth = resolver => {
  return async (parent, args, context) => {
    if (!context.user) {
      throw new AuthenticationError('needs authentication')
    }
    return resolver(parent, args, context)
  }
}

const resolvers = {
  Query: {
    getAllProducts: needsAuth(getAllProducts),
    getAllCategories
  },
  Mutation: {
    createProduct,
    deleteProduct,
    updateProduct,
    createImageOnProduct,
    deleteImageOnProduct,
    createCategory,
    deleteCategory,
    updateCategory
  }
}
module.exports = resolvers