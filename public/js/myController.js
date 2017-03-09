// external controller
myApp.controller('myController', [
	'$scope',
	'mainCharacter',
	'CharacterVersionFactory',
	'BookService',
	($scope, mainCharacter, CharacterVersionFactory, BookService) => {
		$scope.name = 'Edward';
		$scope.myModel = 'Ready Player One';
		$scope.mainCharacter = mainCharacter;
		$scope.charVersion = CharacterVersionFactory;
		$scope.BookService = BookService;
	}
]);
