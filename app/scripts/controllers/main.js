'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('MainCtrl', function ($scope, $firebase, shareTag) {
    var ref = new Firebase('https://blazing-fire-5082.firebaseio.com');
    var playlists = $firebase(ref).$asObject();
    $scope.play = playlists;
    $scope.tag = shareTag.get();
    $scope.set = shareTag.set;
});
