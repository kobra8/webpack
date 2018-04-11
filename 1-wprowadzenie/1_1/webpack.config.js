var path = require('path');

var config = {};

config.entry = './src/print.js';

config.output = {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'dist')
}

module.exports = config;