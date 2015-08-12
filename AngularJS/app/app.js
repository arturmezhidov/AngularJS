(function () {

	'use strict';

	angular.module("Models", []);
	angular.module("Utils", []);
	angular.module("Data", []);
	angular.module("Builders", []);
	angular.module("Category", []);
	angular.module("News", []);

	angular.module('app', [
		'ngRoute',
		'Utils',
		'Data',
		'Builders',
		'Models',
		'Category',
		'News'

	]);

})();
