"use strict";

angular.module("detalleBlog").
        component("detalleBlog",{
            templateUrl:"./templates/detalle-blog.html",
            controller :function(Post ,$http, $location, $routeParams, $scope){ //el scope es obligatorio
                $scope.titulo = "Blog numero " + $routeParams.id
                $scope.noEncontrado = false;
                console.log(Post.query());

                $scope.agregarRespuesta = function(){
                    console.log($scope.respuesta);
                    $scope.post.comentarios.push($scope.respuesta);
                                        
                }
                $scope.eliminarComentario = function(comentario){
                    console.log(comentario);
                    
                    
                    $scope.post.comentarios.splice(comentario, 1);
                }
                $scope.resetRespuesta =  function(){
                    $scope.respuesta = {
                        "id": $scope.post.comentarios.length + 1,
                        "texto": ""
                    }                     
                }

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
        