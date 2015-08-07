(function () {

	'use strict';

	angular
		.module('News')
		.directive('newPreview', newPreview);

	function newPreview() {
		return {
			restrict: 'EA',
			replace: true,
			scope: {
				newInfo: "=info"
			},
			templateUrl: "app/templates/new-preview.html"
		};
	}
})();
