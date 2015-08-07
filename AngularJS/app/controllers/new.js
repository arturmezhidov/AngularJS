(function () {
	'use strict';

	angular
		.module('News')
		.controller('NewController', NewController);

	NewController.$inject = ['$location', '$routeParams', 'NewsService'];

	function NewController($location, $routeParams, NewsService) {

		var vm = this;

		var newInfo = NewsService.getById($routeParams.id);

		if (newInfo) {
			vm.newInfo = newInfo;
		} else {
			$location.path('/');
		}
	}
})();
