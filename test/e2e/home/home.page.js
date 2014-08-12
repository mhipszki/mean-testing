'use strict';

var page = function () {

  browser.get('/');

  this.navigationBar = function () {
    return element(by.id('navigation-bar'));
  };
};

module.exports = page;