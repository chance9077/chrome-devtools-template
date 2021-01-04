const { join } = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('../bin/webpack.base')

const devServer = {
  host: 'localhost',
  port: 5000,
  path: '/__webpack_hmr',
  writeToDisk: filename => !/hot-update\.js(?:on)?$/.test(filename)
}

module.exports = merge(baseConfig, /** @type {import('webpack/index').Configuration} */ {
  context: __dirname,
  mode: 'development',
  entry: {
    devtools: [
      './src/devtools.ts',
      '@bin/autoLoad-devtools-page.js'
    ],
    'devtools-background': [
      './src/devtools-background.ts',
      `@bin/client.js?path=http://${devServer.host}:${devServer.port}${devServer.path}`
    ]
  },
  output: {
    path: join(__dirname, 'build'),
    filename: '[name].js',
    hotUpdateChunkFilename: 'hot/[id].[hash].hot-update.js',
    hotUpdateMainFilename: 'hot/[hash].hot-update.json'
  },
  watchOptions: {
    ignored: ['node_modules', 'chrome/build', 'webpack.dev.js', 'webpack.prod.js']
  },
  optimization: {
    moduleIds: 'named'
  },
  infrastructureLogging: {
    level: 'none'
  },
  devtool: 'inline-source-map',
  devServer
})