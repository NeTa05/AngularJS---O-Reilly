
angular.module('ShoppingModule').controller('ShoppingController', function($scope, Items) {
	$scope.items = Items.query();
});
