const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },
  devServer: {
    port: 9000,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        loader: 'file-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project Demo',
      minify: {
        collapseWhitespace: true,
      },
      hash: true,
      template: './public/index.html',
    }),
  ],
};
