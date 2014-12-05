'use strict';

/**
 * @ngdoc function
 * @name sampleSublimeFolderApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the sampleSublimeFolderApp
 */
angular.module('sampleSublimeFolderApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
