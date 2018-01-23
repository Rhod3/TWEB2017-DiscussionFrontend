(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('ang-discussion', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		
		'ngTouch',
		'ui.router',
		'home',
		'rest',
		'blog',
	]);

})();
