const path = require('path')
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { name: projectName } = require('../package.json')

/** @type {import('webpack').Configuration} */
module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@chrome': path.resolve(__dirname, '../chrome'),
      '@frontend': path.resolve(__dirname, '../frontend'),
      '@bin': __dirname
    },
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: projectName,
      color: '#61dafb'
    })
  ]
}