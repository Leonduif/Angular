(function(){
    var app = angular.module('GoT', ['controllers', 'directives', 'ngRoute', 'customFilters']);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: '/views/home.html'
            })
            .when('/character/:charShort', {
                templateUrl: '/views/details.html',
                controller: 'detailsController',
                controllerAs: 'details'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
})();