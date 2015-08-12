(function () {

	'use strict';

	angular.module('app')
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/app/views/categories.html',
					controller: 'CategoriesController',
					controllerAs: 'ctrl'
				})
				.when('/category/:id', {
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
