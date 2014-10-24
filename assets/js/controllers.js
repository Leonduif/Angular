(function(){
    var app = angular.module('controllers', []);

    app.controller('searchController', function(){
        this.orderBy = 'name';
    });

    app.controller('resultsController', ['$http', function($http){
        var that = this;
        that.myName = "Leon";

        $http.get('/assets/data/data.json').success(function(data){
            that.characters = data;
        });
    }]);

    app.controller('detailsController', ['$http', '$routeParams', function($http, $routeParams){
        var that = this;
        that.charShort = $routeParams.charShort;

        $http.get('/assets/data/data.json').success(function(data){
            that.characters = data;
        });
    }]);
})();