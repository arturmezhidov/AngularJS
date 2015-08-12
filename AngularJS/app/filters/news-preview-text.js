(function () {

	'use strict';

	angular
		.module('Filters')
		.filter('newsPreviewText', newsPreviewText);

	function newsPreviewText() {

		return function (text) {
			if (text.length < 250) {
				return text;
			}
			return text.substr(0, 250) + "...";
		}
	}
})();