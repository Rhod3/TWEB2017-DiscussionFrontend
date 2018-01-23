(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:restService
	 * @description
	 * # restService
	 * Service of the app
	 */

  	angular
		.module('rest')
		.factory('RestService', Rest);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Rest.$inject = ['$http'];

		function Rest ($http) {

		}

})();
