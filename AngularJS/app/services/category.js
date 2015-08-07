(function () {

	'use strict';

	angular
		.module('Category')
		.service('CategoryService', CategoryService);

	CategoryService.$inject = ['$http'];

	function CategoryService($http) {

		var self = this;
		var categories = [];

		this.add = add;
		this.rename = rename;
		this.remove = remove;
		this.find = find;
		this.getById = getById;
		this.getAll = getAll;

		function add(name) {
			var maxId = (categories.length && categories[categories.length - 1].id) || 0;
			categories.push(new Category(maxId + 1, name));
			return categories;
		}
		function find(id) {
			for (var i = 0; i < categories.length; i++) {
				if (categories[i].id === id) {
					return {
						index: i,
						obj: categories[i]
					}
				}
			}
			return null;
		};
		function rename(id, name) {
			var result = self.find(id);
			if (result) {
				result.obj.name = name;
			}
		}
		function remove(id) {
			var result = self.find(id);
			if (result) {
				categories.splice(result.index, 1);
			}
		}
		function getAll() {
			return categories;
		}
		function getById(id) {
			var result = self.find(id);
			return result && result.obj;
		}

		$http.get("app-data/categories.json")
			.then(function (response) {
				response.data.forEach(function(item) {
					categories.push(item);
				});
			}, function (response) {
				alert('category sevice error');
			});
	}
})();