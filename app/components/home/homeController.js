app.controller("homeController", function ($rootScope, $scope, $location) {
    $rootScope.activetab = $location.path();
});