(function () {

	'use strict';

	angular
		.module('News')
		.service('SearchService', SearchService);

	SearchService.$inject = ['$http'];

	function SearchService($http) {

		var self = this;
		var searchInfo = {
			text: ""
		};

		this.getInfo = getInfo;

		function getInfo() {
			return searchInfo;
		}
	}
})();