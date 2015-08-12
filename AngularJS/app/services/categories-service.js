(function () {

	'use strict';

	angular
		.module('Services')
		.service('CategoryService', CategoryService);

	CategoryService.$inject = ['BuildCategoryFactory', 'WebStorage', 'config'];

	function CategoryService(buildCategory, webStorage, config) {
		
		var editingCategories;
		var currentCategory;

		this.getAll = getAll;
		this.getById = getById;
		this.current = current;
		this.getEditingCategories = getEditingCategories;
		this.add = add;
		this.remove = remove;
		this.save = save;
		this.reset = reset;

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
		function getEditingCategories() {
			if (!editingCategories) {
				editingCategories = webStorage.get(config.CategoriesWebStorageKey);
			}
			return editingCategories;
		}
		function add(name, file) {
			var id = nextId();
			var imgUrl = file && File.name;
			var category = buildCategory.create(id, name, imgUrl);
			editingCategories.push(category);
		}
		function remove(id) {
			if (editingCategories && editingCategories.length) {
				id = parseInt(id);
				for (var i = 0; i < editingCategories.length; i++) {
					if (editingCategories[i].id === id) {
						editingCategories.splice(i, 1);
						return;
					}
				}
			}
		}
		function save() {
			webStorage.set(config.CategoriesWebStorageKey, editingCategories);
		}
		function nextId() {
			var maxId = (editingCategories.length && editingCategories[editingCategories.length - 1].id) || 0;
			return maxId + 1;
		}
		function reset() {
			editingCategories = webStorage.get(config.CategoriesWebStorageKey);
		}
	}

})();