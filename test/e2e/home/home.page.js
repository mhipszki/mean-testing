'use strict';

var page = function () {

  browser.get('/');

  this.navigationBar = function () {
    return element(by.id('navigation-bar'));
  };
  
  this.registerPhoneButton = function () {
    return element(by.id('register-phone'));
  };
};

module.exports = page;