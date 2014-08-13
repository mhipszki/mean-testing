'use strict';

angular.module('phone.services', [])

.factory('phone.dataService', ['$http', '$q', function($http, $q){
  return {
    create: function(phone) {
      return $http.post('/phone', phone)
        .then(function(response) {
          return response.data;
        }, function(response) {
          return $q.reject(response.data);
        });
    }
  };
}]);
