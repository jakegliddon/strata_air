angular.module('StrataApp', ['ngRoute', 'RouteControllers']);
 
angular.module('StrataApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    });
});