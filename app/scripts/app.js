'use strict';

angular.module('cgeMapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  //'leaflet-directive'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/clusteredMap', {
        templateUrl: 'views/clusteredmap.html',
        controller: 'ClusteredmapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
