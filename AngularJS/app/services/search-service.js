(function () {

	'use strict';

	angular
		.module('News')
		.service('SearchService', SearchService);

	function SearchService() {

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