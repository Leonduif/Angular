(function(){
    var app = angular.module('directives', []);

    app.directive('gotSearch', function(){
        return {
            restrict: 'E',
            templateUrl: '/partials/got-search.html',
            controller: 'searchController',
            controllerAs: 'search'
        };
    });

    app.directive('gotResults', function(){
        return {
            restrict: 'E',
            templateUrl: '/partials/got-list.html',
            controller: 'resultsController',
            controllerAs: 'results'
        };
    });

    app.directive('gotHeader', function(){
        return {
            restrict: 'E',
            templateUrl: '/partials/got-header.html'
        };
    });
})();