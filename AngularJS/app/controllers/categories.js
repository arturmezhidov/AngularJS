(function () {

	'use strict';

	angular
		.module('Category')
		.controller('CategoryController', categoryController);

	categoryController.$inject = ['$location', 'CategoryService'];

	function categoryController($location, srvCategory) {

		var vm = this;
		vm.categories = srvCategory.getAll();
		vm.selectCategory = selectCategory;

		function selectCategory(category) {
			srvCategory.current(category);
		}
	}
})();
