var app = angular.module('mainApp', []);
app.controller('tableController',['$scope', '$http', function($scope, $http) {
	// body...
	console.log("Welcome");
	var refresh = function(){
		$http.get('/contactList').success(function(response){
		console.log("I got the data");
		$scope.contactList = response;
		$scope.contact = '';
		});
};
refresh();
	$scope.addContact = function() {
		console.log($scope.contact);
		$http.post('/contactList',$scope.contact).success(function(response){
			console.log(response);
			refresh();
		});
	};
	$scope.remove = function(id){
		console.log(id);
		$http.delete('/contactList/' + id).success(function(response){
			refresh();
		});
	};
	$scope.edit = function(id){
		console.log(id);
		$http.get('/contactList/' +id).success(function(response){
			$scope.contact + response;
		});
	};
	$scope.deselect = function(){
		$scope.contact = "";
	}
}]);