(function () {

	'use strict';

	angular
		.module('News')
		.filter('newsOfCategory', newsOfCategory);

	function newsOfCategory() {
		return function (news, idCategory) {
			if (idCategory < 0) {
				return news;
			}
			return news.filter(function (iNew) {
				return iNew.idCategory === idCategory;
			});
		}
	}

})();