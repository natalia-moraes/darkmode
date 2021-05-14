var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'MainPageController',
        templateUrl: 'views/mainPage.html'
    })
    .when('/userPage/:username', {
        controller: 'UserPageController',
        templateUrl: 'views/userPage.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});

