
angular.module('myApp', []).controller('HeaderController', function($scope) {
	$scope.messageText = 'This is an error!';
	$scope.isWarning = false;
	$scope.isError = true;
	$scope.isWarning = false;

	$scope.showError = function() {
		$scope.messageText = 'This is an error!';
		$scope.isError = true;
		$scope.isWarning = false;
	};
	
	$scope.showWarning = function() {
		$scope.messageText = 'Just a warning. Please carry on.';
		$scope.isWarning = true;
		$scope.isError = false;
	};
});
