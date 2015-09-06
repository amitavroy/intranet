/**
 * Created by amitav on 9/5/15.
 */
define([
    'app',
    'factories/authFactory',
    'factories/configFactory'
], function (app) {
    app.controller('LoginCtrl', function ($scope, authFact, configFactory) {
        $scope.doUserLogin = function (user) {
            configFactory.getCSRFToken().then(function (data) {
                console.log('CSRF', data);
                authFact.checkLogin(user, data);
            });
        }
    });
});