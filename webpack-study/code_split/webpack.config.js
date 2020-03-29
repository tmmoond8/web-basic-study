const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    page1: './src/index1.js',
    page2: './src/index2.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new CleanWebpackPlugin()],
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: 2,
          name: 'vendors',
        },
        default: {
          minChunks: 1,
          priority: 1,
          name: 'default',
        },
        reactBundle: {
          test: /[\\/]node_modules[\\/](react|react-dom)/,
          priority: 5,
          name: 'reactBundle',
        }
      }
    }
  }
};