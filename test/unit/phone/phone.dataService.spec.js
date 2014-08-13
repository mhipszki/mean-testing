'use strict';

describe('phone.dataService', function () {
  
  beforeEach(module('phone.services'));

  var $httpBackend;
  var dataService;

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    dataService = $injector.get('phone.dataService');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('create() method', function () {
        
    it('should make a POST request to the backend API with the provided phone object', function() {
      var phone = {
        brand:  'Apple',
        type:   'iPhone'
      };

      $httpBackend.expectPOST('/phone', phone).respond(200, {_id: 'new phone id'});

      dataService.create(phone);

      $httpBackend.flush();
    });

  });
});