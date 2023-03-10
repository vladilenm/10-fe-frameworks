const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
  ],
  devServer: {
    port: 4200,
  },
}
