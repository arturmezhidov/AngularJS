(function () {

	'use strict';

	angular
		.module('Category')
		.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['CategoryService'];

	function CategoriesController(srvCategory) {
		var vm = this;
		vm.categories = srvCategory.getAll();
	}
})();
