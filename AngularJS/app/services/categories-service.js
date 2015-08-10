(function () {

	'use strict';

	angular
		.module('Category')
		.service('CategoryService', CategoryService);

	CategoryService.$inject = ['$http', 'BuildCategoryFactory'];

	function CategoryService($http, buildCategory) {

		var self = this;
		var categories;
		var currentCategory;

		this.getAll = getAll;
		this.getById = getById;
		this.current = current;

		function getAll() {

			if (!categories) {

				categories = [];

				$http.get("app-data/categories.json")
					.then(function (response) {
						response.data.forEach(function (item) {
							categories.push(item);
						});
					});
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
			if (!currentCategory) {
				currentCategory = {};
			}
			if (category) {
				buildCategory.copy(category, currentCategory);
			}
			return currentCategory;
		}
	}

})();