'use strict';

/**
 * @ngdoc service
 * @name finalApp.shareTag
 * @description
 * # shareTag
 * Factory in the finalApp.
 */
angular.module('finalApp')
  .factory('shareTag', function () {
    // Service logic
    // ...

    var data = 'Hello';
    var vidid = 123;
    
    var set = function(d){
    	data = d;
    };
    var get = function(){
    	return data;
    };
    
    var setvid = function(d){
    	vidid = d;
    };
    
    var getvid = function(){
    	return vidid;
    };
    // Public API here
    return {
      set: set,
      get: get,
      setvid: setvid,
      getvid: getvid
    };
  });
