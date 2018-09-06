const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require ('../../webpack.config');
const express = require('express');

const app = express();

const compiler = webpack(webpackConfig);

const devCompiler = webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {colors: true},
  noInfo: true
});

app.use(devCompiler);

app.listen(8080, function () {
  console.log('Server running on port ' + 8080);
});
