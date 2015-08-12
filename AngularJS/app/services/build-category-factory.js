(function () {
	'use strict';

	angular
		.module('Services')
		.factory('BuildCategoryFactory', buildCategoryFactory);

	function buildCategoryFactory() {

		var service = {
			create: create,
			copy: copy,
			reset: reset
		};

		return service;

		function create(id, name, imgUrl) {
			return {
				id: id,
				name: name,
				file: {
					name: imgUrl
				}
			}
		}
		function copy(source, dist) {
			if (!dist) {
				return create(source.id, source.name, source.file.name);
			}
			dist.id = source.id;
			dist.name = source.name;
			dist.file.name = source.file.name;
		}
		function reset(category) {
			if (category) {
				category.id = -1;
				category.name = null;
				category.file.name = null;
			}
			return category;
		}
	}
})();