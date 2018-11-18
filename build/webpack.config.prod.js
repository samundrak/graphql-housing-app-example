const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathToClean = ['public/build'];
const cleanOptions = {
  root: path.join(__dirname, '../'),
  verbose: true,
  dry: false,
};

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    publicPath: '/build/',
    path: path.join(__dirname, '../public/build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js',
  },
  module: {
    rules: utils.styleLoaders({
      sourceMap: true,
      extract: true,
    }),
  },
  devtool: 'none',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'HomeLike',
      template: path.join(__dirname, '../public/template.html'),
      filename: path.join(__dirname, '../public/index.html'),
      chunks: ['app'],
      inject: 'body',
    }),
    new CleanWebpackPlugin(pathToClean, cleanOptions),
    new webpack.DefinePlugin({
      'process.env': {
        REACT_APP_GRAPHQL_ENDPOINT: JSON.stringify(process.env.REACT_APP_GRAPHQL_ENDPOINT),
        REACT_APP_BACKEND_HOST: JSON.stringify(process.env.REACT_APP_BACKEND_HOST),
      },
    }),
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[md5:contenthash:hex:20].css'),
      allChunks: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      analyzerHost: '127.0.0.1',
      analyzerPort: 8888,
      reportFilename: 'report.html',
      defaultSizes: 'parsed',
      openAnalyzer: true,
      generateStatsFile: false,
      statsFilename: 'stats.json',
      statsOptions: null,
      logLevel: 'info',
    }),
  ],
  optimization: {
    splitChunks: {
      name: 'vendor',
      minChunks: 2,
    },
  },
});

module.exports = webpackConfig;
