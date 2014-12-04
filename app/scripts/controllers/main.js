'use strict';

/**
 * @ngdoc function
 * @name sampleSublimeFolderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sampleSublimeFolderApp
 */
angular.module('sampleSublimeFolderApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
