/// <reference path="../directives/news-preview.js" />
(function () {

	'use strict';

	angular
		.module('Services')
		.service('SearchService', SearchService);

	function SearchService() {

		var searchInfo = {
			text: ""
		};

		this.getInfo = getInfo;

		function getInfo() {
			return searchInfo;
		}
	}
})();