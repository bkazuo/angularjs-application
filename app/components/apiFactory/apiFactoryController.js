app.controller("apiFactoryController", function ($rootScope, $scope, $location, $http, omdbFactory) {
    $rootScope.activetab = $location.path();

    $scope.search = "Sherlock Holmes";

    $scope.$watch('search', function() {
        fetch();
    });

    function fetch(){
        omdbFactory.getMovie($scope.search)
            .then(function(response){ $scope.details = response.data; });

        omdbFactory.getRelatedMovies($scope.search)
            .then(function(response){ $scope.related = response.data; });
    }

    $scope.update = function(movie){
        $scope.search = movie.Title;
    };

    $scope.select = function(){
        this.setSelectionRange(0, this.value.length);
    }

});