(function(){
    var app = angular.module('controllers', []);

    app.controller('searchController', function(){

    });

    app.controller('resultsController', ['$http', function($http){
        var that = this;

        $http.get('/assets/data/data.json').success(function(data){
            that.characters = data;
        });
    }]);
})();