"use strict";

angular.module("detalleBlog").
        component("detalleBlog",{
            templateUrl:"./templates/detalle-blog.html",
            controller :function($routeParams, $scope){ //el scope es obligatorio
                  console.log($routeParams);
                  
                    var blogItems = [
                        {id:1 ,titulo:"titulo 1" , descripcion: "descripcion 1"},
                        {id:2 ,titulo:"titulo 2" , descripcion: "descripcion 2"},
                        {id:3 ,titulo:"titulo 3" , descripcion: "descripcion 3"},
                        {id:4 ,titulo:"titulo 4" , descripcion: "descripcion 4"},
                        {id:5 ,titulo:"titulo 5" , descripcion: "descripcion 5"},
                    ];

                    $scope.titulo = "Blog numero " + $routeParams.id
                    $scope.noEncontrado = false;

                    angular.forEach( blogItems ,function(post) {
                        console.log(post);
                        if (post.id == $routeParams.id) {
                            $scope.noEncontrado = true;
                            $scope.post = post;                            
                        }                       
                        
                    });
     
                }

        });
        