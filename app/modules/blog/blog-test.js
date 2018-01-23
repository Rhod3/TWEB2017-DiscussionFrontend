(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:blogTest
	 * @description
	 * # blogTest
	 * Test of the app
	 */

	describe('blog test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('ang-discussion');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('BlogCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
