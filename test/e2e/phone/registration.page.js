'use strict';

var page = function () {

  browser.get('/#/register/phone');

  this.inputPhoneBrand = element(by.model('phone.brand'));
  this.inputPhoneType = element(by.model('phone.type'));
  this.inputPhoneIMEI = element(by.model('phone.imei'));
  this.inputPhoneMAC = element(by.model('phone.mac'));
  
  this.submitButton = element(by.css('[ng-click="submit()"]'));

  this.setPhoneBrandTo = function (value) {
    this.inputPhoneBrand.sendKeys(value);
  }
  this.setPhoneTypeTo = function (value) {
    this.inputPhoneType.sendKeys(value);
  }
  this.setPhoneIMEITo = function (value) {
    this.inputPhoneIMEI.sendKeys(value);
  }
  this.setPhoneMACTo = function (value) {
    this.inputPhoneMAC.sendKeys(value);
  }
};

module.exports = page;