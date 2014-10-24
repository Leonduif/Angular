(function(){
    var app = angular.module('GoT', ['controllers', 'directives', 'ngRoute']);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: '/views/home.html'
            })
            .when('/character/:charId', {
                templateUrl: '/views/details.html',
                controller: 'detailsController',
                controllerAs: 'details'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }]);
})();