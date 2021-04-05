const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: path.resolve(__dirname, '..', './src/index.js'),
  },
  output: {
    // filename: '[name].[hash].js',
    filename: 'bundle.js',
    path: path.resolve(__dirname,'..', './dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, '..', 'node_modules')],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin(
      { 
        title: 'react webpack template',
        template: path.resolve(__dirname, '..', './src/index.html'),
      }
    ),
  ],
}