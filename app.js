'use strict';



angular.module('app', [ 'ngRoute',  'app.routes', 'app.core', 'app.services',
'app.config','adf']).run(function() {
    console.log("Inside appController");
});