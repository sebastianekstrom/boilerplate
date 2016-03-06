var webpack = require('webpack');
var path = require('path');
var autoprefixer = require ('autoprefixer-core');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    html: './index.html',
    js: './source/js/main.js'
  },
  output: {
    path: path.join(__dirname, './static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.scss$/, loaders: ['style', 'css', 'postcss-loader', 'sass'] },
      { test: /\.svg/, loaders: ["url-loader?mimetype=image/svg+xml"] },
      { test: /\.png$/, loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    autoprefixer({
      browsers: ["last 2 version"]
    })
  ],
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html'}),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    contentBase: './',
    hot: true,
    inline: true,
    stats: {
      colors: true,
      chunkModules: false
    }
  }
}
