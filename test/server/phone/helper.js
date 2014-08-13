'use strict';

var config = require('../../../server/common/config');

var supertest = require('supertest');
var Promise = require('native-promise-only');
var crypto = require('crypto');
var biguint = require('biguint-format');

function Mock () {
  return {
    brand: 'Apple',
    type: 'iPhone',
    mac: generateFakeMAC(),
    imei: generateFakeIMEI()
  };
}

function generateFakeMAC() {
  var len = 12;
  var randomHex = crypto.randomBytes(Math.ceil(len/2)).toString('hex').slice(0,len);
  var fakeMAC = '';
  randomHex.split('').forEach(function(char, idx) {
    fakeMAC += char;
    if (idx%2===1 && idx!==len-1) fakeMAC += ':';
  });

  return fakeMAC.toUpperCase();
}

function generateFakeIMEI() {
  var len = 15;
  return biguint(crypto.randomBytes(Math.ceil(len/2)), 'dec').toString().slice(0,len);
}

function create (phone) {
  return new Promise(function (resolve, reject) {
    var request = supertest.agent(config.uri).post('/phone');

    if (phone.brand!==undefined) request.field('brand', phone.brand);
    if (phone.type!==undefined) request.field('type', phone.type);
    if (phone.mac!==undefined) request.field('mac', phone.mac);
    if (phone.imei!==undefined) request.field('imei', phone.imei);

    request.end(function (error, res) {
      if (error) return reject(error);
      if (res.statusCode!==200) return reject(res);
      return resolve(res);
    });
  });
}

module.exports = {
  Mock: Mock,
  create: create
};