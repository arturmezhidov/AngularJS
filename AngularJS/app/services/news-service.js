(function () {

	'use strict';

	angular
		.module('News')
		.service('NewsService', NewsService);

	NewsService.$inject = ['$http', 'BuildNewsFactory'];

	function NewsService($http, buildNews) {

		var self = this;
		var news = [];

		this.add = add;
		this.remove = remove;
		this.removeCategory = removeCategory;
		this.find = find;
		this.getById = getById;
		this.getAll = getAll;

		function add(head, body, imgUrl, idCategory, date) {
			var maxId = (news.length && news[news.length - 1].id) || 0;
			if (!date) {
				date = (new Date()).toLocaleDateString();
			} else if ((typeof date) == "object") {
				date = date.toLocaleDateString();
			}
			idCategory = isNaN(idCategory)
				? -1
				: parseInt(idCategory);
			news.unshift(buildNews.create(maxId + 1, idCategory, head, body, imgUrl, date));
		}
		function find(id) {
			if (isNaN(id)) {
				return null;
			}
			id = parseInt(id);
			for (var i = 0; i < news.length; i++) {
				if (news[i].id === id) {
					return {
						index: i,
						obj: news[i]
					}
				}
			}
			return null;
		}
		function remove(id) {
			var result = self.find(id);
			if (result) {
				news.splice(result.index, 1);
			}
		}
		function removeCategory(idCategory) {
			var result = [];
			for (var i = 0; i < news.length; i++) {
				if (news[i].idCategory !== idCategory) {
					result.push(news[i]);
				}
			}
			news = result;
		}
		function getAll() {
			return news;
		}
		function getById(id) {
			var result = self.find(id);
			return result && result.obj;
		}

		$http.get("app-data/news.json")
			.then(function (response) {
				response.data.forEach(function (item) {
					news.push(item);
				});
			}, function (response) {
				alert('news sevice error');
			});
	}
})();