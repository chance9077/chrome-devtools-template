const path = require('path')
const WebpackBar = require('webpackbar')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { name: projectName } = require('../package.json')

/** @type {import('webpack/index').Configuration} */
module.exports = {
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    alias: {
      '@chrome': path.resolve(__dirname, '../chrome'),
      '@frontend': path.resolve(__dirname, '../frontend')
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
  watchOptions: {
    ignored: ['node_modules', 'chrome/build']
  },
  optimization: {
    moduleIds: 'named'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackBar({
      name: projectName,
      color: '#61dafb'
    })
  ]
}