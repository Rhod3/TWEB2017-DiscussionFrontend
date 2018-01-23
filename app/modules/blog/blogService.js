(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:blogService
	 * @description
	 * # blogService
	 * Service of the app
	 */

	angular
		.module('blog')
		.factory('blogService', Blog);
	// Inject your dependencies as .$inject = ['$http', 'someSevide'];
	// function Name ($http, someSevide) {...}

	Blog.$inject = ['$http'];

	function Blog($http) {
		return {
			executeGetRequest: executeGetRequest,
			executePostRequest: executePostRequest,
			executePutRequest: executePutRequest,
			executeDeleteRequest: executeDeleteRequest
		};

		function executeGetRequest(urlString) {

			return new Promise((resolve) => {
				console.log(`GETTING ${urlString}...`);

				// Simple GET request example:
				$http({
					method: 'GET',
					url: urlString,
					headers: {
						'Accept': 'application/json',
					}
				}).then(function successCallback(response) {
					// this callback will be called asynchronously
					// when the response is available
					resolve({
						status: 1,
						response,
					});
				}, function errorCallback(response) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					resolve({
						status: 0,
						response,
					});
				});
			});
		}

		function executePostRequest(urlString, payload) {

			return new Promise((resolve) => {
				console.log(`POSTING ${urlString}...`);

				// Simple GET request example:
				$http({
					method: 'POST',
					url: urlString,
					data: payload,
					headers: {
						'Content-Type': 'application/json',
						'Accept': '*/*'
					}
				}).then(function successCallback(response) {
					// this callback will be called asynchronously
					// when the response is available
					resolve({
						status: 1,
						response,
					});
				}, function errorCallback(response) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					resolve({
						status: 0,
						response,
					});
				});
			});
		}

		function executePutRequest(urlString, payload) {
			
						return new Promise((resolve) => {
							console.log(`PUTING ${urlString}...`);
			
							// Simple PUT request example:
							$http({
								method: 'PUT',
								url: urlString,
								data: payload,
								headers: {
									'Content-Type': 'application/json',
									'Accept': '*/*'
								}
							}).then(function successCallback(response) {
								// this callback will be called asynchronously
								// when the response is available
								resolve({
									status: 1,
									response,
								});
							}, function errorCallback(response) {
								// called asynchronously if an error occurs
								// or server returns response with an error status.
								resolve({
									status: 0,
									response,
								});
							});
						});
					}

		function executeDeleteRequest(urlString, payload) {

			return new Promise((resolve) => {
				console.log(`POSTING ${urlString}...`);

				// Simple DELETE request example:
				$http({
					method: 'DELETE',
					url: urlString,
					data: payload,
					headers: {
						'Accept': '*/*'
					}
				}).then(function successCallback(response) {
					// this callback will be called asynchronously
					// when the response is available
					resolve({
						status: 1,
						response,
					});
				}, function errorCallback(response) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					resolve({
						status: 0,
						response,
					});
				});
			});
		}
	}
})();
