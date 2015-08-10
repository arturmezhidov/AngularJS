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
				templateUrl: '/app/views/categories.html',
				controller: 'CategoriesController',
				controllerAs: 'ctrl'
			})
			.when('/news-category', {
				templateUrl: '/app/views/news-category.html',
				controller: 'NewsCategoryController',
				controllerAs: 'ctrl'
			})
			.when('/news/:id', {
				templateUrl: '/app/views/news.html',
				controller: 'NewsController',
				controllerAs: 'ctrl'
			})
			.when('/edit', {
				templateUrl: '/app/views/edit-category.html',
				controller: 'EditCategoryController',
				controllerAs: 'ctrl'
			})
			.when('/create', {
				templateUrl: '/app/views/create-news.html',
				controller: 'CreateNewsController',
				controllerAs: 'ctrl'
			})
			.when('/search', {
				templateUrl: '/app/views/search-result.html',
				controller: 'SearchResultController',
				controllerAs: 'ctrl'
			})
			.when('/e404', {
				templateUrl: '/app/views/e404.html'
			})
			.otherwise({
				redirectTo: '/e404'

			});

	});

})();
