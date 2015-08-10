(function () {

	'use strict';

	angular
		.module('Category')
		.controller('CreateNewsController', CreateNewsController);

	CreateNewsController.$inject = ['$location', 'NewsService', 'CategoryService'];

	function CreateNewsController($location, srvNews, srvCategory) {

		var vm = this;
		vm.categories = srvCategory.getAll();

		vm.add = function () {
			srvNews.add(vm.head, vm.body, vm.file && vm.file.name, vm.idCategory, vm.date);
			vm.head = null;
			vm.body = null;
		}
	}
})();
