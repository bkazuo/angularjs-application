app.controller("simpleCrudController", function ($rootScope, $scope, $location, $http) {
    $rootScope.activetab = $location.path();

    $http.get("https://randomuser.me/api/?results=10").then(function (response) {
        $scope.users = response.data.results;
    });

    // Remove a user
    $scope.deleteUser = function(index) {
        console.log($scope.users[index]);
        // Could use the delete http instance
        $scope.users.splice(index, 1);
    }

    // Add new user
    $scope.addUser = function(){
        // Http post to insert user.
        // The result should be appended users scope object
        $scope.users.push(angular.copy($scope.new_user));
    }

});