const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');  // Add this for HMR plugin

module.exports = {
  entry: './src/index.js', // Entry point of your app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',  // Important for HMR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // For JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],  // Allows imports without specifying file extensions
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',  // Template for index.html
    }),
    new webpack.HotModuleReplacementPlugin(),  // Enable HMR
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    hot: true,  // Enable Hot Module Replacement
    port: 9000,
  },
};
