(function () {
	'use strict';

	angular
		.module('Services')
		.factory('BuildNewsFactory', buildNewsFactory);

	function buildNewsFactory() {

		var service = {
			create: create,
			copy: copy,
			reset: reset
		};

		return service;

		function create(id, idCategory, head, body, imgUrl, date) {
			return {
				id: id,
				idCategory: idCategory,
				head: head,
				body: body,
				imgUrl: imgUrl,
				date: date 
			}
		}
		function copy(source, dist) {
			if (!dist) {
				return create(source.id, source.idCategory, source.head, source.body, source.imgUrl, source.date);
			}
			dist.id = source.id;
			dist.idCategory = source.idCategory;
			dist.head = source.head;
			dist.body = source.body;
			dist.imgUrl = source.imgUrl;
			dist.date = source.date;
		}
		function reset(news) {
			if (news) {
				news.id = -1;
				news.idCategory = -1;
				news.head = null;
				news.body = null;
				news.imgUrl = null;
				news.date = null;
			}
			return news;
		}
	}
})();