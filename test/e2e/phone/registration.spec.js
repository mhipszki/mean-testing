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

  it('should have a Phone Type input field', function() {
    expect(page.inputPhoneType.isPresent()).toBe(true);
  });

  it('should have a Phone IMEI number input field', function() {
    expect(page.inputPhoneIMEI.isPresent()).toBe(true);
  });

  it('should have a Phone MAC address input field', function() {
    expect(page.inputPhoneMAC.isPresent()).toBe(true);
  });

});
