// external controller
myApp.controller('myController', [
	'$scope',
	'mainCharacter',
	($scope, mainCharacter) => {
		$scope.name = 'Edward';
		$scope.myModel = 'Ready Player One';
		$scope.mainCharacter = mainCharacter;
	}
]);
