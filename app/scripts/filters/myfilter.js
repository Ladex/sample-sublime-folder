'use strict';

/**
 * @ngdoc filter
 * @name sampleSublimeFolderApp.filter:myfilter
 * @function
 * @description
 * # myfilter
 * Filter in the sampleSublimeFolderApp.
 */
angular.module('sampleSublimeFolderApp')
  .filter('myfilter', function () {
    return function (input) {
      return 'myfilter filter: ' + input;
    };
  });
