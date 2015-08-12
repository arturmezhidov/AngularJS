(function () {
	'use strict';

	angular
		.module('Controllers')
		.controller('NewsController', NewsController);

	NewsController.$inject = ['$location', '$routeParams', 'NewsService', 'CategoryService'];

	function NewsController($location, $routeParams, srvNews, srvCategory) {

		var vm = this;
		vm.newsInfo = srvNews.getById($routeParams.id);

		if (!vm.newsInfo) {
			$location.path('/e404');
		}
		vm.category = srvCategory.getById(vm.newsInfo.idCategory);
	}
})();
