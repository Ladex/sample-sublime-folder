'use strict';

/**
 * @ngdoc service
 * @name sampleSublimeFolderApp.someServie
 * @description
 * # someServie
 * Factory in the sampleSublimeFolderApp.
 */
angular.module('sampleSublimeFolderApp')
  .factory('someServie', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
