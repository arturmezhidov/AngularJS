(function () {

	'use strict';

	angular
		.module('Builders')
		.controller('CreateNewsController', CreateNewsController);

	CreateNewsController.$inject = ['NewsService', 'CategoryService'];

	function CreateNewsController(srvNews, srvCategory) {

		var vm = this;
		vm.categories = srvCategory.getAll();

		vm.add = function () {
			srvNews.add(vm.head, vm.body, vm.file, vm.idCategory, vm.date);
			vm.head = null;
			vm.body = null;
		}
	}
})();
