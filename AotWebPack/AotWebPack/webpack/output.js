'use strict';

let path = require('path');

module.exports = {
    path: path.join(process.cwd(), '/dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
};
