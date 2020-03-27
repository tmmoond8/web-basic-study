const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
          }
        }],
        
      },
      {
        test: /\.(txt)/,
        use: 'raw-loader',
      }
    ],
  },
  mode: 'production',
};
