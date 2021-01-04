const { resolve } = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('../bin/webpack.base')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = merge(baseConfig, /** @type {import('webpack/index').Configuration} */ {
  context: __dirname,
  mode: 'production',
  entry: {
    devtools: './src/devtools.ts',
    'devtools-background': './src/devtools-background.ts'
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, '../extension/build')
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: __dirname,
          to: resolve(__dirname, '../extension'),
          toType: 'dir',
          filter: path => !/build|src|webpack\.(?:dev|prod)\.js/.test(path)
        }
      ]
    })
  ]
})