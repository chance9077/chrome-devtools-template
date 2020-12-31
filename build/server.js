const webpack = require('webpack')
const wdm = require('webpack-dev-middleware')
const whm = require('webpack-hot-middleware') 
const express = require('express')
const config = require('../chrome/webpack.config')

const compiler = webpack(config)

const app = express()

app.use(wdm(compiler, {
  writeToDisk: true
}))

app.use(whm(compiler))

app.listen(5000, () => console.log('server is running at http://localhost:5000'))