'use strict';

describe('phone.registration controller', function () {
  
  beforeEach(module('phone.registration'));

  var scope;

  beforeEach(inject(function ($injector) {
    var rootScope = $injector.get('$rootScope');
    var controller = $injector.get('$controller');

    scope = rootScope.$new();
    controller('phone.registration', {
      $scope: scope
    });
  }));

  describe('initialisation', function () {
    
    it('should expose phone object to scope', function() {
      expect(scope.phone).toBeDefined();
    });

  });

});