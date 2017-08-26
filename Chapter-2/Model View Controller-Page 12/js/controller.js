
angular.module('myApp', []).controller('TextController', function($scope) {
	var someText = {};
	someText.message = 'You have started your journey.';
	$scope.someText = someText;
});