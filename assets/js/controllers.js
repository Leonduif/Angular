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

        $http.get('/assets/data/data.json').success(function(data) {
            that.characters = data;

            // Retrieves selected character and stores it in details.currentChar
            for (var i = 0; data.length > i; i++) {
                if (data[i].id === $routeParams.charShort) {
                    that.currentChar = data[i];
                }
            }
        });
    }]);
})();