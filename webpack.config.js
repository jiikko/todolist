const path = require('path');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // https://stackoverflow.com/questions/33460420/babel-loader-jsx-syntaxerror-unexpected-token
        query:
        {
          presets:['react']
        }
      }
    ]
  }

}
