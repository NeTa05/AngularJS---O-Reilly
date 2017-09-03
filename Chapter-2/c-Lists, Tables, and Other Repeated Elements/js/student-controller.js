
angular.module('myApp', []).controller('StudentController', function($scope) {
	var students = [{name:'Mary Contrary', id:'1'},
	{name:'Jack Sprat', id:'2'},
	{name:'Jill Hill', id:'3'}];
	
	$scope.students = students;
	$scope.insertTom = function () {
							  //index, howmany, items	
		$scope.students.splice(1, 0, {name:'Tom Thumb', id:'4'});
	};
});
