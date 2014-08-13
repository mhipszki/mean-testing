'use strict';

var database = require('../../common/database');
var helper = require('../helper');

/* jshint expr: true */
/* exported should */

// Requirements
var expect = require('expect.js');
var should = require('should');

describe('endpoint POST /phone for valid request params', function () {

  var phoneMock = new helper.Mock();
  var response;
  var phone;

  function create (mock, done) {
    database.dropPhones()
      .then(function tryCreatePhoneWithValidData () {
        return helper.create(mock);
      })
      .then(function storeResponse (res) {
        response = res;
      })
      .then(function tryRetrievePhone () {
        return database.getPhone(response._id);
      })
      .then(function storephone (res) {
        phone = res.body;
      })
      .then(function() {
        done();
      })
      .catch(done);
  }

  before(function (done) {
    create(phoneMock, done);
  });

  after(function (done) {
    database.dropPhones()
      .then(function() {
        done();
      })
      .catch(done);
  });

  it('should return 200', function () {
    expect(response.statusCode).to.be(200);
  });

  it('should return a JSON response object', function () {
    expect(response.type).to.match(/json/);
    response.body.should.be.an.Object.and.not.an.Array;
  });

  it('should return phone _id', function () {
    phone.should.have.property('_id');
    database.isValidObjectId(phone._id).should.be.true;
  });

  it('should return phone brand', function() {
    phone.should.have.property('brand');
    phone.brand.should.be.instanceof(String).and.equal(phoneMock.brand);
  });

  it('should return phone MAC', function() {
    phone.should.have.property('MAC');
    phone.MAC.should.be.instanceof(String).and.equal(phoneMock.MAC);
  });

  it('should return phone IMEI', function() {
    phone.should.have.property('IMEI');
    phone.IMEI.should.be.instanceof(String).and.equal(phoneMock.IMEI);
  });

});