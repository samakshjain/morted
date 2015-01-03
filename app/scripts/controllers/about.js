'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
