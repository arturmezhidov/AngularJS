(function () {

	'use strict';

	angular
		.module('Controllers')
		.controller('EditCategoryController', EditCategoryController);

	EditCategoryController.$inject = ['CategoryService'];

	function EditCategoryController(srvCategories) {

		var vm = this;
		vm.categories = srvCategories.getEditingCategories();
		
		vm.addCategory = addCategory;
		vm.removeCategory = removeCategory;
		vm.reset = reset;
		vm.save = srvCategories.save;
		vm.clear = clear;

		function addCategory() {
			srvCategories.add(vm.categoryName, vm.file);
			vm.categoryName = null;
		}
		function removeCategory(category) {
			srvCategories.remove(category.id);
		}
		function reset() {
			srvCategories.reset();
			vm.categories = srvCategories.getEditingCategories();
			vm.categoryName = null;
		}
		function clear(category) {
			category.name = null;
		}
	}
})();
