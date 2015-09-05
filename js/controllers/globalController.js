/**
 * Created by amitav on 9/5/15.
 */
define(['app'], function(app) {
    app.controller('GlobalCtrl', function($scope, $cookieStore) {
        $scope.message = "Message from Global Controller";
    });
});