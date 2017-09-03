
angular.module('myApp', []).controller('AlbumController', function($scope) {
	
	var album = [{name:'Southwest Serenade', duration: '2:34'},
	{name:'Northern Light Waltz', duration: '3:21'},
	{name:'Eastern Tango', duration: '17:45'}];
	$scope.album = album;
	
});
