
var module = angular.module('app', []);

module.controller('SomeController', function($scope) {

	$scope.message = { text: 'nothing clicked yet' };
	$scope.clickUnfocused = function() {
		$scope.message.text = 'unfocused button clicked';
	};
	$scope.clickFocused = function (){
		$scope.message.text = 'focus button clicked';
	};
});

module.directive('ngbkFocus', function() {
	return {
		link: function(scope, element, attrs, controller) {
			element[0].focus();
	}
	};
});