var app = angular.module('HomeModule', []);

app.filter('titleCase', function() {
    var titleCaseFilter = function(input) {
	var words = input.split(' ');
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
	}
	return words.join(' ');
	};
	return titleCaseFilter;
});

app.controller('HomeController', function($scope) {
	$scope.pageHeading = 'behold the majesty of your page title';
});
