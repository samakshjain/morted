'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:ResultsCtrl
 * @description
 * # ResultsCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('ResultsCtrl', function ($scope, $firebase, shareTag) {
    var ref = new Firebase('https://blazing-fire-5082.firebaseio.com');
    $scope.term = "Hell";
    $scope.tag = shareTag.tag;
  });
