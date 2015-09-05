/**
 * Created by amitav on 9/5/15.
 */
define(['app'], function(app) {
    app.factory('authFact', ['$cookieStore', function($cookieStore) {
        var authFact = {};
        authFact.getUserAccess = function() {
            return 'Yes';
        };
        return authFact;
    }]);
});