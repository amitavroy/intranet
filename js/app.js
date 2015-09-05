/**
 * Created by amitav on 9/5/15.
 */
define(['angularAMD', 'angular-route', 'angular-cookies'], function (angularAMD) {
    var app = angular.module("app", ['ngRoute', 'ngCookies']);

    app.config(function ($routeProvider) {
        $routeProvider.when("/", angularAMD.route({
            templateUrl: 'views/home.html', controller: 'HomeCtrl',
            controllerUrl: 'controllers/homeController'
        })).when("/login", angularAMD.route({
            templateUrl: 'views/login.html', controller: 'LoginCtrl',
            controllerUrl: 'controllers/loginController'
        }));
    });

    return angularAMD.bootstrap(app);
});