const path = require('path');

process.chdir(path.dirname(__dirname));
require('dotenv').config();

process.env.NODE_ENV = 'development';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.dev');

const port = process.env.FRONTEND_PORT;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: {
    index: './public/dev.html',
  },
  quiet: false,
  contentBase: path.join(__dirname, '../public'),
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },

  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 400,
  },
}).listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at localhost:${port}`);
});
