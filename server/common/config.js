'use strict';

var config = {
  host: 'localhost',
  port: 3012,
  db: {
    username: 'mean',
    password: 'mean',
    host: 'localhost',
    port: 27017,
    name: 'mean',
    collections: ['phones']
  }
};

module.exports = config;

module.exports.uri = config.host + ':' + config.port;
