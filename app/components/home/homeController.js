app.controller("homeController", function homeController($rootScope, $scope, $location) {
    $rootScope.activetab = $location.path();



    $scope.z = 0;
    $scope.sum = function() {
        $scope.z = $scope.x + $scope.y;
    };
});