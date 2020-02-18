const productModel = require('../models/product')
const miscHelper = require('../helpers')
module.exports = {
  getAll: async (request, response) => {
    try {
      const searchName = request.query.product_name || ''
      const result = await productModel.getAll(searchName)
      miscHelper.response(response, 200, result)
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
    }
  },

  sortData: async (request, response) => {
    try {
      const column = request.query.column
      const result = await productModel.sortData(column)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },

  getDetail: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await productModel.getDetail(productId)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  },

  insertData: async (request, response) => {
    try {
      const data = {
        product_name: request.body.product_name,
        desc: request.body.desc,
        photo: request.body.photo,
        price: request.body.price,
        category: request.body.category,
        stock: request.body.stock,
        data_added: new Date(),
        data_updated: new Date()
      }
      const result = await productModel.insertData(data)
      response.json(result)
    } 
    catch (error) {
      console.log(error)   
    }
  },

  updateData: async (request, response) => {
    try {
      const data = {
        product_name: request.body.product_name,
        desc: request.body.desc,
        photo: request.body.photo,
        price: request.body.price,
        category: request.body.category,
        stock: request.body.stock,
        data_updated: new Date()
      }
      const productId = request.params.productId
      const result = await productModel.updateData(data, productId)
      response.json(result)
    }
    catch (error) {
      console.log(error)
    }
  },

  deleteData: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await productModel.deleteData(productId)
      response.json(result)
    } catch (error) {
      console.log(error)
    }
  }
}
