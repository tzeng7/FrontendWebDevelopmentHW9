(function() {
	'use strict';

	angular.module('Data')
	.controller('CategoriesController', CategoriesController);

	// CategoriesController.$inject = ['MenuDataService'];
	   CategoriesController.$inject = ['categories'];

	function CategoriesController(categories) {
		var catControl = this;

		catControl.categories = categories;

		// catControl.$onInit = function() {
		// 	MenuDataService.getAllCategories()
		// 		.then(function(response) {
		// 			catControl.categories = response;
		// 		});
		// };
	}
})();