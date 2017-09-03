function StartUpController($scope) {

	$scope.startingEstimate = 1;

	$scope.computeNeeded = function() {
		$scope.needed = $scope.startingEstimate * 10;
	};

	$scope.computeNeeded = function() {
		$scope.needed = $scope.startingEstimate * 10;
	};

	$scope.requestFunding = function() {
		window.alert("Sorry, please get more customers first.");
	};

	$scope.reset = function() {
		$scope.startingEstimate = 0;
	};
}
