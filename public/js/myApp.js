angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp.config(function() {

});

myApp.run([
	'$rootScope',
	'APP_VERSION',
	($rootScope, APP_VERSION) => {
		console.log('I\'m running angular!');
		$rootScope.APP_VERSION = APP_VERSION;
	}
])
