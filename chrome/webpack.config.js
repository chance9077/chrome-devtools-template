const { join } = require('path')
const { merge } = require('webpack-merge')
const { HotModuleReplacementPlugin } = require('webpack')
const baseConfig = require('../build/webpack.base')

module.exports = merge(baseConfig, /** @type {import('webpack/index').Configuration} */ {
  context: __dirname,
  mode: 'development',
  entry: {
    devtools: [
      './src/devtools.ts',
      'webpack-hot-middleware/client?path=http://localhost:5000/__webpack_hmr'
    ],
    'devtools-background': './src/devtools-background.ts'
  },
  output: {
    path: join(__dirname, 'build'),
    filename: '[name].js',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  },
  devtool: 'inline-source-map',
  plugins: [
    new HotModuleReplacementPlugin()
  ]
})