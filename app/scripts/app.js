'use strict';

/**
 * @ngdoc overview
 * @name sampleSublimeFolderApp
 * @description
 * # sampleSublimeFolderApp
 *
 * Main module of the application.
 */
angular
  .module('sampleSublimeFolderApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/streamManagement', {
        templateUrl: 'views/streammanagement.html',
        controller: 'StreammanagementCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
