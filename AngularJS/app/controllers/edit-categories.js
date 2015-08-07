(function () {

	'use strict';

	angular
		.module('Category')
		.controller('EditCategoryController', EditCategoryController);

	EditCategoryController.$inject = ['$location', 'CategoryEditService'];

	function EditCategoryController($location, editor) {

		var vm = this;
		vm.categories = editor.get();

		vm.addCategory = addCategory;
		vm.removeCategory = removeCategory;
		vm.reset = reset;
		vm.save = editor.save;

		function addCategory() {
			editor.add(vm.categoryName);
			vm.categoryName = null;
		}
		function removeCategory(category) {
			editor.remove(category.id);
		}
		function reset() {
			editor.reset();
			vm.categoryName = null;
		}
	}
})();
