"use strict";

angular.module("listaBlog").
        component("listaBlog",{
            templateUrl:"./templates/lista-blog.html",
            controller :function($routeParams, $scope){ //el scope es obligatorio
                  console.log($routeParams);
                  
                    var blogItems = [
                        {id:1 ,titulo:"titulo 1" , descripcion: "descripcion 1"},
                        {id:2 ,titulo:"titulo 2" , descripcion: "descripcion 2"},
                        {id:3 ,titulo:"titulo 3" , descripcion: "descripcion 3"},
                        {id:4 ,titulo:"titulo 4" , descripcion: "descripcion 4"},
                        {id:5 ,titulo:"titulo 5" , descripcion: "descripcion 5"},
                    ];
                    $scope.items = blogItems;
                    // $scope.cosa = "0 Clicks!!"
                    // $scope.clicks = 0;
                    
                    /**
                     * Las funciones dentro del scope del controlador
                     * tambien se declaran aqui.
                     */
                //     $scope.clickTest = function () {
                //         console.log( $scope.clicks);
                //         $scope.clicks ++;
                //         $scope.cosa = $scope.clicks + " Clicks!!";                
                        
                //     }
                // }

            }});
        