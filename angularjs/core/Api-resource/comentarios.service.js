"use strict";

angular.module("comentariosApi").
    factory("comentariosApi", function($resource){
        var url = "http://127.0.0.1:3000/api/post/comentarios/:id";

        return $resource(url, {id: "@id"}, {
            
        });
        
    });