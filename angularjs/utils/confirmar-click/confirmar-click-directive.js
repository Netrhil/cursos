"use strict";


angular.module("confirmarClick").
    directive("confirmarClick", function() {
        return {
            restrict: "A",
            link: function(scope, element, attr){
                var msg = scope.message || "estas seguro?";
                var clickAction = attr.clickConfirmado; //directiva
                element.bind("click",function(event) {
                    if (window.confirm(msg)) {
                        scope.$eval(clickAction);                        
                    }                    
                });

            }
        }        
    });
// angular.module("confirmarClick").
//     directive("confirmarClick", function($rootScope, $location){
//         return {
//             restrict: "E",
//             template:  '<a ng-href="#" confirmar-click> {{item.titulo}} </a>' ,
//             link: function(scope, element, attr) {
//                 var msg = scope.message || "estas seguro?";

//                 element.bind("click", function(event){
//                     if (window.confirm(msg)) {
//                         console.log(scope.item.id);         
//                         $rootScope.$apply(function() {
//                             $location.path("/abc");
//                         });                                          
                        
//                     }
//                 });
                
                
                
                
//             }
//         }
        
//     });