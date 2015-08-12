(function () {

	'use strict';

	angular
		.module('Category')
		.service('CategoryService', CategoryService);

	CategoryService.$inject = ['BuildCategoryFactory', 'WebStorage', 'config'];

	function CategoryService(buildCategory, webStorage, config) {

		var currentCategory;

		this.getAll = getAll;
		this.getById = getById;
		this.current = current;

		function getAll() {
			var categories = webStorage.get(config.CategoriesWebStorageKey);
			return categories;
		}
		function getById(id) {
			id = parseInt(id);
			var categories = webStorage.get(config.CategoriesWebStorageKey);
			for (var i = 0; i < categories.length; i++) {
				if (categories[i].id === id) {
					return categories[i];
				}
			}
			return null;
		}
		function current(category) {
			if (category) {
				currentCategory = category;
			}
			return currentCategory;
		}
	}

})();