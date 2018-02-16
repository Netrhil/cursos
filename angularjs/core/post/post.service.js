"use strict";

angular.module("Post").
    factory("Post", function($resource){
        var url = "/json/posts.json";
        return $resource(url, {}, {
            query:{
                method: "GET",
                params: {},
                isArray: true,
                cache: true,
            },
            get: {
                method: "GET",
                isAttay: true,
                cache: true,               
            }
        });
        
    });