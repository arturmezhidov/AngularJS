(function () {

	'use strict';

	angular
		.module('News')
		.controller('AllNewsController', AllNewsController);

	AllNewsController.$inject = ['$location', 'NewsService', 'CategoryService'];

	function AllNewsController($location, srvNews, srvCategory) {
		var vm = this;
		vm.news = srvNews.getAll();
		vm.currentCategory = srvCategory.current();
	}
})();
