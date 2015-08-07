(function () {

	'use strict';

	angular.module("Category", []);
	angular.module("News", []);

	angular.module('app', [
		'ngRoute',
		'Category',
		'News'

	]).config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/app/views/news-all.html',
				controller: 'AllNewsController',
				controllerAs: 'ctrl'
			})
			.when('/news/:id', {
				templateUrl: '/app/views/new.html',
				controller: 'NewController',
				controllerAs: 'ctrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

})();
