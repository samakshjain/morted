'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:PlaylistCtrl
 * @description
 * # PlaylistCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('PlaylistCtrl', function ($scope, shareTag) {
    $scope.id = shareTag.get();
  });
