'use strict';

describe('phone.registration controller', function () {
  
  beforeEach(module('phone.registration', 'phone.services'));

  var scope;
  var dataService;

  beforeEach(inject(function ($injector) {
    var rootScope = $injector.get('$rootScope');
    var controller = $injector.get('$controller');

    scope = rootScope.$new();
    dataService = $injector.get('phone.dataService');

    controller('phone.registration', {
      $scope: scope,
      dataService: dataService
    });
  }));

  describe('initialisation', function () {
    
    it('should expose phone object to scope', function() {
      expect(scope.phone).toBeDefined();
    });

    it('should expose submit() method to scope', function() {
      expect(scope.submit).toBeDefined();
      expect(scope.submit instanceof Function).toBeTruthy();
    });

  });

  describe('submit() method', function () {
    
    it('should call the phone.dataService.create() method', function() {
      spyOn(dataService, 'create');
      scope.submit();
      expect(dataService.create).toHaveBeenCalled();
    });

    it('should pass $scope.phone object to phone.dataService.create() method', function() {
      spyOn(dataService, 'create');
      scope.submit();
      expect(dataService.create).toHaveBeenCalledWith(scope.phone);
    });

  });

});