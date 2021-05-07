const path = require('path')
const config = require('./config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshBabel = require('react-refresh/babel')
const ReactRefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')

module.exports = {
  entry: {
    app: path.join(config.path.entry, 'app.tsx'),
    about: path.join(config.path.entry, 'about.tsx')
  },
  output: {
    path: config.path.output,
    publicPath: '/',
    filename: '[name].js'
  },
  devServer: {
    contentBase: config.path.output,
    publicPath: '/',
    open: true,
    hot: true,
    port: config.env.port
  },
  mode: config.env.dev ? 'development' : 'production',
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  // watch: config.env.dev,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          plugins: [config.env.dev && ReactRefreshBabel].filter(Boolean)
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    config.env.dev && new HotModuleReplacementPlugin(),
    config.env.dev && new ReactRefreshWebpack(),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'app.html',
      template: path.join(config.path.public, 'index.html'),
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'about.html',
      template: path.join(config.path.public, 'index.html'),
      chunks: ['about']
    })
  ].filter(Boolean)
}
