/**
 * Created by amitav on 9/5/15.
 */
define(['app'], function (app) {
    app.factory('configFactory', ['$http', function ($http) {
        var globalFact = {};

        globalFact.jsonConf = '';
        globalFact.csrfToken = '';

        /*Loading the config json when the config object is not present*/
        globalFact.loadConfig = function () {
            console.log('Loaded config from url');
            this.jsonConf = $http.get('config.json').then(function (response) {
                return response.data;
            });
            return this.jsonConf;
        };

        /*Return the config object. Decide if already present then send or else load as http url*/
        globalFact.getConfig = function () {
            return this.jsonConf === '' ? this.loadConfig() : this.jsonConf;
        };

        /*Get the CSRF token from Laravel*/
        globalFact.loadCSRFToken = function () {
            this.csrfToken = $http.get(tokenUrl).then(function (response) {
                console.log('tokenUrl', tokenUrl);
                console.log('csrfDataView', response);
                return response.data;
            });
            return this.csrfToken;
        };

        /*Return the CSRF Token. If already present sent else http url*/
        globalFact.getCSRFToken = function () {
            return this.csrfToken === '' ? this.loadCSRFToken() : this.csrfToken;
        };

        return globalFact;
    }]);
});