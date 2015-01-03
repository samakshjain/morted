'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('ResultsCtrl', function ($scope, shareTag) {
    $scope.tag = shareTag.get();
  });
