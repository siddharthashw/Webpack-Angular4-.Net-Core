'use strict';

module.exports = {
  contentBase: './wwwroot',
  port: 8080,
  inline: true,
  historyApiFallback: true,
  stats: 'errors-only',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  }
};
