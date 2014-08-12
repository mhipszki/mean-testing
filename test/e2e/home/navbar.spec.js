'use strict';

var HomePage = require('./home.page.js');

describe('Home page', function () {

  var page = null;

  beforeEach(function() {
    page = new HomePage();
  });

  it('should have a Navigation Bar', function() {
    expect(page.navigationBar().isPresent()).toBe(true);
  });

  it('should have a Register Phone button on the Navigation Bar', function() {
    expect(page.registerPhoneButton().isPresent()).toBe(true);
  });

});
