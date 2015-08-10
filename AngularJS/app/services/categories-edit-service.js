(function () {

	'use strict';

	angular
		.module('Category')
		.service('CategoryEditService', CategoryEditService);

	CategoryEditService.$inject = ['$http', 'CategoryService', 'BuildCategoryFactory'];

	function CategoryEditService($http, service, builder) {

		var original = service.getAll();
		var editing = copy(original);

		this.get = get;
		this.add = add;
		this.remove = remove;
		this.reset = reset;
		this.save = save;

		function get() {
			return editing;
		}
		function add(name, imgUrl) {
			var id = nextId();
			var category = builder.create(id, name, imgUrl);
			editing.push(category);
		}
		function remove(id) {
			id = parseInt(id);
			for (var i = 0; i < editing.length; i++) {
				if (editing[i].id === id) {
					editing.splice(i, 1);
					return;
				}
			}
		}
		function reset() {
			copy(original, editing);
		}
		function save() {
			copy(editing, original);
		}

		function copy(source, dest) {
			if (!dest) {
				var result = source.map(function (item) {
					return builder.copy(item);
				});
				return result;
			}
			dest.length = 0;
			source.forEach(function (item) {
				dest.push(builder.copy(item));
			});
			return dest;
		}
		function nextId() {
			var maxId = (editing.length && editing[editing.length - 1].id) || 0;
			return maxId + 1;
		}
	}
})();