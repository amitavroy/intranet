/**
 * Created by amitav on 9/5/15.
 */
define([
    'app',
    'factories/authFactory'
], function (app) {
    app.controller('HomeCtrl', function ($scope, $cookieStore, authFact) {
        $scope.message = "Message from HomeCtrl is working " + $scope.$parent.message;
        console.log($scope.$parent.message, 'Test');
        $cookieStore.put('accessToken', 'Something new');
        console.log('Cookie put');
        console.log($cookieStore.get('accessToken'), 'data');
    });
});