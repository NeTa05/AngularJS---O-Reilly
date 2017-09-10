function DeathrayMenuController($scope) {
	$scope.menuState.show = false;
	$scope.toggleMenu = function() {
		$scope.menuState.show = !$scope.menuState.show;
	};
	// death ray functions left as exercise to reader
}
