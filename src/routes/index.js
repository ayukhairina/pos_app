const express = require('express')
const Route = express.Router()

const productRouter = require('./product')
// const user = require('./user')

Route
    .use('/product', productRouter)

    module.exports = Route
