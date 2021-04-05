const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '..', './dist'),
    historyApiFallback: true,
    host: 'localhost',
    port: 3000,
    open: true,
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.dev'),
    })
  ],
};