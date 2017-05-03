app.controller("basicExamplesController", function ($rootScope, $scope, $location, $http) {
    $rootScope.activetab = $location.path();

    $rootScope.firstName = "John";   
    $rootScope.lastName = "Doe";

    $rootScope.address = "Fifth Avenue";
    $rootScope.changeAddress = function() {
        $rootScope.address = "Times Square";
    }

    $http.get("https://randomuser.me/api/?results=3").then(function (response) {
        $rootScope.users = response.data.results;
    });

});