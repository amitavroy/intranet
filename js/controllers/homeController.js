/**
 * Created by amitav on 9/5/15.
 */
define([
    'app',
    'factories/authFactory'
], function (app) {
    app.controller('HomeCtrl', function ($scope, $cookieStore, authFact) {
        $cookieStore.put('accessToken', 'Something new');
        console.log('Cookie put');
    });
});