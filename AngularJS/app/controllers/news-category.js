(function () {

	'use strict';

	angular
		.module('Category')
		.controller('CategoryController', categoryController);

	categoryController.$inject = ['$location', 'CategoryService'];

	function categoryController($location, CategoryService) {

		var vm = this;
		vm.categories = CategoryService.getAll();
		vm.current = new Category(-1, "Последние новости");
		vm.newCategory = null;
		vm.selectCategory = selectCategory;

		function selectCategory(category) {
			vm.current = category;
		}
	}
})();
