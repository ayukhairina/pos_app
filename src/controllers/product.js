const productModel = require('../models/product')
const miscHelper = require('../helpers')
module.exports = {
  getAll: async (request, response) => {
    try {
      const searchName = request.query.searchName
      const sort = request.query.sort
      const page = request.query.page
      const limit = request.query.limit
      //   const page = request.query.page
      //   const limit = request.query.limit
      //   const startIndex = (page - 1) * limit
      //   const endIndex = page * limit
      const data = {
        searchName,
        sort,
        pagination,
        limit
      }
      const result = await productModel.getAll(data)
      // const result = result1.slice(startIndex, endIndex)
      miscHelper.response(response, 200, result)
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
    }
  },

  //   sortData: async (request, response) => {
  //     try {
  //       const column = request.query.column
  //       const result = await productModel.sortData(column)
  //       miscHelper.response(response, 200, result)
  //     } catch (error) {
  //       console.log(error)
  //       miscHelper.customErrorResponse(response, 404, 'Internal server error!')
  //     }
  //   },

  getDetail: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await productModel.getDetail(productId)
      miscHelper.response(response, 200, result)
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
    }
  },

  insertData: async (request, response) => {
    try {
      const data = {
        product_name: request.body.product_name,
        desc: request.body.desc,
        photo: `http://localhost:8004/uploads/${request.file.filename}`,
        price: request.body.price,
        category: request.body.category,
        stock: request.body.stock,
        data_added: new Date(),
        data_updated: new Date()
      }
      const result = await productModel.insertData(data)
      miscHelper.response(response, 200, result)
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
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
      miscHelper.response(response, 200, result)
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
    }
  },
  deleteData: async (request, response) => {
    try {
      const productId = request.params.productId
      const result = await productModel.deleteData(productId)
      miscHelper.response(response, 200, result)
    } catch (error) {
      console.log(error)
      miscHelper.customErrorResponse(response, 404, 'Internal server error!')
    }
  }
}
