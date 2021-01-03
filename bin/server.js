const webpack = require('webpack')
const wdm = require('webpack-dev-middleware')
const whm = require('webpack-hot-middleware') 
const express = require('express')
const config = require('../chrome/webpack.dev')

const compiler = webpack(config)

const app = express()

const { devServer: { host, port, writeToDisk } } = config
app.use(wdm(compiler, {
  writeToDisk
}))

app.use(whm(compiler))

app.listen(port, host)