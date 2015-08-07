(function () {

	'use strict';

	angular.module("Models", []);
	angular.module("Category", []);
	angular.module("News", []);

	angular.module('app', [
		'ngRoute',
		'Models',
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
			.when('/edit', {
				templateUrl: '/app/views/edit-category.html',
				controller: 'EditCategoryController',
				controllerAs: 'ctrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});

})();
