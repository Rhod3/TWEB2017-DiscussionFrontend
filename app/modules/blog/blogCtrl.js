(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:blogCtrl
	* @description
	* # blogCtrl
	* Controller of the app
	*/

  	angular
		.module('blog')
		.controller('BlogCtrl', BlogCtrl);

		BlogCtrl.$inject = ['$scope', 'blogService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function BlogCtrl($scope, blogService) {
			/*jshint validthis: true */
			var vm = this;

			vm.comments = null;
			vm.authorName;
			vm.authorID;
			vm.message;
			vm.articleId = 1;
			vm.comments = [];


			vm.postComment = function(articleID) {
				console.log("blogCtrl: Comment posted by " + vm.authorName);

				var payload = {
					"author": vm.authorName,
					"authorID": vm.authorID,
					"message": vm.message
				};

				blogService.
					executePostRequest(`http://localhost:8080/api/comments?articleID=${articleID}`, payload)
					.then((data) => {
						vm.reloadComments();
						vm.authorName = undefined;
						vm.authorID = undefined;
						vm.message = undefined;
					});
				
			}

			vm.getAllComments = function(articleID){
				console.log("Getting all comments from article " + articleID);
				blogService
					.executeGetRequest(`http://localhost:8080/api/comments?articleID=${articleID}&tree=false`)
					.then((data) => {
						vm.comments = data.response.data;
						$scope.$apply();
						console.log(vm.comments);
					})
			}

			vm.deleteComment = function(commentId){
				console.log(`Delete comment ${commentId}`);
				blogService
					.executeDeleteRequest(`http://localhost:8080/api/comments/${commentId}`)
					.then((data) => {
						vm.getAllComments(vm.articleId);
					});
			}

			vm.reloadComments = function(){
				vm.getAllComments(vm.articleId);
			}

			vm.getAllComments(vm.articleId);
		}

})();
