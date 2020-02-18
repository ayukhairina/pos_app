const express = require('express')
const Route = express.Router()

const { getAll, sortData, getDetail, insertData, updateData, deleteData } = require('../controllers/product')

Route
  .get('/', getAll)
  .get('/sort', sortData)
  .get('/:productId', getDetail)
  .post('/', insertData)
  .patch('/:productId', updateData)
  .delete('/:productId', deleteData)

module.exports = Route
