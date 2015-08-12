(function () {

	'use strict';

	angular
		.module('Category')
		.service('CategoryEditService', CategoryEditService);

	CategoryEditService.$inject = ['BuildCategoryFactory', 'WebStorage', 'config'];

	function CategoryEditService(builder, webStorage, config) {

		var editing = webStorage.get(config.CategoriesWebStorageKey);

		this.get = get;
		this.add = add;
		this.remove = remove;
		this.save = save;
		this.reset = reset;

		function get() {
			return editing;
		}
		function add(name, file) {
			var id = nextId();
			var imgUrl = file && File.name;
			var category = builder.create(id, name, imgUrl);
			editing.push(category);
		}
		function remove(id) {
			if (editing && editing.length) {
				id = parseInt(id);
				for (var i = 0; i < editing.length; i++) {
					if (editing[i].id === id) {
						editing.splice(i, 1);
						return;
					}
				}
			}
		}
		function save() {
			webStorage.set(config.CategoriesWebStorageKey, editing);
		}
		function nextId() {
			var maxId = (editing.length && editing[editing.length - 1].id) || 0;
			return maxId + 1;
		}
		function reset() {
			editing = webStorage.get(config.CategoriesWebStorageKey);
		}
	}
})();