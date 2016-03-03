/*jslint browser: true */
/*global angular, jQuery, console, $ */
(function () {
  'use strict';

  angular
    .module('ngClassifieds')
    .controller('HomeController', ['dataFactory', HomeController]);

  function HomeController(dataFactory) {
    var vm = this;
    vm.filters = {};
    dataFactory
      .then(function (response) {
        vm.jobs = response.data;
        console.info(vm.jobs);
      });
  }

}());