/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';
  angular
    .module('ngClassifieds')
    .factory('dataFactory', ['$http', dataFactory]);
  
  var dataUrl = '/api/data.json';
  
  function dataFactory($http) {
    return $http.get(dataUrl);
  }
}());