'use strict';

var RegistrationPage = require('./registration.page.js');

ddescribe('Phone registration page', function () {

  var page = null;

  beforeEach(function() {
    page = new RegistrationPage();
  });

  it('should have a Phone Brand input field', function() {
    expect(page.inputPhoneBrand.isPresent()).toBe(true);
  });

});
