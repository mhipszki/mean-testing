'use strict';

angular.module('phone.registration', ['ui.router'])

.config(function ($stateProvider) {
  $stateProvider
    .state('register-new-phone', {
      url: '/register/phone',
      templateUrl: 'modules/phone/registration.html',
      controller: 'phone.registration'
    });
})

.controller('phone.registration', ['$scope', function($scope) {
  $scope.phone = {};

  $scope.submit = function () {

  };
}]);