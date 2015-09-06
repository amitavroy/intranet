/**
 * Created by amitav on 9/5/15.
 */
define(['app'], function(app) {
    app.factory('authFact', ['$cookieStore', '$http', function ($cookieStore, $http) {
        var authFact = {};

        authFact.getUserAccess = function() {
            $http.get('')
        };

        authFact.checkLogin = function (credentials, data) {
            $http({
                headers: {
                    "X-XSRF-TOKEN": data
                },
                method: "POST",
                url: 'http://pmtools.app/test-login',
                dataType: 'jsonp'
            }).success(function (response) {
                console.log(response, 'response');
            });
        };

        return authFact;
    }]);
});