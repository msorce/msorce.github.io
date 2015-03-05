angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider ){
		//if user inputs any other extension return home
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url:'/',
			templateUrl: 'templates/home.html'
		})
		$stateProvider.state('work', {
			url:'/work',
			templateUrl: 'templates/work.html'
		})
		$stateProvider.state('contact', {
			url:'/contact',
			templateUrl: 'templates/contact.html'
		})
	}])