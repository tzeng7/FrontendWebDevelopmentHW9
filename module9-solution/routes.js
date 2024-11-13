(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
  	.state('home', {
  		url: '/home',
  		templateUrl: 'hometemplate.html'
  	})

    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.html',
      controller: 'CategoriesController as controller',
      resolve: {
        categories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'items.html',
      controller: 'ItemsController as itemsControl',
      resolve: {
        item: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.shortName);
        }]
      }
    });
}


})();