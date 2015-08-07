(function () {

	'use strict';

	angular
		.module('Category')
		.service('CategoryService', CategoryService);

	CategoryService.$inject = ['$http'];

	function CategoryService($http) {

		var self = this;
		var categories = null;
		var currentCategory = null;

		this.getAll = getAll;
		this.getById = getById;
		this.current = current;

		function getAll() {
			if (!categories) {
				categories = query();
			}
			return categories;
		}
		function getById(id) {
			id = parseInt(id);
			for (var i = 0; i < categories.length; i++) {
				if (categories[i].id === id) {
					return categories[i];
				}
			}
			return null;
		}
		function current(category) {
			if (category) {
				currentCategory.id = category.id;
				currentCategory.name = category.name;
			}
			return currentCategory;
		}

		function query() {
			var result = [];
			$http.get("app-data/categories.json")
				.then(function (response) {
					response.data.forEach(function (item) {
						result.push(item);
					});
				}, function (response) {
					alert('category sevice error');
				});
			return result;
		}
	}
})();