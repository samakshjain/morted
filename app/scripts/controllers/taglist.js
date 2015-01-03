'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:TaglistCtrl
 * @description
 * # TaglistCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('TaglistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
