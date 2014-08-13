'use strict';

angular.module('meanApp', ['phone.registration'])

.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
});

