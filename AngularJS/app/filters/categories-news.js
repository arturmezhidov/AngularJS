(function () {

	'use strict';

	angular
		.module('Filters')
		.filter('CategoryesNews', ctegoryesNews);

	function ctegoryesNews() {
		return function (categories) {
			return categories.filter(function (category) {
				return category.id >= 0;
			});
		}
	}
})();