﻿(function () {

	'use strict';

	angular
		.module('News')
		.service('WebStorage', WebStorage);

	WebStorage.$inject = ['$http'];

	function WebStorage($http) {

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
			date = date || (new Date()).toLocaleDateString();
			news.push(new New(head, body, imgUrl, maxId + 1, idCategory, date));
		}
		function find(id) {
			for (var i = 0; i < news.length; i++) {
				var t = news[i];
				var y = t.id;
				if (y == id) {
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
				response.data.forEach(function(item) {
					news.push(item);
				});
			}, function(response) {
				alert('news sevice error');
			});

		this.save = function(arr) {
			var json = toJSON(arr);
			alert(json);
		}
	}
})();