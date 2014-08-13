'use strict';

var Mongo = require('mongojs');
var config = require('./config');

var connection = null;

function connect () {
  if (connection===null) {
    var db = config.db;
    var connectionString = db.username+':'+db.password+'@'+db.host+':'+db.port+'/'+db.name;
    connection = new Mongo(connectionString, db.collections);
  }
  return connection;
}

function isValidObjectId (_id) {
  return _id && Mongo.ObjectId.isValid(_id);
}

module.exports = {
  connect: connect,
  isValidObjectId: isValidObjectId
};
