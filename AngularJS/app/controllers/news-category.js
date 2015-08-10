(function () {

	'use strict';

	angular
		.module('News')
		.controller('NewsCategoryController', NewsCategoryController);

	NewsCategoryController.$inject = ['$location', 'NewsService', 'CategoryService'];

	function NewsCategoryController($location, srvNews, srvCategory) {
		var vm = this;
		vm.news = srvNews.getAll();
		vm.currentCategory = srvCategory.current();
		vm.isEmpty = function () {
			return true;
		}
	}
})();
