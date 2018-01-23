(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:restCtrl
	* @description
	* # restCtrl
	* Controller of the app
	*/

  	angular
		.module('rest')
		.controller('RestCtrl', Rest);

		Rest.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Rest() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
