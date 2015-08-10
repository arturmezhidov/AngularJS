(function () {

	'use strict';

	angular
		.module('News')
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