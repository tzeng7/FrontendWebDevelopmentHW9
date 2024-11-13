(function() {
	'use strict';

	angular.module('Data')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['item'];

	function ItemsController(item) {
		var itemsControl = this;

		itemsControl.totalItems = item;
	}
})();