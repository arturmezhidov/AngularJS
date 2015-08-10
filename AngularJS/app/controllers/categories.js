(function () {

	'use strict';

	angular
		.module('Category')
		.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['$location', 'CategoryService'];

	function CategoriesController($location, srvCategory) {

		var vm = this;
		vm.categories = srvCategory.getAll();
		vm.selectCategory = selectCategory;

		function selectCategory(category) {
			srvCategory.current(category);
		}
	}
})();
