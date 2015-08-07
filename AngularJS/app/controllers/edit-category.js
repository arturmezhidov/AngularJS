(function () {

	'use strict';

	angular
		.module('Category')
		.controller('EditCategoryController', EditCategoryController);

	EditCategoryController.$inject = ['$location', 'CategoryService'];

	function EditCategoryController($location, CategoryService) {

		var vm = this;
		vm.categories = CategoryService.getAll();
		vm.newCategory = null;
		vm.removeCategory = removeCategory;
		vm.addCategory = addCategory;

		function removeCategory(category) {
			CategoryService.remove(category.id);
		}

		function addCategory() {
			CategoryService.add(vm.newCategory);
			vm.newCategory = null;
		}
	}
})();
