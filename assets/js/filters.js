(function(){
    var app = angular.module('customFilters', []);

    // Filter to make the input lowercase and replace the spaces between words to a dashes
    app.filter('shortenName', function(){
        return function(input) {
            return input.toLowerCase().replace(/(^\s+|[^a-zA-Z0-9 ]+|\s+$)/g,"").replace(/\s+/g, "-");
        };
    });
})();