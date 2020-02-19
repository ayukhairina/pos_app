const express = require('express')
const Route = express.Router()
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    cb(null, './uploads')
  },
  filename: function (request, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

const { getAll, getDetail, insertData, updateData, deleteData } = require('../controllers/product')

Route
  .get('/', getAll)
  .get('/:productId', getDetail)
  .post('/', upload.single('photo'), insertData)
  .patch('/:productId', updateData)
  .delete('/:productId', deleteData)

module.exports = Route
