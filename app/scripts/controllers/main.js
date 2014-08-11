'use strict';

/**
 * @ngdoc function
 * @name meanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the meanApp
 */
angular.module('meanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
