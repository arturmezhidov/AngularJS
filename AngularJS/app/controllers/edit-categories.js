(function () {

	'use strict';

	angular
		.module('Builders')
		.controller('EditCategoryController', EditCategoryController);

	EditCategoryController.$inject = ['CategoryEditService'];

	function EditCategoryController(srvEditor) {

		var vm = this;
		vm.categories = srvEditor.get();
		
		vm.addCategory = addCategory;
		vm.removeCategory = removeCategory;
		vm.reset = reset;
		vm.save = srvEditor.save;
		vm.clear = clear;

		function addCategory() {
			srvEditor.add(vm.categoryName, vm.file);
			vm.categoryName = null;
		}
		function removeCategory(category) {
			srvEditor.remove(category.id);
		}
		function reset() {
			srvEditor.reset();
			vm.categories = srvEditor.get();
			vm.categoryName = null;
		}
		function clear(category) {
			category.name = null;
		}
	}
})();
