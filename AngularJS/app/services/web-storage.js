(function () {

	'use strict';

	angular
		.module('Data')
		.service('WebStorage', WebStorage);

	function WebStorage() {

		this.get = get;
		this.set = set;
		this.remove = remove;

		function get(key) {
			var strJson = localStorage.getItem(key);
			var obj = JSON.parse(strJson);
			return obj;
		}

		function set(key, obj) {
			var strJson = JSON.stringify(obj);
			localStorage.setItem(key, strJson);
		}

		function remove(key) {
			localStorage.setItem(key, '');
		}
	}
})();