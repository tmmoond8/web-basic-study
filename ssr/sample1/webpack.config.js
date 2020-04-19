const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

function getConfig(isServer) {
  return {
    entry: isServer 
      ? { server: path.resolve(__dirname, 'src/server.js')}
      : { main: path.resolve(__dirname, 'src/index.js')},
    output: {
      filename: isServer ? '[name].bundle.js' : '[name].[chunkhash].js',
      path: isServer ? path.resolve(__dirname, 'dist-server') : path.resolve(__dirname, 'dist'),
      publicPath: '/dist/',
    },
    target: isServer ? 'node' : 'web',
    externals: isServer ? [nodeExternals()] : [],
    node: {
      __dirname: false,
    },
    optimization: isServer
      ? {
        splitChunks: false,
        minimize: false,
      }
      : undefined,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve(__dirname, isServer ? '.babelrc.server.js' : '.babelrc.client.js'),
            },
          },
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              emitFile: isServer ? false : true,
            },
          },
        },
      ]
    },
    plugins: isServer
      ? []
      : [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './template/index.html',
        }),
      ],
    mode: 'production'
  }
}

module.exports = [ getConfig(false), getConfig(true)];