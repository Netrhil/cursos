"use strict";

angular.module("detalleBlog").
        component("detalleBlog",{
            templateUrl:"./templates/detalle-blog.html",
            controller :function(Post ,$http, $location, $routeParams, $scope){ //el scope es obligatorio
                $scope.titulo = "Blog numero " + $routeParams.id
                $scope.noEncontrado = false;
                console.log(Post.query());

                Post.query(function(data){
                    angular.forEach( data ,function(post) {
                        
                        if (post.id == $routeParams.id) {
                            $scope.noEncontrado = true;
                            $scope.post = post;                            
                        }                       
                        
                    });       

                });

                
            //     //hace request a la ruta especificada
            //     $http.get("/json/posts.json").then(succesCallBack, errorCallback);
                
            //     function succesCallBack(response, status, config, statusText){
            //         console.log(response);
            //         var blogItems = response.data;

            //         angular.forEach( blogItems ,function(post) {
            //             console.log(post);
            //             if (post.id == $routeParams.id) {
            //                 $scope.noEncontrado = true;
            //                 $scope.post = post;                            
            //             }                       
                        
            //         });                   

            //     }

            //     function errorCallback(response, status, config, statusText) {
            //         console.log(response);
            //     }

            }

            

        });
        