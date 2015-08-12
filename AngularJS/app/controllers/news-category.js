(function () {

	'use strict';

	angular
		.module('Controllers')
		.controller('NewsCategoryController', NewsCategoryController);

	NewsCategoryController.$inject = ['$location', '$routeParams', 'NewsService', 'CategoryService'];

	function NewsCategoryController($location, $routeParams, srvNews, srvCategory) {

		var vm = this;
		vm.isEmpty = isEmpty;
		vm.news = srvNews.getAll();
		vm.category = srvCategory.getById($routeParams.id);

		if (!vm.category) {
			$location.path('/e404');
		}

		function isEmpty() {
			var result = srvNews.exists(vm.category.id);
			return result !== true;
		}
	}
})();
