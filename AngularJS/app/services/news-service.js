(function () {

	'use strict';

	angular
		.module('News')
		.service('NewsService', NewsService);

	NewsService.$inject = ['BuildNewsFactory', 'WebStorage', 'config'];

	function NewsService(buildNews, webStorage, config) {

		var news = webStorage.get(config.NewsWebStorageKey) || [];

		this.getAll = getAll;
		this.getById = getById;
		this.add = add;
		this.exists = exists;

		function getAll() {
			return news;
		}
		function getById(id) {
			if (isNaN(id)) {
				return null;
			}
			id = parseInt(id);
			for (var i = 0; i < news.length; i++) {
				if (news[i].id === id) {
					return news[i];
				}
			}
			return null;
		}
		function add(head, body, file, idCategory, date) {

			var id = nextId();
			var imgUrl = file && file.name;

			try {
				idCategory = parseInt(idCategory);
				date = date
					? date.toLocaleDateString()
					: (new Date()).toLocaleDateString();
			} catch (e) {
				return;
			}

			var newNews = buildNews.create(id, idCategory, head, body, imgUrl, date);

			if (newNews) {
				news.unshift(newNews);
				webStorage.set(config.NewsWebStorageKey, news);
			}
		}
		function exists(id) {
			if (isNaN(id)) {
				return false;
			}
			id = parseInt(id);
			for (var i = 0; i < news.length; i++) {
				if (news[i].idCategory === id) {
					return true;
				}
			}
			return false;
		}

		function nextId() {
			var maxId = (news.length && news[news.length - 1].id) || 0;
			return maxId + 1;
		}
	}
})();