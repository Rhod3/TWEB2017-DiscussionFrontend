'use strict';

/**
 * @ngdoc function
 * @name app.route:blogRoute
 * @description
 * # blogRoute
 * Route of the app
 */

angular.module('blog')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('blog', {
				url:'/blog',
				templateUrl: 'app/modules/blog/blog.html',
				controller: 'BlogCtrl',
				controllerAs: 'vm'
			});
		
	}]);
