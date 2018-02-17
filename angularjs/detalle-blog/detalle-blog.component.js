"use strict";

angular.module("detalleBlog").
        component("detalleBlog",{
            templateUrl:"./templates/detalle-blog.html",
            controller :function(comentariosApi ,$http, $location, $routeParams, $scope){ //el scope es obligatorio
                $scope.titulo = "Blog numero " + $routeParams.id
                $scope.noEncontrado = false;
              
                $scope.agregarRespuesta = function(){
                    $scope.comentarios.push($scope.respuesta.texto);

                    comentariosApi.save({idPost: $routeParams.id , texto:$scope.respuesta.texto });                  
                                        
                }
                $scope.eliminarComentario = function(comentario){
                    $scope.post.comentarios.splice(comentario, 1);
                }
                $scope.resetRespuesta =  function(){
                    $scope.respuesta = {
                        "id": $scope.post.comentarios.length + 1,
                        "texto": ""
                    }                     
                }

                comentariosApi.get({ id: $routeParams.id }, function(data){
                    $scope.comentarios = data.response;
                                        
                                        
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
        