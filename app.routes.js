'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider

        .when('/sample', {
            templateUrl: 'src/sections/sample/sample.html',
            controller: 'SampleController as sample'
        })

        .otherwise({
            redirectTo: '/sample'
        });
}