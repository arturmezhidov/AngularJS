(function () {

	'use strict';

	angular
		.module('News')
		.filter('previewNew', previewNew);

	function previewNew() {

		return function (text) {
			return text.substr(0, 520) + "...";
		}
	}
})();