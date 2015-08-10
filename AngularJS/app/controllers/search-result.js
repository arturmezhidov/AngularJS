﻿(function () {
	'use strict';

	angular
		.module('News')
		.controller('SearchResultController', SearchResultController);

	SearchResultController.$inject = ['$location', '$routeParams', 'NewsService', 'SearchService'];

	function SearchResultController($location, $routeParams, srvNews, srvSearch) {
		var vm = this;
		vm.searchInfo = srvSearch.getInfo();
		vm.news = srvNews.getAll();
	}
})();