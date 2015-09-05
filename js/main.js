/**
 * Created by amitav on 9/5/15.
 */
require.config({
    baseUrl: "js",
    paths: {
        'angular': '../bower_components/angular/angular.min',
        'angular-route': '../bower_components/angular-route/angular-route.min',
        'angularAMD': '../bower_components/angularAMD/angularAMD.min',
        'angular-cookies': '../bower_components/angular-cookies/angular-cookies.min'
    },
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-cookies': ['angular']
    },
    deps: ['app']
});

require([
    'controllers/globalController'
]);