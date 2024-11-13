(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categoriesList', {
		templateUrl: 'categoriescomponent.html',
		//template URL
		bindings: {
			categories: '<'
		}
	});
})();