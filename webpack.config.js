const path = require('path')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: './test.txt',

  module: {
    rules: [
      {
        test: /\.txt$/,
        loader: path.resolve('./loader'),
      },
    ],
  },
}
