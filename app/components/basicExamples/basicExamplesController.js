app.controller("basicExamplesController", function ($rootScope, $scope, $location, $http) {
    $rootScope.activetab = $location.path();

    $scope.firstName = "John";   
    $scope.lastName = "Doe";

    $scope.address = "Fifth Avenue";
    $scope.changeAddress = function() {
        $scope.address = "Times Square";
    }

    $http.get("https://randomuser.me/api/?results=3").then(function (response) {
        $scope.users = response.data.results;
    });

});