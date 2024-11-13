(function() {
	'use strict';

	angular.module('MenuApp')
	.component('categoryItems', {
		templateUrl: 'itemscomponent.html',
		//template URL
		bindings: {
			items: '<'
		}
	});
})();