'use strict';

angular.module('prueba').
    config( function($routeProvider, $locationProvider) {
        $locationProvider.
            html5Mode({enable:true}).
            hashPrefix('');
        
        $routeProvider.
            when("/",{
                template: "<lista-blog></lista-blog>"
            }).
            when("/about",{
                templateUrl: "./templates/about.html"
            }).
            when("/blog/:id",{
                template: "<lista-blog></lista-blog>"
            }).
            // when("/blog/2",{
            //     template: "<h1> hola!! 2 </h2>"
            // }).
            otherwise({
                template: "no encontrado :("
            });
        
    });