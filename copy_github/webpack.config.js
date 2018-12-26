const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/components.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/'),
    // publicPath: '/'//path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ['style-loader', 'css-loader', 
        {
          loader: require.resolve('sass-loader'),
          options: {
            includePaths: [path.resolve(__dirname, 'src', 'styles')]
          }
        }]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }, {
        test: /\.(ico|png|jpg|jpeg|gif|svg|woff|owff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: '[hash].[ext]',
          limit: 10000,
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './src/components_books.html'
    }),
    // new HtmlWebpackPlugin({
    //   minify: {
    //     collapseWhitespace: true
    //   },
    //   hash: true,
    //   template: './src/copy_github.html'
    // })
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
  devServer: {
    contentBase: path.join(__dirname, './dist/'),
    port: 9000
  },
};