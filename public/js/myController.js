// external controller
myApp.controller('myController', [
	'$scope',
	'mainCharacter',
	'CharacterVersionFactory',
	($scope, mainCharacter, CharacterVersionFactory) => {
		$scope.name = 'Edward';
		$scope.myModel = 'Ready Player One';
		$scope.mainCharacter = mainCharacter;
		$scope.charVersion = CharacterVersionFactory;
	}
]);
