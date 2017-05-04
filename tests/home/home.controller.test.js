describe('homeController', function () {
    var $controller;

    beforeEach(module('app'));

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    beforeEach(function() {
        $scope = {};
        var controller = $controller('homeController', { $scope: $scope });
    });

    describe('sum feature', function () {
		it('1 + 1 should equal 2', function () {
			$scope.x = 1;
			$scope.y = 2;
			$scope.sum();
			expect($scope.z).toBe(3);
		});	

        it('5 + 2 should equal 7', function () {
            $scope.x = 5;
            $scope.y = 2;
            $scope.sum();
            expect($scope.z).toBe(7);
        }); 
	});

});
