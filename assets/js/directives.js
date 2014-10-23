(function(){
    var app = angular.module('directives', []);

    app.directive('gotSearch', function(){
        return {
            restrict: 'E',
            templateUrl: '/views/got-search.html',
            controller: 'searchController',
            controllerAs: 'search'
        };
    });

    app.directive('gotResults', function(){
        return {
            restrict: 'E',
            templateUrl: '/views/got-results.html',
            controller: 'resultsController',
            controllerAs: 'results'
        };
    });
})();