(function () {

	'use strict';

	angular.module("Data", []);
	angular.module("Directives", []);
	angular.module("Controllers", []);
	angular.module("Filters", []);
	angular.module("Services", []);

	angular.module('app', [
		'ngRoute',
		'Data',
		'Directives',
		'Controllers',
		'Filters',
		'Services'
	]);

})();
