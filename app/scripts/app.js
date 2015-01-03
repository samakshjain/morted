'use strict';

/**
 * @ngdoc overview
 * @name finalApp
 * @description
 * # finalApp
 *
 * Main module of the application.
 */
angular
  .module('finalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/result',{
      	templateUrl: 'views/results.html',
      	controller: 'ResultsCtrl'
      })
      .when('/playlist', {
        templateUrl: 'views/playlist.html',
        controller: 'PlaylistCtrl'
      })
      .when('/taglist', {
        templateUrl: 'views/taglist.html',
        controller: 'TaglistCtrl'
      })
      .when('/videopage', {
        templateUrl: 'views/videopage.html',
        controller: 'VideopageCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
