"use strict";

angular.module("postsApi").
    factory("postsApi", function($resource){
        var url = "http://127.0.0.1:3000/api/post/:id";

        return $resource(url, {id: "@id"}, {
            
        });
        
    });