'use strict';

angular.module('phone.registration', ['ui.router', 'phone.services'])

.config(function ($stateProvider) {
  $stateProvider
    .state('register-new-phone', {
      url: '/register/phone',
      templateUrl: 'modules/phone/registration.html',
      controller: 'phone.registration'
    });
})

.controller('phone.registration', ['$scope', 'phone.dataService', function($scope, dataService) {
  $scope.phone = {};

  $scope.submit = function () {
    dataService.create($scope.phone);
  };
}]);