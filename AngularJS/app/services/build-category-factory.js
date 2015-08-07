(function () {
	'use strict';

	angular
		.module('Models')
		.factory('BuildCategoryFactory', buildCategoryFactory);

	function buildCategoryFactory() {

		var service = {
			create: create,
			copy: copy,
			reset: reset
		};

		return service;

		function create(id, name) {
			return {
				id: id,
				name: name
			}
		}
		function copy(category) {
			return {
				id: category && category.id,
				name: category && category.name
			}
		}
		function reset(category) {
			if (category) {
				category.id = -1;
				category.name = null;
			}
			return category;
		}
	}
})();