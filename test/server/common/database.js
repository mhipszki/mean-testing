'use strict';

var Promise = require('native-promise-only');
var database = require('../../../server/common/database');

function dropPhones () {
  return new Promise(function (resolve, reject) {
    database.connect().phones.remove({}, function (error, result) {
      if (error) return reject(error);
      return resolve(result);
    });
  });
}

function getPhone (_id) {
  return new Promise(function (resolve, reject) {
    database.connect().phones.findOne({_id: _id}, function (error, phone) {
      if (error) return reject(error);
      return resolve(phone);
    });
  });
}

module.exports = {
  dropPhones: dropPhones,
  getPhone: getPhone
};