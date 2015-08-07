(function () {
	'use strict';

	angular
		.module('app')
		.provider('config', configProvider);

	function configProvider() {
		var configValue = false;

		this.setConfigValue = function (value) {
			configValue = value;
		};

		this.$get = configFactory;

		configFactory.$inject = ['$http'];
		function configFactory($http) {
			var service = {
				getData: getData
			};

			return service;


			function getData() {
				return configValue;
			}
		}
	}
})();