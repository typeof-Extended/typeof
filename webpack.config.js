const path = require('path');

module.exports = {
entry: './client/index.js',
output: {
  path: path.join(__dirname, '/dist'),
  filename: 'bundle.js'
},
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" }, 
          { loader: "css-loader" }, 
          { loader: "sass-loader" }
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  }
}
