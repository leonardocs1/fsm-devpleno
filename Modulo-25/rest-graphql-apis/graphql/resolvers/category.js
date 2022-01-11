const db = require('../../db')
const Category = require('../../models/categories')(db)
const { ApolloError } = require('apollo-server-express')

const getAllCategories = async (context, { filter }) => {
  results = await Category.findAll()
  console.log(results)
  return results

}

const createCategory = async (context, { input }) => {
  const { category } = input
  await Category.create([category])
  return {
    category
  }
}

const deleteCategory = async (context, { id }) => {
  await Category.remove(id)
  return true
}

const updateCategory = async (context, { id, input }) => {
  console.log(id, input.category)
  await Category.update(id, [input.category])
  return true
}

module.exports = {
  getAllCategories, createCategory, deleteCategory, updateCategory
}