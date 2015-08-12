(function () {

	'use strict';

	angular
		.module('Controllers')
		.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['CategoryService'];

	function CategoriesController(srvCategory) {
		var vm = this;
		vm.categories = srvCategory.getAll();
	}
})();
