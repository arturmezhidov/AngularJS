﻿(function () {

	'use strict';

	angular
		.module('Directives')
		.directive('newsPreview', newsPreview);

	function newsPreview() {
		return {
			restrict: 'EA',
			replace: true,
			scope: {
				newsInfo: "=info"
			},
			templateUrl: "app/templates/news-preview.html"
		};
	}
})();
