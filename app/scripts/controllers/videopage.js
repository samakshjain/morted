'use strict';

/**
 * @ngdoc function
 * @name finalApp.controller:VideopageCtrl
 * @description
 * # VideopageCtrl
 * Controller of the finalApp
 */
angular.module('finalApp')
  .controller('VideopageCtrl', function ($scope, shareTag) {
     var vidid = shareTag.getvid();
     $scope.vidurln = vidid.toString() + '.html';
  });

