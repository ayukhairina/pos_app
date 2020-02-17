const express = require ('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mainNavigation = require('./src/routes')

app.listen(8004, () => console.log('This server is running')); //service berjalan di port tsb
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', mainNavigation)
