(function () {

	'use strict';

	angular
		.module('News')
		.controller('AllNewsController', AllNewsController);

	AllNewsController.$inject = ['$location', 'NewsService'];

	function AllNewsController($location, NewsService) {
		var vm = this;
		vm.news = NewsService.getAll();
	}
})();
