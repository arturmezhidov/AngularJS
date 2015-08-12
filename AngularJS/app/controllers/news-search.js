(function () {
	'use strict';

	angular
		.module('Controllers')
		.controller('NewsSearchController', NewsSearchController);

	NewsSearchController.$inject = ['$location', '$routeParams', 'SearchService'];

	function NewsSearchController($location, $routeParams, srvSearch) {
		var vm = this;
		vm.searchInfo = srvSearch.getInfo();
		vm.search = function () {
			$location.path('/search');
		}
	}
})();
