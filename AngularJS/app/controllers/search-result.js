(function () {
	'use strict';

	angular
		.module('Controllers')
		.controller('SearchResultController', SearchResultController);

	SearchResultController.$inject = ['$routeParams', 'NewsService', 'SearchService'];

	function SearchResultController($routeParams, srvNews, srvSearch) {
		var vm = this;
		vm.news = srvNews.getAll();
		vm.searchInfo = srvSearch.getInfo();
	}
})();
